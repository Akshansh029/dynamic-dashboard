"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import AddWidgetButton from "../components/AddWidgetButton";
import { initialDashboardData } from "@/dashboardData";
import Widget from "../components/Widget";
import WidgetSidebar from "../components/WidgetSidebar";
import useSearchStore from "../store/useSearchStore";
import { toast } from "sonner";

const Page = () => {
  const { searchQuery } = useSearchStore();
  const [dashboardData, setDashboardData] = useState(() => {
    const savedData = localStorage.getItem("dashboardData");
    return savedData ? JSON.parse(savedData) : initialDashboardData;
  });
  const [openSidebar, setOpenSidebar] = useState(false);
  const [filteredWidgets, setFilteredWidgets] = useState([]);

  useEffect(() => {
    localStorage.setItem("dashboardData", JSON.stringify(dashboardData));
  }, [dashboardData]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = dashboardData.categories.flatMap((category) =>
        category.widgets.filter((widget) =>
          widget.widgetName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredWidgets(filtered);
    } else {
      setFilteredWidgets([]);
    }
  }, [searchQuery, dashboardData]);

  const handleOpenSidebar = (e) => {
    e.preventDefault();
    setOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const removeWidget = (categoryId, widgetId) => {
    setDashboardData((prev) => {
      const updatedCategories = prev.categories.map((category) => {
        if (category.categoryId === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(
              (widget) => widget.widgetId !== widgetId
            ),
          };
        }
        return category;
      });
      return { categories: updatedCategories };
    });
    toast.success("Category deleted successfully");
  };

  return (
    <div className="h-full bg-[#f0f5f9] py-6 px-8 relative">
      {openSidebar && (
        <WidgetSidebar
          closeSidebar={handleCloseSidebar}
          setDashboardData={setDashboardData}
          dashboardData={dashboardData}
        />
      )}
      <div className="w-full flex flex-col gap-2">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-[#054b72]">
            CNAPP Dashboard
          </h1>
          <AddWidgetButton handleOpenSidebar={handleOpenSidebar} />
        </div>
        <div className="px-3">
          {searchQuery ? (
            <div className="text-slate-800">
              <h2 className="text-lg font-semibold text-slate-800">
                Search Results
              </h2>
              <div className="mt-2 flex items-center gap-3 overflow-x-auto flex-nowrap">
                {filteredWidgets.length > 0 ? (
                  filteredWidgets.map((widget) => (
                    <Widget
                      key={widget.widgetId}
                      categoryId={widget.categoryId}
                      widgetId={widget.widgetId}
                      widgetName={widget.widgetName}
                      widgetText={widget.widgetText}
                      onRemove={removeWidget}
                    />
                  ))
                ) : (
                  <div className="flex items-center justify-center text-slate-500">
                    No widgets found.
                  </div>
                )}
              </div>
            </div>
          ) : (
            dashboardData.categories.map((category) => (
              <div className="text-slate-800 mb-2" key={category.categoryId}>
                <h2 className="text-lg font-semibold text-slate-800">
                  {category.categoryName}
                </h2>
                <div className="mt-2 flex items-center gap-3 overflow-x-auto flex-nowrap">
                  {category.widgets.map((widget) => (
                    <Widget
                      key={widget.widgetId}
                      categoryId={category.categoryId}
                      widgetId={widget.widgetId}
                      widgetName={widget.widgetName}
                      widgetText={widget.widgetText}
                      onRemove={removeWidget}
                    />
                  ))}
                  <div className="flex min-w-[400px] min-h-[200px] bg-white rounded-xl items-center justify-center flex-shrink-0">
                    <AddWidgetButton handleOpenSidebar={handleOpenSidebar} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

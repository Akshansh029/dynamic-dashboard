"use client";
import React, { useState } from "react";
import AddWidgetButton from "../components/AddWidgetButton";
import { initialDashboardData } from "@/dashboardData";
import Widget from "../components/Widget";
import WidgetSidebar from "../components/WidgetSidebar";

const Page = () => {
  const [dashboardData, setDashboardData] = useState(initialDashboardData);
  const [openSidebar, setOpenSidebar] = useState(false);

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
  };

  return (
    <div className="h-full bg-[#f0f5f9] py-10 px-8 relative">
      {openSidebar && (
        <WidgetSidebar
          closeSidebar={handleCloseSidebar}
          dashboardData={dashboardData} // Pass the updated data here
        />
      )}
      <div className="">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-[#054b72]">
            CNAPP Dashboard
          </h1>
          <AddWidgetButton handleOpenSidebar={handleOpenSidebar} />
        </div>
        <div className="category-container px-2 py-2 flex flex-col gap-4">
          {dashboardData.categories.map((category) => (
            <div className="text-slate-800" key={category.categoryId}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

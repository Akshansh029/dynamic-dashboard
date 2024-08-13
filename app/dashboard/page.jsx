// Page.jsx
"use client";
import React, { useState } from "react";
import AddWidgetButton from "../components/AddWidgetButton";
import { initialDashboardData } from "@/dashboardData";
import Widget from "../components/Widget";

const Page = () => {
  const [dashboardData, setDashboardData] = useState(initialDashboardData);

  const removeWidget = (categoryId, widgetId) => {
    setDashboardData((prevData) => {
      const updatedCategories = prevData.categories.map((category) => {
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
    <div className="h-full bg-[#f0f5f9] py-10 px-8">
      <div className="">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-black">CNAPP Dashboard</h1>
          <AddWidgetButton />
        </div>
        <div className="category-container px-2 py-2 flex flex-col gap-4">
          {dashboardData.categories.map((category) => (
            <div className="text-black" key={category.categoryId}>
              <h2 className="text-lg font-semibold text-[#054b72]">
                {category.categoryName}
              </h2>
              <div className="mt-2 flex items-center gap-3">
                {category.widgets.map((widget) => (
                  <Widget
                    key={widget.widgetId}
                    categoryId={category.categoryId}
                    widgetId={widget.widgetId}
                    widgetName={widget.widgetName}
                    widgetText={widget.widgetText}
                    onRemove={removeWidget} // Pass function as prop
                  />
                ))}
                <div className="flex w-[400px] h-[200px] bg-white rounded-xl items-center justify-center">
                  <AddWidgetButton />
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

"use client";
import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { dashboardData } from "@/dashboardData";

const removeWidget = (categoryId, widgetId) => {
  console.log("Removing");
  const category = dashboardData.categories.find(
    (cat) => cat.categoryId === categoryId
  );
  if (category) {
    category.widgets = category.widgets.filter(
      (widget) => widget.widgetId !== widgetId
    );
  } else {
    console.error("Category not found!");
  }
};

const Widget = ({ widgetName, widgetText }) => {
  return (
    <div className="relative widget w-[400px] h-[200px] bg-white rounded-xl flex flex-col p-4">
      <button className="absolute top-3 right-3" onClick={() => removeWidget()}>
        <IoIosClose className="text-slate-600 " size={24} />
      </button>
      <h2 className="text-base font-semibold text-[#054b72]">{widgetName}</h2>
      <div className="flex flex-col h-full">
        <p className="text-black text-base mt-2">{widgetText}</p>
        <div className="mt-[2rem] flex flex-col items-center justify-center gap-2s">
          <BsGraphUp size={30} className="text-slate-500" />
          <p className="text-sm text-slate-500">No graph data is available</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;

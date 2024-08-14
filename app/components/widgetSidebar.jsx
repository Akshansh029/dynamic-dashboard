import React, { useState } from "react";
import { initialDashboardData } from "@/dashboardData";
import { FiGrid } from "react-icons/fi";
import { CiTextAlignLeft } from "react-icons/ci";

const WidgetSidebar = ({ closeSidebar }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={closeSidebar}
      ></div>
      <div className="w-2/5 bg-white z-50 fixed top-0 right-0 h-screen flex flex-col justify-between">
        <div>
          <div className="header h-fit bg-[#13147c] p-2">
            <h1 className="font-semibold text-white text-base">Add widget</h1>
          </div>
          <div className="content p-4 flex flex-col overflow-y-auto h-[calc(100vh-120px)]">
            <p className="text-sm text-black font-medium">
              Personalize your dashboard by adding the following widget
            </p>
            <div className="input-container flex flex-col gap-2">
              <div className="flex items-center gap-2 mt-4">
                <FiGrid className="text-[#054b72] text-xl" />
                <input
                  type="text"
                  name="widgetName"
                  id="widgetName"
                  className="w-full px-3 py-2 border max-h-8 border-gray-300 text-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#054b72] placeholder:text-sm"
                  placeholder="Widget name"
                />
              </div>
              <div className="flex items-center gap-2">
                <CiTextAlignLeft className="text-[#054b72] text-xl" />
                <input
                  type="text"
                  name="widgetText"
                  id="widgetText"
                  className="w-full px-3 py-2 border max-h-8 border-gray-300 text-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#054b72] placeholder:text-sm"
                  placeholder="Widget text"
                />
              </div>
            </div>
            <div className="container w-fit flex">
              {initialDashboardData.categories.map((category, index) => (
                <button
                  key={index}
                  className={`relative text-sm font-semibold w-[80px] py-4 hover:text-[#054b72] ${
                    selectedCategoryIndex === index
                      ? "text-[#054b72]"
                      : "text-slate-400"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {category.categoryName.split(" ")[0]}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full transition-all duration-300 ${
                      selectedCategoryIndex === index
                        ? "bg-[#054b72]"
                        : "bg-slate-400"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
            <div className="checkbox-container flex flex-col gap-2 px-4 mt-4">
              {initialDashboardData.categories[
                selectedCategoryIndex
              ]?.widgets.map((widget, index) => (
                <div
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-md flex gap-2"
                  key={index}
                >
                  <input
                    type="checkbox"
                    checked
                    name="input"
                    id={widget.widgetId}
                  />
                  <label
                    htmlFor={widget.widgetId}
                    className="text-[#054b72] font-medium"
                  >
                    {widget.widgetName}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 flex gap-2 items-center justify-end bg-white">
          <button className="border-2 border-[#13147c] px-4 py-2 rounded-lg bg-[#13147c] text-white font-medium text-sm">
            Confirm
          </button>
          <button className="border-2 border-[#13147c] px-4 py-2 rounded-lg bg-white text-[#13147c] font-medium text-sm">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default WidgetSidebar;

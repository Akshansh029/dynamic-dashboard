import React, { useState } from "react";
import { initialDashboardData } from "@/dashboardData";

const WidgetSidebar = ({ closeSidebar }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={closeSidebar}
      ></div>
      <div className="h-full w-2/5 bg-white z-50 absolute top-0 right-0">
        <div className="header h-fit bg-[#13147c] p-2">
          <h1 className="font-semibold text-white text-base ">Add widget</h1>
        </div>
        <div className="content h-full p-4">
          <p className="text-sm text-black font-medium">
            Personalize your dashboard by adding the following widget
          </p>
          <div className="container w-fit flex">
            {initialDashboardData.categories.map((category, index) => (
              <button
                key={index}
                className="relative text-sm font-semibold text-slate-400 w-[80px] py-4 hover:text-[#054b72]"
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
        </div>
      </div>
    </>
  );
};

export default WidgetSidebar;

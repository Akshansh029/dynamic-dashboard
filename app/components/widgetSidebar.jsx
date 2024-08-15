import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { FiGrid } from "react-icons/fi";
import { CiTextAlignLeft } from "react-icons/ci";

const WidgetSidebar = ({ dashboardData, setDashboardData, closeSidebar }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [checkboxStates, setCheckboxStates] = useState({});

  useEffect(() => {
    const initialCheckboxStates = {};
    dashboardData.categories[selectedCategoryIndex].widgets.forEach(
      (widget) => {
        initialCheckboxStates[widget.widgetId] = true;
      }
    );
    setCheckboxStates(initialCheckboxStates);
  }, [selectedCategoryIndex, dashboardData]);

  const handleCheckboxChange = (widgetId) => {
    setCheckboxStates((prev) => ({
      ...prev,
      [widgetId]: !prev[widgetId],
    }));
  };

  const handleAddWidget = () => {
    if (widgetName.trim() || widgetText.trim()) {
      const updatedDashboardData = { ...dashboardData };
      const category = updatedDashboardData.categories[selectedCategoryIndex];
      if (category) {
        const newWidgetId = category.widgets.length
          ? category.widgets[category.widgets.length - 1].widgetId + 1
          : 1;
        category.widgets.push({
          widgetId: newWidgetId,
          widgetName,
          widgetText,
        });
        setDashboardData(updatedDashboardData);
        toast.success("Widget added successfully!");
        // Reset input fields
        setWidgetName("");
        setWidgetText("");
      } else {
        toast.error("Category not found");
      }
    } else {
      toast.error("Please provide both a widget name and text");
    }
  };

  const handleConfirmChanges = () => {
    const updatedCategories = dashboardData.categories.map(
      (category, index) => {
        if (index === selectedCategoryIndex) {
          return {
            ...category,
            widgets: category.widgets.filter(
              (widget) => checkboxStates[widget.widgetId]
            ),
          };
        }
        return category;
      }
    );
    setDashboardData({ categories: updatedCategories });
    closeSidebar();
  };

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
          <div className="content p-4 flex flex-col overflow-y-auto h-[calc(100vh-160px)]">
            <p className="text-sm text-black font-medium">
              Personalize your dashboard by adding or removing widgets
            </p>
            <div className="input-container flex flex-col gap-2">
              <div className="flex items-center gap-2 mt-4">
                <FiGrid className="text-[#054b72] text-xl" />
                <input
                  type="text"
                  name="widgetName"
                  id="widgetName"
                  value={widgetName}
                  onChange={(e) => setWidgetName(e.target.value)}
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
                  value={widgetText}
                  onChange={(e) => setWidgetText(e.target.value)}
                  className="w-full px-3 py-2 border max-h-8 border-gray-300 text-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#054b72] placeholder:text-sm"
                  placeholder="Widget text"
                />
              </div>
              <button
                className="mt-4 py-2 px-4 bg-[#13147c] text-white rounded-lg font-medium text-sm hover:bg-[#0f356a]"
                onClick={handleAddWidget}
              >
                Add Widget
              </button>
            </div>
            <div className="container w-fit flex mt-6">
              {dashboardData.categories.map((category, index) => (
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
              {dashboardData.categories[selectedCategoryIndex]?.widgets.map(
                (widget, index) => (
                  <div
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md flex gap-2"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      checked={checkboxStates[widget.widgetId]}
                      onChange={() => handleCheckboxChange(widget.widgetId)}
                    />
                    <label
                      htmlFor={widget.widgetId}
                      className="text-[#054b72] font-medium"
                    >
                      {widget.widgetName}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="p-4 flex gap-2 items-center justify-end bg-white">
          <button
            className="border-2 border-[#13147c] px-4 py-2 rounded-lg bg-[#13147c] text-white font-medium text-sm"
            onClick={handleConfirmChanges}
          >
            Confirm
          </button>
          <button
            className="border-2 border-[#13147c] px-4 py-2 rounded-lg bg-white text-[#13147c] font-medium text-sm"
            onClick={closeSidebar}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default WidgetSidebar;

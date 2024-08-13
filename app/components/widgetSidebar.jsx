import React from "react";

const WidgetSidebar = ({ closeSidebar }) => {
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
        </div>
      </div>
    </>
  );
};

export default WidgetSidebar;

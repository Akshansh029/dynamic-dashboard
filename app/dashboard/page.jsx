import React from "react";
import AddWidgetButton from "../components/addWidgetButton";

const Page = () => {
  return (
    <div className="h-full bg-[#f0f5f9] py-10 px-8">
      <div className="">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#054b72]">
            CNAPP Dashboard
          </h1>
          <AddWidgetButton />
        </div>
        <div className="category-container px-2 py-2"></div>
      </div>
    </div>
  );
};

export default Page;

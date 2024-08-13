import React from "react";
import { FaPlus } from "react-icons/fa6";

const AddWidgetButton = () => {
  return (
    <button className="rounded-md bg-[#fafbfa] border-2 border-gray-400 px-3 py-2 flex items-center gap-2 transition-all active:translate-y-1">
      <FaPlus className="text-slate-500 " size={16} />
      <p className="text-slate-500 text-sm">Add widget</p>
    </button>
  );
};

export default AddWidgetButton;

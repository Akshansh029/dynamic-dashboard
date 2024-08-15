import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

const Widget = ({ categoryId, widgetId, widgetName, widgetText, onRemove }) => {
  return (
    <div className="relative min-w-[350px] min-h-[200px] bg-white rounded-xl flex flex-col p-4 flex-shrink-0">
      <button
        className="absolute top-3 right-3"
        onClick={() => onRemove(categoryId, widgetId)}
      >
        <IoIosClose className="text-slate-600 " size={24} />
      </button>
      <h2 className="text-base font-semibold text-slate-800">{widgetName}</h2>
      <div className="flex flex-col h-full">
        <p className="text-black text-sm mt-2">{widgetText}</p>
        <div className="mt-[2rem] flex flex-col items-center justify-center gap-2">
          <BsGraphUp size={30} className="text-slate-500" />
          <p className="text-sm text-slate-500">No graph data is available</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;

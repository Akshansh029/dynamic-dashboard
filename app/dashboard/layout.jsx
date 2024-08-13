import Navbar from "../components/navbar";
import React, { ReactNode } from "react";

const layout = ({ children }) => {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Navbar />
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
};

export default layout;

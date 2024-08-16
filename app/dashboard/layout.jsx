"use client";
import React from "react";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Navbar />
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
};

export default Layout;

"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(searchQuery);
  };

  return (
    <div className="relative flex flex-col h-screen w-full">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <div className="flex-1 w-full">
        {React.cloneElement(children, { searchQuery })}
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import NavBar from "../../component/Navbar";
import Sidebar from "../../ComponentCreator_Dashboard/Sidebar";

export default function Creator({ children }) {
  return (
    <div className="bg-gray-100 lg:h-full">
      <NavBar />
      <div className="flex lg:flex-row  xs:flex-col lg:w-full lg:h-5/6  ">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

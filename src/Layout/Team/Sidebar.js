import React from "react";
import { BiLogOut } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="flex flex-col w-full md:w-64 m-4 sticky text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 rounded-md shadow dark-mode:bg-gray-800 flex-shrink-0">
      <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">

        <Link
          className="block px-4 py-2 mt-2 text-sm font-semibold "
          to="/admin/profile"
        >
          <MdGroups className="mr-2 mb-1.5 inline w-5 h-2 w-8 h-6" />
          Javascript
        </Link>
        
      </nav>

      <button
        className="bg-red text-white font-bold py-2 px-1 text-lg m-2 rounded-md"
      
      >
        <BiLogOut className="mr-2 mb-1.5 inline w-8 h-6" />
        Leave Team
      </button>
    </div>
  );
}

export default Sidebar;

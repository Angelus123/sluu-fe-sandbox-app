import { Link } from "react-router-dom";
import { FiVideo } from "react-icons/fi";
import { MdGroups } from "react-icons/md";
;


function Navbar(props) {
  

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 z-100">
        <div className=" flex flex-wrap justify-between items-center ">
          <Link to="/" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-white focus:text-white hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:shadow-outline">
            home
          </Link>
          <Link
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-white focus:text-white hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:shadow-outline"
          to="/Admin/communities"
        >
          <MdGroups className="mr-2 mb-1.5 inline w-8 h-6" />
         Teams
        </Link>
  
        <Link
          className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-white focus:text-white hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:shadow-outline"
          to="/Admin/streams"
        >
          <FiVideo className="mr-2 mb-1.5 inline w-8 h-6" />
          Streams
        </Link>
        </div>
        </nav>
        </div>
  
  );
}

export default Navbar;

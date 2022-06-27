import React from 'react';
import NavBar from '../../Components/Navbar';
import Sidebar from '../../Components/Brand_Dashboard/Sidebar';


export default function Dashboard({ children}) {
  return (
    <div>
      <NavBar />
      <div className="md:flex flex-col md:flex-row  w-full bg-gray-100" style={{height:'93vh'}}>
        <Sidebar />
            { children }
      </div>
    </div>
  );
}

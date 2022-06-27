import React from 'react';
import NavBar from '../../component/Navbar';
import Sidebar from '../../component/Admin/Sidebar';

export default function AdminDashboard({ children }) {
  return (
    <div>
      <NavBar />
      <div
        className="md:flex flex-col md:flex-row text-red  w-full bg-gray-100"
        style={{ height: '93vh' }}
      >
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

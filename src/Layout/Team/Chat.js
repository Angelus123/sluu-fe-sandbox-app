import React from 'react';
import NavBar from './Navbar';
import Sidebar from './Sidebar';

export default function AdminDashboard({ children }) {
  return (
    <div>
      <NavBar />
      <div
        className="md:flex flex-col md:flex-row pl-3px w-full bg-gray-100"
        style={{ height: '80vh' }}
      >
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

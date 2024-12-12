import React from 'react';
import Sidebar from '../components/Sidebar';


const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64 p-4">{children}</div>
    </div>
  );
};

export default Layout;
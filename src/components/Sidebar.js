import React from 'react';
import logo from '../images/Group.png'
import dashIcon from '../images/Icon wrapper.png'
import courseIcon from '../images/Icon wrapper (1).png'
import calendarIcon from '../images/Icon wrapper (2).png'
import classIcon from '../images/signal-01.png'
import examIcon from '../images/Icon wrapper (3).png'

const Sidebar = () => {
  return (
    <div>
      
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src={logo} alt="" />
               <span className="ms-3 font-bold">APAR'S</span>
               <br />
               <br />
            </a>
         </li>
         <p className='text-gray-500'>General</p>
         <li>
            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src={dashIcon} alt="" />
               <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src={courseIcon} alt="" />
               <span className="flex-1 ms-3 whitespace-nowrap">Courses</span>
               {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
            </a>
         </li>
         <li>
            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src={calendarIcon} alt="" />
               <span className="flex-1 ms-3 whitespace-nowrap">Calendar</span>
            </a>
         </li>
         <br />
         <p className='text-gray-500'>
Materials
         </p>
         <li>
            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src={classIcon} alt="" />
               <span className="flex-1 ms-3 whitespace-nowrap">Classes</span>
            </a>
         </li>
         <li>
            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src={examIcon} alt="" />
               <span className="flex-1 ms-3 whitespace-nowrap">Exams</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

    </div>
  );
};

export default Sidebar;
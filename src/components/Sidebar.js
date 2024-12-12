import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Group.png'
import dashIcon from '../images/Icon wrapper.png'
import courseIcon from '../images/Icon wrapper (1).png'
import calendarIcon from '../images/Icon wrapper (2).png'
import classIcon from '../images/signal-01.png'
import examIcon from '../images/Icon wrapper (3).png'

const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="flex h-screen">
         {/* Hamburger Menu for Mobile */}
         <button
            className="fixed top-4 left-8 text-white bg-gray-500 p-2 rounded md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="w-6 h-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
               />
            </svg>
         </button>

         {/* Sidebar */}
         <div
            className={`fixed top-0 left-0 h-full bg-gray-200 transition-all duration-300 z-40 
           ${isOpen ? "w-64" : "w-0 overflow-hidden"} md:w-64`}
         >
            {/* Sidebar Content */}
            <div className="mt-16 md:mt-0 px-4 py-6">
               <ul className="space-y-2 font-medium">
                  <li>
                     <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-slate-400 group">
                        <img src={logo} alt="" />
                        <span className="ms-3 font-bold"> &nbsp; APAR'S</span>
                        <br />
                        <br />
                     </a>
                  </li>
                  <p className='text-gray-500'>General</p>
                  <li>
                     <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-slate-400 group">
                        <img src={dashIcon} alt="" />
                        <span className="flex-1 ml-2 whitespace-nowrap">Dashboard</span>
                     </a>
                  </li>
                  <li>
                     <a href="/courses" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-slate-400 group">
                        <img src={courseIcon} alt="" />
                        <span className="flex-1 ml-2 whitespace-nowrap">Courses</span>
                        {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                     </a>
                  </li>
                  <li>
                     <a href="/calendar" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-slate-400 group">
                        <img src={calendarIcon} alt="" />
                        <span className="flex-1 ml-2 whitespace-nowrap">Calendar</span>
                     </a>
                  </li>
                  <br />
                  <p className='text-gray-500'>
                     Materials
                  </p>
                  <li>
                     <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-slate-400 group">
                        <img src={classIcon} alt="" />
                        <span className="flex-1 ml-2 whitespace-nowrap">Classes</span>
                     </a>
                  </li>
                  <li>
                     <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-slate-400 group">
                        <img src={examIcon} alt="" />
                        <span className="flex-1 ml-2 whitespace-nowrap">Exams</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
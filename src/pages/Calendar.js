import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const Calendar = () => {
  return (
    <div className='px-4 md:px-12'>
      <br /><br />
      <div className='flex justify-between'>
          <span className=''>My dashboard</span>
          <div className='flex'>
            <button className='flex border-gray-300 border-2 px-4 py-1 rounded-xl text-sm mr-2 md:mr-4'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z" stroke="#4E4E4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className='hidden lg:block ml-0 md:ml-1'> Notifications </span>
            </button>
            <button className='flex border-gray-300 border-2 px-4 py-1 rounded-xl text-sm'> <span className='hidden lg:block mr-0 md:mr-1'> Visit Store </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 7.5L17.5 2.5M17.5 2.5H12.5M17.5 2.5L10.8333 9.16667M8.33333 4.16667H6.5C5.09987 4.16667 4.3998 4.16667 3.86502 4.43915C3.39462 4.67883 3.01217 5.06129 2.77248 5.53169C2.5 6.06647 2.5 6.76654 2.5 8.16667V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H11.8333C13.2335 17.5 13.9335 17.5 14.4683 17.2275C14.9387 16.9878 15.3212 16.6054 15.5608 16.135C15.8333 15.6002 15.8333 14.9001 15.8333 13.5V11.6667" stroke="#4E4E4E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <br />
        <br />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
};

export default Calendar;
import React from 'react';
import Sidebar from '../components/Sidebar';
import Schedule from '../components/Schedule';
import Stats from '../components/Stats';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
     <Sidebar></Sidebar>
     <div className='col-span-2'>
      <br />
      <div className='hidden md:block'>
      <br />
      <br />
      </div>
     
      <p className=''>My dashboard</p>
      <Schedule></Schedule>
     </div>
     <div className='col-span-1'>
      <Stats></Stats>
     </div>
    </div>
  );
};

export default Dashboard;
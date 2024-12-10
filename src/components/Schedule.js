import React from 'react';
// import { Calendar } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import blogPic from '../images/Image.png'
import blogPic2 from '../images/Image (1).png'


const Schedule = () => {
  return (
    <div>
      <FullCalendar
      plugins={[ timeGridPlugin ]}
      initialView="timeGrid"
    />
    <br />
    <br />
    <div>
      <p className='font-medium'>Recent Classes</p>
      <br />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
            <img src={blogPic} alt="" className='rounded-lg'/>
            <br />
            <p className='text-purple-600 text-sm mb-2'>Numeri Sattar Apar</p>
            <p>Math - Integration</p>
            <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla illo, dolores natus alias eligendi nisi eaque illum laborum consequatur!</p>
        </div>
        <div>
            <img src={blogPic2} alt="" className='rounded-lg' />
            <br />
            <p className='text-purple-600 text-sm mb-2'>Numeri Sattar Apar</p>
            
            <p>Physics - Thermodynamics</p>
            <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti porro eveniet molestiae eaque tenetur dolorem non?</p>
        </div>
      </div>
    </div>
    <br />
    <br />
    
    </div>
  );
};

export default Schedule;
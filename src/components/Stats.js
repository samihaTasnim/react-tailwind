import React from 'react';
import avatar from '../images/Avatar (3).png'

const Stats = () => {
  return (
    <div >
       <br />
      <div className='hidden md:block'>
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
      <p className='text-gray-500 text-sm'>Attendence rate</p>
      <p className='text-lg md:text-4xl font-semibold'>99%</p>
      <br />
      <p className='text-gray-500 text-sm'>Total Class</p>
      <p className='text-lg md:text-4xl font-semibold'>24</p>
      <br />
      <p className='text-gray-500 text-sm'>Class Attended</p>
      <p className='text-lg md:text-4xl font-semibold'>79%</p>
      <br />
      <p className='text-gray-500 text-sm'>Total exam</p>
      <p className='text-lg md:text-4xl font-semibold'>19</p>
      <br />
      <p className='text-gray-500 text-sm'>Exam attended</p>
      <p className='text-lg md:text-4xl font-semibold'>67%</p>
      <br /><br />
<p className='text-gray-500'>
  Leaderboard
</p>
<br />
    <div className='flex gap-4'>
      <img src={avatar} alt="" className='m-2'/>
      <div>
      <p>
        John von doe
      </p>
      <p>ACS Varsity Batch 2024</p>
      </div>
    </div>
    <br />
    <div className='flex gap-4'>
      <img src={avatar} alt="" className='m-2'/>
      <div>
      <p>
        John von doe
      </p>
      <p>ACS Varsity Batch 2024</p>
      </div>
    </div>
    <br />
    <div className='flex gap-4'>
      <img src={avatar} alt="" className='m-2'/>
      <div>
      <p>
        John von doe
      </p>
      <p>ACS Varsity Batch 2024</p>
      </div>
    </div>
    <br />
    <div className='flex gap-4'>
      <img src={avatar} alt="" className='m-2'/>
      <div>
      <p>
        John von doe
      </p>
      <p>ACS Varsity Batch 2024</p>
      </div>
    </div>

    </div>
  );
};

export default Stats;
import './App.css';
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


function Popout() {
  <div className='Popout'>
    <h2 className='text-center'>Select A Time To Schedule </h2>
    <div className='Poput-container'>
      
    </div>
  </div>


}



function Cal() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='Cal'>
      <h1 className='text-center'>Scheduler</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default Cal;

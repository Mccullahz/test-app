import './App.css';
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import ClickAwayListener from 'react-click-away-listener';



const Popout = () => {
  const [popout, setPopout] = useState(false)
  return (
      popout && (
          <ClickAwayListener onClickAway={() => setPopout(false)}>
                  <div className={'popout'}>
                      <li>Items of the Popup</li>
                      <li>Items of the Popup</li>
                      <li>Items of the Popup</li>
                  </div>
          </ClickAwayListener>
      )
  );
}



function Cal() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='Cal'>
      <h1 className='text-center'>Scheduler</h1>
      <div className='calendar-container'>
        <Calendar onChange={Popout} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default Cal;

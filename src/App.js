import './App.css';
import React, { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [value, onChange] = useState(new Date())
  return (
    <div className="App">
      <header className="App-header">
        <h2>Scheduling</h2>
      
      <Calendar onChange={onChange} value={value}/>
      </header> 
    </div>
  );
}

export default App;

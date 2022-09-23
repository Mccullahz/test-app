import './App.css';
import React, { useState } from 'react'
import Calendar from 'react-calendar'

function App() {
  const [value, onChange] = useState(new Date())
  return (

    <div className="App">
      <h1>Scheduling</h1>

      <header className="App-header">
        <Calendar onChange={onChange} value={value}/> 
      </header> 
    </div>
  );
}

export default App;

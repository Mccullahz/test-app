import './App.css';
import './App.js'
import React, { useState } from 'react'



function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
       <h2>Dashboard</h2>

       <form action="/App.js" method="POST">
            <button type="submit">Log In</button>
        
       </form>
      </header> 
    </div>
  );
}

export default Login;
import React from 'react'
import './App.css'
//import './public/Assets/images.png'

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="login-image">
        <img src="/Assets/logo.svg" width="350"/>
        </div>
        <div className="login">
          <h1>Login</h1>
          <input type="text" className="input" placeholder="Your Username"></input><br />
          <input type="password" className="input" placeholder="Your Password"></input><br />
          <button type="submit">Login</button>
          <p>Lupa Password?</p>
          <p>Belum punya akun? Daftar</p>
        </div>
      </div>
    </div>
  );
}

export default App;

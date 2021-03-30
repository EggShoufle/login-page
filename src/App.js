import React from 'react'
import './App.css'
//import './public/Assets/images.png'

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="login-image">
          <img src="/Assets/logo.svg" alt="this is" width="350"/>
        </div>
        <form>
          <div className="login">
            <h1>Login</h1>
            <div className="txt_field">
              <input type="text" className="username" required></input>
              <span></span>
              <label>Username</label>
            </div>
            <br />
            <div className="txt_field">
              <input type="password" className="psw" required></input>
              <span></span>
              <label>Password</label>
            </div>
            <div className="forgetPass">Lupa Password?</div>
            <button type="submit">Login</button>
            <div className="signup_link">Belum punya akun? Daftar</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

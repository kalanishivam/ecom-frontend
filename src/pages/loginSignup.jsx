import React from 'react'
import './CSS/LoginSignup.css'

const loginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='login-container'>
        <h1>Sign Up</h1>
        <div className='login-container-inputs'>
          <input type = 'text' placeholder='Your name' />
          <input type='email' placeholder='Enter your email' />
          <input type='password' placeholder='Enter new password' />

        <button>SIGN UP</button>
        </div>
        <p className='already'> Alredy have an account? <span>Login here</span></p>
        <div className='licesnce'>
          <input type = 'checkbox' name ='' id ='' />
          <p>By continuing you agree to our terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default loginSignup;
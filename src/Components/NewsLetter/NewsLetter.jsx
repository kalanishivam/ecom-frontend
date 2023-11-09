import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get exclusive offers on your email</h1>
      <p>Subscribe to the Newsletter</p>
      <div>
        <input text = 'email' placeholder='Enter your email id' />
        <button>Subscribe</button>
      </div>

    </div>
  )
}

export default NewsLetter
import React from 'react'
import './hero.css'
import hand_icon from '../Assets/icons/hand-icon.png'
import arrow_img from '../Assets/right-arrow.png'
import hero_img from '../Assets/model.png'

const hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
    <h2>NEW ARRIVALS ONLY</h2>
    <div>
        <div className='hand-icon'>
            <p>New</p>
            <img src = {hand_icon} height = '100px' width='100px' alt ='hand-icon' />
        </div>
        <p>Collections</p>
        <p>for everyone</p>
    </div>
    <div className='hero-latest'>
      <div>Latest Collections</div>
      <img src = {arrow_img} alt = 'arrow-icon'  height='50px' width='50px'/>
    </div>
    <div>
        
    </div>
        </div>

        <div className='hero-right'>
          <img src={hero_img} alt = 'hero image' />


        </div>
        
    </div>
  )
}

export default hero;
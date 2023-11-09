import React from 'react'
// import './Offers.css'
import './Offers.css'
import model_1 from '../Assets/model_1.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
        
            <button>Check Now</button>
        

        </div>

        <div className='offers-right'>
        <img src = {model_1}  height = '400px' width = '560px' alt = "model photo"/>

        </div>
        
    </div>
  )
}

export default Offers
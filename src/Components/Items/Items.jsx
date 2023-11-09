import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='Item'>
        <img src = {props.img} alt = 'product_image' />
        <p>{props.name}</p>
        <div className='Item-price'>
            <p>₹{props.price}</p>
        </div>

    </div>
  )
}

export default Items
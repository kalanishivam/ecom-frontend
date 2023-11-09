import React from 'react'
import './Footer.css'
import shopCart from '../Assets/favicon.ico'
import pinterest_icon from '../Assets/social_icons/pinterest.svg'
import twitter_icon from '../Assets/social_icons/twitter.svg'
import fb_icon from '../Assets/social_icons/facebook.svg'
import inst_icon from '../Assets/social_icons/instagram.svg'

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-logo'>
        <img src= {shopCart} alt = "footer logo" height='75px' width='75px' />
        <p>SHOPPER</p>
    </div>
    <ul className='footer-links'>
        <li>COMPANY</li>
        <li>PRODUCTS</li>
        <li>ABOUT</li>
        <li>OFFICES</li>
        <li>CONTACT</li>
    </ul>
    <div className='footer-social-icons'>
        <div className='footer-icons-container'>
        <img src = {inst_icon} alt = "Instagram icon" height='29px' width='29px'/>
        </div>
        <div className='footer-icons-container'>
        <img src = {twitter_icon} alt = "twitter icon" height='29px' width='29px' />
        </div>
        <div className='footer-icons-container'>
        <img src = {pinterest_icon} alt = "pinterest icon" height='29px' width='29px' />
        </div>
        <div className='footer-icons-container'>
        <img src = {fb_icon} alt = "facebook icon" height='29px' width='29px' />
        </div>
    </div>
    <div className='copyright'>
        <hr />
        <p>Copyright @{year} - All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer
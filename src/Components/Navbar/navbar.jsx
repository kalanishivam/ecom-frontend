import React, { useState } from 'react';
import './Navbar.css'
import shopCart from '../Assets/favicon.ico'
import Cart from '../Assets/shopping-cart.png'
import { BrowserRouter, Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src = {shopCart} alt = "shopcart image"/>
            <p>SHOPPER</p>
        </div>

        {/* <BrowserRouter> */}
            <ul className='nav-menu'>
                {/* onMouseOver={()=>setMenu("shop")} onMouseOut={()=>setMenu(menu)}   you could have added theseproperties as well*/}
                <li onClick={()=>setMenu("shop")}><Link  to = '/' style = {{textDecoration : 'none'}} >SHOP</Link> {menu === "shop" && <hr/>}</li>
                <li onClick={()=>setMenu("men")}><Link to = '/men' style = {{textDecoration : 'none'}}>MEN</Link> {menu === "men" && <hr/>}</li>
                <li onClick={()=>setMenu("women")}><Link style = {{textDecoration : 'none'}} to = '/women'>WOMEN</Link> {menu === "women" && <hr/>}</li>
                <li onClick={()=>setMenu("kids")}><Link to = '/kids' style = {{textDecoration : 'none'}}>KIDS</Link>{menu === "kids" && <hr/>}</li>
            </ul>
         
            <div className='nav-login-cart'>
                <Link to = '/login'><button>LOGIN</button></Link>
                <Link to = '/cart'><img src = {Cart} alt = "Cart image"/></Link>
                <div className='cart-counter'>0</div>
            </div>
            {/* </BrowserRouter>  */}
    </div>
  );
}

export default Navbar;
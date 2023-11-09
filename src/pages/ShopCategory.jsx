import React , {useState} from 'react'
// import Hero from '../Components/hero/hero'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
// import all_products from '../Components/Assets/all_products';
import Items from '../Components/Items/Items';
import all_products from '../Components/Assets/all_products';
// import all_products from '../Components/Assets/all_products';

function createItem(comp){
  return(
      <Items 
      id = {comp.id}
      name = {comp.name}
      img = {comp.image}
      price = {comp.price}
      />

  )
}

const Shopcategory = (props) => {
  const all_product = useState(ShopContext);
  return (
    <div className='shopcategory'>
      <img className='shop-banner' src = {props.banner}  alt = "banner image" />
    <div className='indexsort'>
      <p>
        <span>Showing 1-12</span> out of 30 products
      </p>  
      <div>
        Sort by 
      </div>
    </div>
    <div className='all-prod'>
    {all_products.map((comps, i) =>{
    if (props.category === comps.category){
      return <Items  id = {comps.id}
      name = {comps.name}
      img = {comps.img}
      price = {comps.new_price} />
    }else{
      return null;
    }
  })}
      
    </div>
    <div className='load-more'>
      Explore More
    </div>
    </div>
  )
}

export default Shopcategory
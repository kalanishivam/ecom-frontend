import React from 'react'
import Data_product from '../Assets/data'
import Items from '../Items/Items';
import './Popular.css'


const Popular = () => {
    function createComp(comps){
        return (
            <Items
            id = {comps.id}
            img = {comps.img}
            name = {comps.name}
            price = {comps.price}
            />
        );
    }
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-in-women'>
         {Data_product.map(createComp)}
        </div>
        
    </div>
  )
}

export default Popular;
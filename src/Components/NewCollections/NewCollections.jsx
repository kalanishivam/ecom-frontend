import React from 'react'
import './NewCollections.css'
import Items from '../Items/Items'
import newColl_data from '../Assets/newcoll'

function createCol(comp){
    return(
        <Items 
        id = {comp.id}
        name = {comp.name}
        img = {comp.image}
        price = {comp.price}
        />

    )
}

const NewCollections = () => {
  return (
    <div className='New_Collections'>
        <h1>NEW COLLECITONS</h1>
        <hr />

        <div className='new-coll-img'>
            {newColl_data.map(createCol)}
        </div>

    </div>
  )
}

export default NewCollections
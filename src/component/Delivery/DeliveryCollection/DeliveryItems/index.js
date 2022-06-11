import React from 'react'
import './DeliveryItem.css'
const DeliverItems = ({item}) => {
  return (
    <div>
        <div className='delivery-item-cover'>
            <img src={item.cover} className='delivery-item-image' alt={item.tite} />
        </div>
        <div className='delivery-item-title'>
            {item.title}
        </div>
    </div>
  )
}

export default DeliverItems
import React from 'react'
import { restaurants } from '../../../../data/restourents';
import './exploreCard.css'

const ExploreCard = ({retourents}) => {
    const name =retourents?.info?.name??"";
    const coverimg=retourents?.info?.image?.url;
    const deliverTime=retourents?.order?.deliveryTime;
    const rating=retourents?.info?.rating?.rating_text;
    const aproxPrice=retourents?.info?.cfo?.text;
    const offers=retourents?.bulkOffers??[];
    const cuisines = retourents?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
    const goldof=restaurants?.gold?.text;
    const proff=offers.length>1?offers[0].text:null;
    const discount=offers.length>1?offers[1].text:offers.length===1?offers[0].text:null
  return (
   <div className='explore-card cur-po'>
       <div className='explore-card-cover'>
        <img src={coverimg} alt={name} className='explore-card-img' /> 
        <div className='delivery-time'>{deliverTime}</div>
        {proff && <div className='pro-off'>{proff}</div>}
        {goldof && <div className='gold-off abolute-center '>{goldof}</div>}
        {discount && <div className='discount abolute-center '>{discount}</div>}
       </div>
       <div className='res-row'>
           <div className='res-name'>{name}</div>
           {rating!=='NEW' && <div className='res-ratting abolute-center'>
                {rating}<i className="fi fi-rr-star abolute-center"></i>
               </div>}
            {rating==='NEW' && <div className='res-ratting abolute-center'>
                {rating}
               </div>}
       </div>
       <div className='res-row'>
        {cuisines.length && <div className='res-cuisines'>
            {cuisines.map((item, i)=>{
                return <span key={i} className='res-cuisines-tag'>
                    {item}{i!==cuisines.length-1 && ","}   
                </span>
            })}
            </div>}
            {aproxPrice &&  <div className='approx-price'>{aproxPrice}</div>}
       </div>
       
   </div>
  )
}

export default ExploreCard

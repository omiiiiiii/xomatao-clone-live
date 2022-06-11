import React from 'react'
import { restaurants } from '../../data/restourents';
import ExploreSection from '../common/exploreSection';
import Fielter from '../common/filter'
import './Delivery.css'
import DeliveryCollection from './DeliveryCollection';
import TopBrands from './TopBrands';

const deliveryFielter=  [{
  id: 1,
  icon: <i className="fi fi-rr-settings-sliders abolute-center" ></i>,
  title: "Filters",
},
{
  id: 2,
  title: "Delivery Time",
  icon: <i className="fi fi-rr-sort-alt  abolute-center"></i>,
},
{
  id: 3,
  title: "Pure Veg",
},
{
  id: 4,
  title: "Rating: 4.0+",
},
{
  id: 5,
  title: "Great Offers",
},
{
  id: 6,
  title: "Cuisines",
},
];
const restourentsList=restaurants

const Delivery = () => {
  return (
    <div>
      {alert("This clone is only for Education purpose ,sorry Zomato as we are used your backend api data ")}
      <div className='max-width'>
        <Fielter fielterlist={deliveryFielter}/>
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection list={restourentsList} collectioname='Delivery Restaurants in Pune' />
      
    </div>
  )
}

export default Delivery
import React, { useState } from 'react'
import Header from '../../component/common/header'
import Taboption from '../../component/common/tabOption'
import Footer from '../../component/common/footer'
import Delivery from '../../component/Delivery'
import DiningOut from '../../component/DiningOut'
import Nightlife from '../../component/Nighlife'
const Home = () => {
const [activeTab,setactiveTab]=useState("Delivery");
  return (
    <div><Header />
    <Taboption activeTab={activeTab} setactiveTab={setactiveTab} />
    {getcorrectcreen(activeTab)}
    <Footer />

    </div>
  )
}
const getcorrectcreen=(tab)=>{
    switch(tab){
        case "Delivery":
            return <Delivery />
        case "Dining Out":
            return <DiningOut />
        case "NightLife":
            return <Nightlife />
        default :
            return <Delivery />
    }

}

export default Home
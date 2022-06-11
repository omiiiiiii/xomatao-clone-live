import React from 'react'
import './TopBrands.css'
import PrevsArrow from "../../common/carousel/prevArrow";
import NextsArrow from "../../common/carousel/nextArrow";
import Slider from "react-slick"

const BrandList=[
    {
        id:1,
        time:"23minute",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
        name:'La Pinoz Pizza'
    },
    {
        id:2,
        time:"29minute",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png",
        name:"McDonald's"
    },
    {
        id:3,
        time:"34minute",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
        name:"Pizza Hut"
       
    },
    {
        id:4,
        time:"30minute",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png",
        name:"Domino's Pizza"
       
    },
    {
        id:5,
        time:"25minute",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png",
        name:'The Hazelnut Factory'
    },
    {
        id:6,
        time:"44minute",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bf3a000fa1554839d5e1a415bf85d083_1598856266.png",
        name:"The Manish Eating Point"
    },
    {
        id:7,
        time:"34minute",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png",
        name:"Royal Cafe - Royal Inn"
    },
    {
        id:8,
        time:"29minute",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png",
        name:"KFC"
    },
    {
        id:9,
        time:"30minute",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png",
        name:"Burger King"
    },
    {
        id:10,
        time:"29minute",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1c69c696c67a0791937fab960a9bdf0a_1611298398.png",
        name:"Grandson Of Tunday Kabab"
    }

]
const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextsArrow />,
    prevArrow: <PrevsArrow />,
  };
const TopBrands = () => {
  return (
    <div className='Top-Brands max-width'>
        <div className='collection-title'>
            Top brands for you
        </div>
            <Slider {...settings}>
    {BrandList.map((item)=>{
        return <div key={item.id}>
            <div className='top-brands-cover'>
                <img  className="top-brand-image" src={item.cover} alt={item.name}  />
            </div>
            <div className='top-brand-time'>
            {item.time}
            </div>
            <div className='top-brand-name'>
                {item.name}

            </div>
        </div>
    })}
            </Slider>
        </div>
  )
}

export default TopBrands
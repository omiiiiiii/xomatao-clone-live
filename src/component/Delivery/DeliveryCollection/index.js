import React from "react";
import "./DeliverCollection.css";
import PrevsArrow from "../../common/carousel/prevArrow";
import NextsArrow from "../../common/carousel/nextArrow";
import Slider from "react-slick"
import DeliverItems from "./DeliveryItems";

const deliveryItems=[
    {
        id:1,
        title:"Home Style",
        cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
    },
    {
        id:2,
        title:"Chicken",
        cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id:3,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:4,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:5,
        title:"Kebabs",
        cover:"https://b.zmtcdn.com/data/dish_photos/4c6/4f2cb1bfb215d0af454e65291aec74c6.jpg"
    },
    {
        id:6,
        title:"Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id:7,
        title:"Paratha",
        cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    },
    {
        id:8,
        title:"Thali",
        cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },
    {
        id:9,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:10,
        title:"Chaat",
        cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
    },
    {
        id:11,
        title:"Dal",
        cover:"https://b.zmtcdn.com/data/o2_assets/c5f679b7ce4d7cf0b08f120e77d22e2d1632716660.png"
    }, {
        id:12,
        title:"Ice Cream",
        cover:"https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png"
    },

]
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextsArrow />,
    prevArrow: <PrevsArrow />,
  };
  
  const DeliveryColletions = () => {
    return (
      <div className="delivery-collections">
        <div className="max-width">
          <div className="collection-title">Eat what makes you happy</div>
          <Slider {...settings}>
            {deliveryItems.map((item) => {
              return <DeliverItems item={item} key={item.id} />
            })}
          </Slider>
        </div>
      </div>
    );
  };
  
  export default DeliveryColletions;
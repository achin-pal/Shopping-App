import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import {mainCrouselData} from './MainCaurousalData';

const Main_carousel = () => {

    const mainCrouselData = [
  {
    image: "https://www.ethnicplus.in/cdn/shop/files/1_mob_bcae5f58-7ff6-4459-bdc1-7a1137b1642e.jpg?v=1762104599&width=1370",
    path: "/women/clothing/lengha_choli"
  },
  {
    image: "https://www.ethnicplus.in/cdn/shop/files/1_mob_bcae5f58-7ff6-4459-bdc1-7a1137b1642e.jpg?v=1762104599&width=1370",
    path: "/women/clothing/lengha_choli"
  },
  {
    image: "https://www.ethnicplus.in/cdn/shop/files/1_mob_bcae5f58-7ff6-4459-bdc1-7a1137b1642e.jpg?v=1762104599&width=1370",
    path: "/women/clothing/lengha_choli"
  },
  {
   image: "https://www.ethnicplus.in/cdn/shop/files/1_mob_bcae5f58-7ff6-4459-bdc1-7a1137b1642e.jpg?v=1762104599&width=1370",
    path: "/women/clothing/lengha_choli"
  }
];


    const items = mainCrouselData.map((item)=><img  className='cursor-pointer' 
    role= 'presentation' src={item.image}/>)
  return (
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default Main_carousel

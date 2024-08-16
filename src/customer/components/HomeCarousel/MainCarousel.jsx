import React from 'react'
import { mainCarouselData } from './MainCarouselData'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const MainCarousel = () => {

const items = mainCarouselData.map((item)=> <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt="" />)

return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={4000}
        infinite
    />
  )
}

export default MainCarousel
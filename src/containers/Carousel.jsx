import React from 'react'

import { register } from 'swiper/element/bundle';

register();

const Carousel = (props) => {
  return (
<swiper-container loop="true" navigation="true" css-mode="false" pagination="true" autoplay='true' effect="fade">
  <swiper-slide><img src={props.imageOne} alt="Slide-1" className='w-full h-[600px]' /></swiper-slide>
  <swiper-slide><img src={props.imageTwo} alt="Slide-2" className='w-full h-[600px]' /></swiper-slide>
  <swiper-slide><img src={props.imageThree} alt="Slide-3" className='w-full h-[600px]' /></swiper-slide>
  <swiper-slide><img src={props.imageFour} alt="Slide-4" className='w-full h-[600px]' /></swiper-slide>
  <swiper-slide><img src={props.imageFive} alt="Slide-5" className='w-full h-[600px]' /></swiper-slide>
</swiper-container>
  );
};

export default Carousel
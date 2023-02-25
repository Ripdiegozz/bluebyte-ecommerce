import React from 'react'

import { register } from 'swiper/element/bundle';
register();

// carousel images:

import imageOne from "../assets/img/carousell/1.png";
import imageTwo from "../assets/img/carousell/2.png";
import imageThree from "../assets/img/carousell/3.png";
import imageFour from "../assets/img/carousell/4.png";

const carouselImages = [imageOne, imageTwo, imageThree, imageFour];

//

const Carousel = () => {

  return (
<swiper-container loop="true" navigation="true" css-mode="false" pagination="true" autoplay='true' effect="fade">

  {

    carouselImages.map( (img) => {
      return (
        <swiper-slide key={carouselImages.indexOf(img)}><img src={img} alt="slide" className='w-full h-[500px]' /></swiper-slide>
      )
    })

  }

</swiper-container>
  );
};

export default Carousel
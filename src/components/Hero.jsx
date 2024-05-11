"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../public/try-4-1.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image";
import sliderImg1 from "../../public/bannerimage.png"
import sliderImg2 from "../../public/sliderImg.png"
import animationImg from "../../public/t0.gif"
// import required modules
import { Autoplay} from 'swiper/modules';
import image2 from "../../public/cahsiue.png"
const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 '>
  <div className='relative z-20 bg-[#00378C]'>
  <Image className='absolute top-0 left-40 hidden lg:block' src={image2} alt={image2}></Image> 
  <div className='text-center mt-12 md:mt-36 lg:mt-60  mb-6'>
                <h2 className='text-[28px] md:text-[38px] lg:text-[48px] text-[#F6C15E] font-serifFont font-medium'>Adyar Ananda Bhavan</h2>
                <h4 className='text-[#F6C15E] text-[24px] font-serifFont'>House of exclusive Indian Sweets</h4>
                <p className='md:w-4/6	w-full mx-auto text-white font-serifFont font-medium'>Everything that we bring you is pure, delicious and authentic. At Adyar Ananda Bhavan, we prepare only using the finest ingredients, following time-tested methods. Experience a perfect blend of timeless tradition and innovation in every bite.</p>
            </div>
            <Image className='absolute bottom-[-100px] hidden lg:block' src={animationImg} alt={animationImg}></Image>  
  </div>
  
    <div className='relative'>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
       
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide>  <Image className='w-full h-[650px] object-center' src={sliderImg1} alt={sliderImg1}  />
        </SwiperSlide>
        <SwiperSlide>  <Image className='w-full h-[650px] object-center' src={sliderImg2} alt={sliderImg2}  /></SwiperSlide>
        <SwiperSlide>  <Image className='w-full h-[650px] object-center' src={sliderImg1} alt={sliderImg1}  /></SwiperSlide>
     
      </Swiper>
    </div>
    </div>
  )
}

export default Hero
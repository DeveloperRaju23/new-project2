import React from 'react'
import Image from "next/image";

import image1 from "../../public/t1.gif"
import image2 from "../../public/t0.gif"
const AboutUs = () => {
  return (
    <div className='hero_section relative'>
     <div className='text-center mx-auto py-12'>
     <Image className="hidden lg:block absolute top-[-100px]" src={image1} alt={image1}></Image>
     <h3 className='text-[26px] text-primaryClr font-serifFont font-medium '>About Us</h3>
        <h1 className='text-[28px ]md:text-[32px] lg:text-[46px] text-primaryClr font-serifFont font-semibold'>A tradition of authentic taste</h1>
        <p className='w-full lg:w-2/4 mx-auto text-center py-3 text-primaryClr font-serifFont font-medium text-lg'>Our beloved founder Late Sri. KS Thirupathi Raja was a man of remarkable discipline, hard work, and indomitable will. Throughout his life, he battled hardships, but he was unfazed by them. He held onto a singular belief that "hard work eventually pays." That belief is now what we call Adyar Ananda Bhavan.
</p>
<button className=" bg-primaryClr uppercase px-6 py-4 mt-4 text-white font-serifFont font-medium rounded">
           Reload More
          </button>
<Image className="hidden lg:block absolute bottom-[-100px] right-14" src={image2} alt={image2}></Image>
     </div>

    </div>
  )
}

export default AboutUs
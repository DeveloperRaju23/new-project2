import React from 'react'
import Image from "next/image";
import logo from "../../public/logo.png"
import image1 from "../../public/Exceptionaldelights.png"
const ExceptionalDelights = () => {
  return (
    <div className='flex flex-col justify-center hero_section'>
    <div className='mx-auto'>
    <Image className="rounded-lg mx-auto" src={logo} alt={logo}></Image>
     <h2 className='text-[24px] text-primaryClr font-serifFont font-semibold text-center'>Exceptional delights</h2>
     <p className='w-full lg:w-2/4 mx-auto text-center py-3 text-primaryClr font-serifFont font-medium text-lg'>A2B restaurants have everything you would expect for a cosy meal time with your family. With an incredible menu covering the widest vegetarian fare across cuisines, you’re sure to be spoilt for choice.

</p>

    </div>
<div className='container mx-auto'>
<Image className="rounded-lg  mx-auto" src={image1} alt={image1}></Image>
</div>
 </div>
  )
}

export default ExceptionalDelights
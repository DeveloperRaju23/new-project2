import Container from "@/Hooks/Container";
import React from "react";
import Image from "next/image";
import image1 from "../../public/image1.jpg"
import logo from "../../public/logo.png"
import bannerImg from "../../public/fullbackgroundimage.png"
const ServeDelights = () => {
  return (
    <div className="hero_section ">
      <div className='mx-auto'>
       <Image className="rounded-lg mx-auto" src={logo} alt={logo}></Image>
        <h2 className='text-[24px] text-primaryClr font-serifFont font-semibold text-center'>  Quick Serve Delights</h2>
        <p className='w-full lg:w-2/4 mx-auto text-center py-3 text-primaryClr font-serifFont font-medium text-lg'>A2B restaurants have everything you would expect for a cosy meal time with your family. With an incredible menu covering the widest vegetarian fare across cuisines, you’re sure to be spoilt for choice.

</p>
       </div>
      <section class="text-gray-600 body-font">
  <div class="container px-5 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div>
         <Image className="rounded-lg" src={image1} alt={image1}></Image>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div>
        <Image className="rounded-lg" src={image1} alt={image1}></Image>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div>
        <Image className="rounded-lg" src={image1} alt={image1}></Image>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div>
        <Image className="rounded-lg" src={image1} alt={image1}></Image>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default ServeDelights;

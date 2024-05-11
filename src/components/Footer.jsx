import Container from "@/Hooks/Container";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoIosCall } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png"
const Footer = () => {
  return (
    <div>
      <Container>
        <footer class="text-gray-400 bg-[#333333]">
          <div class="container mx-auto pt-8 pb-6">
            <div class="flex flex-wrap md:text-left text-center order-first border-t-[1px] border-[#5b5959]">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4 py-4">
                <h2 class="font-serifFont text-white tracking-widest text-lg mb-3">
                  LATEST FROM MEDIA
                </h2>
                <nav class="list-none mb-10">
                  <li className="flex items-center gap-3">
                    <span className="w-12 h-14 bg-[#4A4A4A] rounded-lg text-white flex justify-center items-center">
                      <CiLocationOn size={24} />
                    </span>
                    <a class="bg-[#4A4A4A] rounded-lg p-2 w-full font-serifFont text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis
                    </a>
                  </li>

                  <li className="flex items-center gap-3 mb-2 mt-2">
                    <span className="w-10 h-10 bg-[#4A4A4A] rounded-lg text-white flex justify-center items-center">
                     
                      <TfiEmail size={20} />
                    </span>
                    <a class="bg-[#4A4A4A] rounded-lg p-2 w-full font-serifFont text-sm">
                      Lorem ipsum dolor sit
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-[#4A4A4A] rounded-lg text-white flex justify-center items-center">
                      {" "}
                      <IoIosCall size={20} />
                    </span>
                    <a class="bg-[#4A4A4A] rounded-lg p-2 w-full font-serifFont text-sm">
                      Lorem ipsum dolor sit
                    </a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full mx-auto px-4 py-4">
                <h2 class=" text-white tracking-widest font-serifFont text-lg mb-8 ms-20 uppercase">
                  Services
                </h2>
                <nav class="list-none mb-10 ms-20  text-white font-serifFont space-y-3">
                  <li>
                  <Link href="/">Home</Link>
              
                  </li>
                  <li>
                  <Link href="/">About Us</Link>
                  </li>
                  <li>
                  <Link href="/">Services</Link>
                  </li>
                  <li>
                  <Link href="/">Contact Us</Link>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full mx-auto px-4 py-4">
                <h2 class=" text-white tracking-widest font-serifFont text-lg mb-3 ms-12 uppercase">
                  GET SUPPORT
                </h2>
                <nav class="list-none mb-10 ms-12 text-white font-serifFont space-y-3">
                  <li>
                  <Link href="/">sales@u2ck.com</Link>
                  </li>
                  <li>
                  <Link href="/">support center</Link>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4 mt-8">
               <Image className="mx-auto" src={logo} alt={logo}></Image>
              </div>
            </div>
          </div>
          <div class="bg-gray-800 bg-opacity-75">
            <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              <a class="flex font-serifFont font-medium items-center md:justify-start justify-center text-white">
                <span class="ml-3 text-xl">U2 FoodGram</span>
              </a>
              <p class="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4 font-serifFont">
                © 2024 U2 FoodGram —
              </p>
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-400">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;

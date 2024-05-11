"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import React, { useState } from "react";
import logo from "../../public/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-2 bg-[#ECC970] py-4 sticky top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        <div>
          <Image src={logo} alt={logo} width={140} height={140} />
        </div>
        <nav className="hidden lg:block space-x-6 lg:space-x-8 text-primaryClr font-serifFont font-medium text-[16px] uppercase">
          <Link href="/">Home</Link>
          <Link href="/">Why U2 Food Gram</Link>
          <Link href="/">Healthy Foods</Link>
          <Link href="/">About US</Link>
          <Link href="/">Contact US</Link>
        </nav>
        <button className="hidden lg:block bg-primaryClr px-6 py-3 text-white font-serifFont font-medium rounded">
          Order Online
        </button>
        <div className="lg:hidden h-auto">
          <button
            onClick={toggleMenu}
            className="block text-white focus:outline-none"
          >
            {isOpen ? (
              <MdClose className=" text-primaryClr fill-current" size={28} />
            ) : (
              // <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              //     <path fillRule="evenodd" clipRule="evenodd" d="M19 6H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM5 5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5z"></path>
              // </svg>
              <FaBars className=" fill-current text-primaryClr" size={24} />
              // <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              //     <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              // </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#ECC970] h-[850px] mx-auto text-center scroll-smooth">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link className="block py-3 text-lg font-serifFont" href="/">Home</Link>
          <Link className="block py-3 text-lg font-serifFont" href="/">Why U2 Food Gram</Link>
          <Link className="block py-3 text-lg font-serifFont" href="/">Healthy Foods</Link>
          <Link className="block py-3 text-lg font-serifFont" href="/">About US</Link>
          <Link className="block py-3 text-lg font-serifFont" href="/">Contact US</Link>
          </div>
          <button className=" bg-primaryClr px-6 py-3 text-white font-serifFont font-medium rounded">
            Order Online
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

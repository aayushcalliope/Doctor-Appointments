import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="sm:px-20 sm:pt-16 max-sm:px-4 pt-4">
      <div className="flex flex-row justify-center sm:grid[3fr_1fr_1fr] gap-14 my-10 text-sm">
        {/* left-section */}
        <div className="">
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Curiosity drives learning, and patient practice transforms confusion
            into clarity while small daily efforts steadily build confidence and
            lasting understanding.
          </p>
        </div>
        {/* center-section */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right-section */}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+12-3455-8975-98</li>
            <li>Prompt@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright text */}
      <div>
        <hr className="border-t border-t-gray-300" />
        <p className="py-5 text-sm text-center">
          Copyright 2042@ prompt-All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer

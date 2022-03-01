import React from "react";

const Footer = () => {




  return (
    <div className="flex flex-col items-center px-7 mt-14 md:px-0 hero mb-44 ">
        <h1>Meet your next<br /><span id="hero-heading-key-line">creative</span> developer.</h1>
        <div class="grid grid-cols-3 gap-5 pt-20 mt-20 border-t border-opacity-10 md:w-2/4 lg:w-8/12">
            <div class="col-span-2">
                <input type="text" class="w-full outline hover:outline-2 text-gray-400 h-14 rounded input-cc  focus:border- pl-6 placeholder-gray-200 placeholder-opacity-50" placeholder="Get In Touch"/>
            </div>
            <div class="col-span-1">
            <button class="btn-linear w-full btn--label  text-white font-bold text text-sm text-opacity-90 px-14 py-4 will-change transform-gpu transition-transform ease-linear hover:-translate-y-1 uppercase">Say Hello</button>
            </div>
        </div>
        <div className="flex w-full mt-14">
            <div class="flex items-center justify-center w-full text-gray-500">
                Design by Josbert Hernández <svg   xmlns="http://www.w3.org/2000/svg" className="flex w-6 h-6 ml-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
            </div>
        </div>
    </div>
  );
}

export default Footer;
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
const Footer = () => {

  const form = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_7t8wtjn', e.target, 'user_7t8wtjn')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }


  return (
    <div className="flex flex-col items-center px-7 mt-14 md:px-0 hero mb-44 " id="contact">
        <h1>Leave me your <br /><span id="hero-heading-key-line">message</span> so we can work together</h1>
        <div class="grid grid-cols-3 gap-5 pt-20 mt-20 border-t w-full border-opacity-10 md:w-2/4 lg:w-8/12">
            <div class="col-span-3 md:col-span-2">
                <input type="text"  class="w-full outline hover:outline-2 text-gray-400 h-14 rounded input-cc  focus:border- pl-6 placeholder-gray-200 placeholder-opacity-50" placeholder="Get In Touch: joheandroid@gmail.com" readOnly/>
            </div>
            <div class="col-span-3 md:col-span-1">
              <a href="mailto:joheandroid@gmail.com" class="btn-linear w-full btn--label  text-white font-bold text text-sm text-opacity-90 px-14 py-4 will-change transform-gpu transition-transform ease-linear hover:-translate-y-1 uppercase">Say Hello</a>
            </div>
        </div>
        <div className="flex flex-col items-center w-full mt-14">
            <div class="flex items-center justify-center w-full text-gray-500">
                Design by Josbert Hernández <svg   xmlns="http://www.w3.org/2000/svg" className="flex w-6 h-6 ml-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </div>
            <div class="mt-4">
              <a href="tel:+56 940633120" className="flex items-center text-gray-500">
                +56 9 4063 3120
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 ml-2 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>

              </a>
            </div>
        </div>
    </div>
  );
}

export default Footer;
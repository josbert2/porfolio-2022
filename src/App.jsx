import './App.css';
import React from "react";

import SmothScroll from './Components/SmoothScroll/SmoothScroll';

// Layouts

import Header from './Components/Layouts/Header';
import Social from './Components/Misc/Social';
import Logo from './Components/Misc/Logo';

// Page

import About from  './Components/Pages/About';
import Worked from './Components/Pages/Worked';
import Works from './Components/Pages/Work';
import SayHello from './Components/Pages/SayHello';


// assets
import Cube from './Components/Misc/Cube';
import logo from './assets/img/logo.jpg';

const App = () => {
  return (
    <div className="hidden App md:block">
      <Header />
      <Social />
      {/* <SmothScroll /> */}
      {/*<Cube /> */}
      
      <div class='grey'></div>

        <div className="md:px-44 lg:px-40 xl:52" >
         
          <div class="main-hero">
          <section class="mb-3">
                <div class="hero-text iam px-4 py-3 flex items-center">
                  <div class="w-11 h-11 rounde rounded-full mr-6 grayscale border border-opacity-40">
                      <img src={ logo } alt="" class="rounded-full grayscale" />
                  </div>
                  <h1 class="text-mint-green-500  font-Pangram-light ">Hi, I´m <span class="font-Pangram-Bold uppercase">Josbert Hernández</span></h1>
                  <div class="w-4 h-4 border border-opacity-10 transform rotate-45 ml-6 color-main-border glow-main">

                  </div>
                </div>

               
              </section>
              <div class="h1-font text-6xl my-5 lea" style={{ lineHeight: '75px'}}>
                Web developer & <br /> designer Creative
              </div>
            
              <div class="flex ">
               
                <button class="btn-linear btn--label mt-6  text-white font-bold text text-sm text-opacity-90 px-14 py-4 will-change transform-gpu transition-transform ease-linear hover:-translate-y-1">
                    RESUME
                </button>
                <button class="btn--label md:ml-7 mt-6 border  btn-linear2 uppercase font-bold text-gray-300 text text-sm text-opacity-90 px-14 py-4 will-change transform-gpu transition-transform ease-linear hover:-translate-y-1">
                    Work´s
                </button>
              </div>
          </div>
          <Logo /> 
          <div>
          


          </div>
        
        </div>
       
        <div className='md:px-44 lg:px-40 xl:52'>
        <About /> 
        <Worked />
        {/*<Works />  */}
        <SayHello />
        </div>
       
      {/* </SmothScroll> */}
    </div>
  );
}


export default App;

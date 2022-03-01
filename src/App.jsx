import './App.css';
import React from "react";

import SmothScroll from './Components/SmoothScroll/SmoothScroll';
import { Link, animateScroll as scroll } from "react-scroll";
// Layouts
// service_7t8wtjn
import Header from './Components/Layouts/Header';
import Social from './Components/Misc/Social';
import Logo from './Components/Misc/Logo';

// Page

import About from  './Components/Pages/About';
import Worked from './Components/Pages/Worked';
import Works from './Components/Pages/Work';
import SayHello from './Components/Pages/SayHello';
import Footer from './Components/Pages/Footer';


// assets
import Cube from './Components/Misc/Cube';
import logo from './assets/img/logo.jpg';

const App = () => {
  return (
    <div className="App md:block">
      <Header />
      <Social />
      {/* <SmothScroll /> */}
      {/*<Cube /> */}
      
      <div class='grey'></div>

        <div className="mt-20 md:px-44 lg:px-40 xl:52 md:mt-0" >
         
          <div class="main-hero md:px-0 px-5">
          <section class="mb-3 md:w-auto w-full">
                <div class="hero-text iam px-4 py-3 flex items-center md:flex-row justify-center flex-col md:w-auto w-full">
                  <div class="md:w-11 md:h-11 w-44 h-44 rounde rounded-full md:mt-0 mt-4 md:mb-0 mb-4 md:mr-6 grayscale border border-opacity-40">
                      <img src={ logo } alt="" class="rounded-full grayscale" />
                  </div>
                  <h1 class="text-mint-green-500  font-Pangram-light md:mb-0 mb-4">Hi, I´m <span class="font-Pangram-Bold uppercase">Josbert Hernández</span></h1>
                  <div class="w-4 h-4 border border-opacity-10 transform md:relative absolute md:right-0 right-3 md:top-0 top-3 rotate-45 ml-6 color-main-border glow-main">

                  </div>
                </div>

               
              </section>
              <div class="h1-font text-2xl md:text-6xl my-3 md:my-5 md:text-left text-center w-full">
                Web developer & <br /> designer Creative
              </div>
            
              <div class="flex md:flex-row flex-col w-full">
               
                <Link activeClass='s'
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500} className="w-full py-4 mt-6 text-sm font-bold text-white transition-transform ease-linear btn-linear md:w-44 btn--label text text-opacity-90 px-14 will-change transform-gpu hover:-translate-y-1">
                    RESUME
                </Link>
                <Link activeClass='s'
                    to='experience'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500} className="w-full py-4 mt-6 text-sm font-bold text-gray-300 uppercase transition-transform ease-linear border btn--label md:w-44 md:ml-7 btn-linear2 text text-opacity-90 px-14 will-change transform-gpu hover:-translate-y-1">
                    Work´s
                </Link>
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
        <Footer />
        </div>
       
      {/* </SmothScroll> */}
    </div>
  );
}


export default App;

import React, { useEffect } from 'react';
import { Component } from 'react';
import Progress from '../Misc/Progress';

const Header = () => {


    // set fixed header
    const [y, setY] = React.useState(window.scrollY);

    const handleNavigation = React.useCallback(
    e => {
        const window = e.currentTarget;
        const headerClass = document.querySelector('.header--class')
        if (window.scrollY >= 200){
            headerClass.classList.add('open');
        }else{
            headerClass.classList.remove('open');
        }
       
        if (y > window.scrollY) {
            console.log("scrolling up");
        } else if (y < window.scrollY) {
            console.log("scrolling down");
        }
        setY(window.scrollY);
    }, [y]
    );

    React.useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    


    //Progress bar
    const [scrollPosition, setP] = React.useState(0);
    
    
    const listenToScrollEvent = () => {
        document.addEventListener("scroll", () => {
          requestAnimationFrame(() => {
            calculateScrollDistance();
          });
        });
      }
    
    const  calculateScrollDistance = React.useCallback(
    e => {
        const scrollTop = window.pageYOffset; // how much the user has scrolled by
        const winHeight = window.innerHeight;
        const docHeight = getDocHeight();
    
        const totalDocScrollLength = docHeight - winHeight;
        const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

        setP(scrollPostion);
    }, [scrollPosition]
    );
    
    const getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }
    
     useEffect(() => {
        listenToScrollEvent();
    }, []);

 
    

    




 
    
    

 



    return (
       
        <div>
            <Progress scroll={scrollPosition + '%'} />
            <header className="fixed z-10 w-full py-3 md:px-44 lg:px-40 xl:52 header--class">
             
             <div className="flex items-center w-full">
                 <div className="logo-main h-11">
                     <svg className="w-full h-full fill-current text-mint-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 96">
                         <g transform="translate(-8 -2) translate(11 5)">
                         <path
                             fill="currentColor"
                             d="M45.692 45.15c2.9.95 5 3.8 5 7.05 0 5.75-4 8.8-10.4 8.8h-11.75V30.3h10.75c6.4 0 10.4 2.85 10.4 8.35 0 3.3-1.75 5.7-4 6.5zm-12.1-1.95h5.65c3.55 0 5.45-1.35 5.45-4.25s-1.9-4.15-5.45-4.15h-5.65v8.4zm0 4.3v9h6.6c3.5 0 5.4-1.75 5.4-4.5 0-2.8-1.9-4.5-5.4-4.5h-6.6z"
                         ></path>
                         <path
                             stroke="currentColor"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth="5"
                             d="M39 0L0 22 0 67 39 90 78 68 78 23z"
                         ></path>
                         </g>
                     </svg>
                 </div>
                 <div class="ml-auto">
                     <ul class="header-ul flex items-center">
                         <li class="">
                             <a href="">
                                 About
                             </a>
                         </li>
 
                         <li class="">
                             <a href="">
                                 Experiencie
                             </a>
                         </li>
 
 
                         <li class="">
                             <a href="">
                                 Works
                             </a>
                         </li>
 
                         <li>
                             <a href="">
                                 Contact
                             </a>
                         </li>
                     </ul>
                 </div>
             </div>
         </header>
        </div>
    );
}

export default Header;

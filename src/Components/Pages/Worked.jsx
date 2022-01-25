import React, { useState, useEffect } from "react";

import me from "../../assets/img/perfil.jpg";
import Data from '../../seeds/works.json'
import Apptitudes from '../../seeds/apptitudes.json'



const Worked = () => {


  function indicator(e) {
    let marker = document.querySelector(".marker");
    let item = document.querySelectorAll(".magic-line a");
    var middle = document.querySelector(".magic-line a").offsetHeight / 2
    var getAttr = e.getAttribute("data-tab");
    marker.style.top = e.offsetTop - 11 + 3 + "px";
    marker.style.height = e.offsetHeight + "px";
    var sections = document.querySelectorAll(".magic-line a")
    for (var i = 0; i < sections.length; i++){
      sections[i].classList.remove('active');
    }
    e.classList.add('active');
    
    var tabs = document.querySelectorAll('.item-container-tw')
    for (var i = 0; i < tabs.length; i++){
      tabs[i].classList.remove('active');
    }
    
    document.querySelector('.item-container-tw[data-tab="' + getAttr + '"]').classList.add('active');

  }



 

  /*item.forEach((link) => {
    link.addEventListener("click", (e) => {
      indicator(e.target);
     
    });
  }); */






  
  return (
    <div className="pt-56">
      <div class="count-point flex  place-items-end text-xl mb-14 relative">
        <div class=" h-px border-green w-72 ml-auto absolute top-2/4 right-0 transform -translate-y-2/4"></div>
          02. <span className="ml-2.5 text-2xl text-white"> Where I´ve Worked</span>
          
      </div> 
      <div className="py-44 height-max">
          <div className="grid grid-cols-3 gap-20">
            <div>
                <div class="box">
                    <nav class="magic-line  relative">
                      <div class="marker btw-none" ></div>
                        {Data.map((info, index)=>{
                          return(
                            <div>
                              <a target="_blank" rel="noopener noreferrer" class={ index == 0 ? 'mb-6 active' : 'mb-6'} data-tab={info.id} onClick={e => indicator(e.target) }> 
                                {info.name}
                              </a>
                              


                            </div>
                          )
                        })}
                      
                    </nav>
                </div>

            </div>
            <div className="col-span-2">
                <div className="text-white tw-container-tab md:px-14">
                    {Data.map((info, index)=>{
                        return(
                          <div  class={ index == 0 ? 'item-container-tw w-full active' : 'item-container-tw w-full'} data-tab={info.id}>
                              <div className="flex items-center w-full">
                                  <div class="flex flex-colr w-full">
                                    <div className="flex flex-col w-full">
                                      <div class="w-44 mb-8">
                                        <img src={info.logo}/>
                                      </div>
                                      <div className="flex items-center">
                                        <span className="mr-1 text-xl font-bold">{info.job} - </span>
                                        <a href={info.url} target='_blank'>
                                          <h2 className="mb-0 text-2xl font-bold text-left text-mint-green-500">@{info.name}</h2>
                                        </a>
                                        <a href={info.url} target='_blank' className="flex ml-auto ">
                                        
                                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                          </svg>
                                          
                                        </a>
                                      </div>
                                      <div className="mt-2">
                                        {info.date}
                                      </div>
                                      
                                    </div>
                                   

                                  </div>
                                 
                                  <div class="ml-auto h-44 w-44 flex items-center hidden">
                                      <img src={info.logo} />
                                  </div>
                                  
                                 
                              </div>
                              <div class="mt-10  leading-loose text-base p-10 btn-linear text-white text-opacity-60">
                                {info.description}
                                <div className="mt-4">
                                <div dangerouslySetInnerHTML={ { __html:  info.aptitude } }></div>
                                </div>
                              </div>
                          </div>
                        )
                      })}


                  
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Worked;
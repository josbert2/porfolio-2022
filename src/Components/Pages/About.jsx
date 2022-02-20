import React from "react";

import me from "../../assets/img/perfil.jpg";

const About = () => {
  return (
    <div>
      <div class="count-point flex  place-items-end text-xl mb-14 relative md:px-0 px-4">
          01. <span className="ml-2.5 text-2xl text-white"> About Me</span>
          <div class=" h-px border-green w-11 right-4 md:w-72 ml-auto absolute top-2/4 md:right-0 transform -translate-y-2/4"></div>
      </div> 
     <div className="flex flex-col grid-cols-2 md:grid">
        <div className="order-2 px-4 md:order-none md:order-0 md:px-0">
            <div class="text-white text-opacity-80 leading-relaxed">
            Hello! Mi nombre es Josbert y disfruto creando cosas que viven en Internet. 
            Mi interés en el desarrollo web comenzó en 2012 cuando decidí intentar editar 
            temas personalizados de Materialize. ¡Resulta que hackear dichos temas me enseñó mucho sobre HTML y CSS!
            <br />

            Al día de hoy lidero el desarrollo frontend de <a href="entrekids.cl" target="_blank" className="font-bold text-mint-green-500">entrekids.cl</a> y <a href="criptovision.com " target="_blank" className="font-bold text-mint-green-500">criptovision.com  </a> 
            </div>

            <div className="leading-relaxed text-white text-opacity-80 mt-7">
                He hecho pasantias para empresas como: 
                <div className="pl-5 mt-4">
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                            <a href="" target="_blank" className="font-bold text-mint-green-500">Ed Team</a>: <span className="ml-2">UI / UX DESIGN</span>
                        </span>
                    </div>
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                            <a href="" target="_blank" className="font-bold text-mint-green-500">Platzi & Microsoft Azure</a>: : <span className="ml-2">Devs Ops</span>
                        </span>
                    </div>
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                            <a href="" target="_blank" className="font-bold text-mint-green-500">desafiolatam.cl</a> : <span className="ml-2">UI / UX DESIGN</span>
                        </span>
                    </div>
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                            <a href="" target="_blank" className="font-bold text-mint-green-500">Lealtad 360</a>   : <span className="ml-2">Data Science</span>
                        </span>
                    </div>
                </div>
                
                
            </div>

            
            <div class="col-span-2  mt-14 barrot-container text-white text-opacity-75">
                Mis habilidades tecnicas:
            </div>
            <div className="grid grid-cols-2 mt-6">
                <div>
                    
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                            html 5
                        </span>

                    </div>
                    <div class="barrot ">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                            CSS
                        </span>

                    </div>
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                        React
                        </span>

                    </div>
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                        PHP
                        </span>

                    </div>
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                        Wordpress
                        </span>

                    </div>
                </div>

                <div>
                 
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                            SASS
                        </span>

                    </div>
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                        JavaScript (ES6+)
                        </span>

                    </div>
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                        Node.js
                        </span>

                    </div>
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                        Python
                        </span>

                    </div>
                    <div class="barrot">
                        <span class="barrot-bar barrot-container text-white text-opacity-75">
                        Symfony
                        </span>

                    </div>

                </div>
            </div>
        
        </div>
        <div class="relative flex justify-center md:justify-end md:order-0 order-1 md:mb-0 mb-11">
            <div class=" profile-photo">
                <img src={ me } alt="" class="filter grayscale img-profile ml-auto" /> 
            </div>      
        </div>
  
     </div>
    </div>
  );
}

export default About;
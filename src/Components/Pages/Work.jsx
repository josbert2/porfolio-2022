import React from "react";

import me from "../../assets/img/perfil.jpg";
import data from '../../seeds/works.json'

const Data = data;


const Works = () => {



    const DisplayData=Data.map(
        (info)=>{
            return(
                <div>
                    {info.id}
                </div>
            )
        }
    )

  return (
    <div>
      <div class="count-point hidden place-items-end text-xl mb-14 relative">
          03. <span className="ml-2.5 text-2xl text-white"> Some Things I’ve Built</span>
          <div class=" h-px border-green w-72 ml-auto absolute top-2/4 right-0 transform -translate-y-2/4"></div>
      </div> 
      <div>
        
        <div>
            {DisplayData}
        </div>

      </div>


      <div class="container-work">
        <div class="project-content">

        </div>
        <div class="project-image">
            <a href="">
                
            </a>
        </div>
      </div>





    </div>
  );
}

export default Works;
import React from "react";
import SpeakerImage2 from "../../Assets/Speaker2Image.png";
import Instagram from "../../Assets/instagram.png"
import linkdin from "../../Assets/linkdin.png"
import Facebook from "../../Assets/facebook.png"
import { useState } from "react";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  
} from "@material-tailwind/react";
 


function Images({description,image,name}){
  const [isDialogOpen, setDialogOpen] = useState(false);
  const handleCardClick = () => {
    setDialogOpen(true);
  };
    return(
      <div>
        <div onClick={handleCardClick}>
             <img
        src={image}
        alt="avatar"
      
        className="p-0.5 rounded-full w-52 h-52 my-auto mx-auto-block "
      />
        </div>
        <Dialog open={isDialogOpen} size="lg" handler={() => setDialogOpen(false)} className="sponserCard">
        <DialogHeader>Sponsors Dialog</DialogHeader>
        <DialogBody>

          <div className="flex flex-row">
             <div className="flex flex-col  ">
                    <div className=" #FFF;">
                      <img
                        src={Facebook}
                        className="p-3 rounded-full w-32  h-20 my-auto mx-auto-block "
                      />
                      </div>
                    <div className=" #FFF;">
                      <img
                        src={Instagram}
                        
                        className="p-3 rounded-full w-32 h-20 my-auto mx-auto-block "
                      />
                      </div>
                    <div className=" rgba(255, 255, 255, 0.86);">
                      <img
                        src={linkdin}
                      
                      
                        className="p-3 rounded-full w-32 h-20 my-auto mx-auto-block "
                    /> 
                    </div>
                </div>
          
          <div className="flex flex-col  items-center">
            <div className="flex justify-normal z"> 
                 
                <div className="">
                <img
                    src={image}
                    alt="speakerImage"
                    className="object-contain rounded-full"
                />
                </div>
             </div>
             <div className="text-white pt-8  sponsersName">
              {name}
            </div>
            <div className="text-white pt-8">
              {description}
            </div>
          </div>
          </div>
        </DialogBody>
       
      </Dialog>
        </div>

         
    )
}

export default Images
import React from 'react';
import Id from '../Components/Idcard/Id';
import IdCardImage from "../Assets/IdImage.png"


function IdPage(){
    const flagStyle = {
        backgroundImage: `url(${IdCardImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      };
    return(
        <div className="relative border-b rounded-b-[2.5rem] overflow-hidden h-screen">
        <div className="flex flex-row h-full">
         
          <div className="w-full md:w-1/2 p-8">
            <Id />
          </div>
      
          <div className="hidden md:block w-1/2" style={flagStyle}></div>
        </div>
      </div>
    )
}

export default IdPage
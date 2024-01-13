import React from "react";



function Investor({image}){



    return(
        <div>
            <img
            src={image}
            alt="image"
            className="p-0.5 rounded-full lg:w-[200px] lg:h-[200px] w-16 h-16 my-auto mx-auto-block"
            
            />
        </div>
    )
}



export default Investor
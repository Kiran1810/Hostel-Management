import React from "react";



function Investor({image}){



    return(
        <div>
            <img
            src={image}
            alt="image"
            className="p-0.5 rounded-full lg:w-52 lg:h-52 w-16 h-16 my-auto mx-auto-block"
            
            />
        </div>
    )
}



export default Investor
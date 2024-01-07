import React from "react";



function Investor({image}){



    return(
        <div>
            <img
            src={image}
            alt="image"
            className="rounded-full h-52 w-52"
            
            />
        </div>
    )
}



export default Investor
import React from "react";
function Images({image}){
    return(
        <div>
             <img
        src={image}
        alt="avatar"
      
        className="p-0.5 rounded-full w-52 h-52 "
      />
        </div>
    )
}

export default Images
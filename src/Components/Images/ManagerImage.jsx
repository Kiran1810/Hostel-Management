import React from "react";
function Manager(){
    return(
        <div className="flex flex-col text-white items-center">
             <img
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="img"
                    className="p-0.5 rounded-full w-80 h-80 "


              />
              <div className="p-2.5">
              <div className="team ">
                 Name
              </div>
              <div className="team2">
                 Position
              </div>
              </div>
        </div>
       
    )
}

export default Manager

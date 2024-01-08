import React from "react";
import personImage from "../Assets/person.png"

function AboutUsPage(){
return(
    <div className="flex flex-col bg-black ">
      <div className="flex lg:flex-row sm:flex-col-reverse ml-20 mr-20 ">
        <div className="text-white place-items-center ">
           <div className=" what pt-8">
            WHAT IS
           </div>
           <div className="E-summit ">
            E-SUMMIT?
           </div>
           <div className="pt-8">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque dicta earum ad minima blanditiis porro a cumque neque
              laboriosam, commodi esse nulla quae magnam exercitationem, at nemo. Cumque, reiciendis.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam sit officia saepe incidunt
              magni sunt quibusdam error tempore? Eos?
           </div>
         </div>
        <div className="place-items-center ">
            <img
            src={personImage}
            alt="personImage"
            className=" object-contain ml-10 p-5 "
            />
         </div>
      </div>
      <div className="flex flex-row  text-white justify-center lg:space-x-52 sm:space-x-24">
        <div>
           <div className="border-b-2 border-blue-500 py-2 text-4xl font-Rocker">
            10+
           </div>
           <div className="py-1">
           Speakers
           </div>
        </div>
        <div>
            <div className="border-b-2 border-blue-500 py-2 text-4xl font-Rocker">
            10+
            </div>
            <div className="py-1 text-center">
            Cities
            </div>
        </div>
        <div>
            <div className="border-b-2 border-blue-500 py-2 text-4xl font-Rocker ">
            10+
            </div>
            <div className="py-1 text-center">
             Events
            </div>
        </div>
        <div className="">
            <div className="border-b-2 border-blue-500 py-2 text-4xl font-Rocker">
             100+
            </div>
            <div className="py-1 text-center">
             Students
            </div>
        </div>
      </div>
               
    </div>
);
}

export default AboutUsPage


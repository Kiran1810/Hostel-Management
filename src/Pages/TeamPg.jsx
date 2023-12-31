import React from "react";
import Manager from "../Components/Images/ManagerImage";
import SecondYear from "../Components/Images/SecondYear";
import ThirdYear from "../Components/Images/ThirdYear";


function TeamPg(){
    return(
        <div className="flex flex-col pt-16 ml-10 mr-10">
           
            <div className=" flex flex-col gap-y-24">
                <div className="text-center font-bold tracking-widest text-6xl sponsors">
                    MEET OUR TEAM
                </div>
                <div className=" items-start gap-x-14 gap-y-14 grid grid-cols-3">
                    <Manager/>
                    <Manager/>
                    <Manager/>
               </div>
               <div className=" items-start gap-x-14  gap-y-14 grid grid-cols-4">
                    <ThirdYear/>
                    <ThirdYear/>
                    <ThirdYear/>
                    <ThirdYear/>
                    <ThirdYear/>
                    <ThirdYear/>


                    
               </div>
               <div className=" items-start gap-x-14 gap-y-14 grid grid-cols-5">
                    <SecondYear/>
                    <SecondYear/>
                    <SecondYear/>
                    <SecondYear/>
                    <SecondYear/>
                    <SecondYear/>
                    <SecondYear/>
                    <SecondYear/>
                    
               </div>



            
          
          </div>
        </div>
    )
}

export default TeamPg
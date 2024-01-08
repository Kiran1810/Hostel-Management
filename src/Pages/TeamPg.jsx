import React from "react";
import Manager from "../Components/Images/ManagerImage";
import SecondYear from "../Components/Images/SecondYear";
import ThirdYear from "../Components/Images/ThirdYear";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navlist";

function TeamPg(){
    return(
        <>
        <div>
          <Navbar/>
        </div>
        <div className="bg-black">
        <div className="flex flex-col pt-16 ml-10 mr-10">
           
            <div className=" flex flex-col gap-y-24">
                <div className="text-center font-bold tracking-widest text-6xl sponsors">
                    MEET OUR TEAM
                </div>
                <div className=" items-start gap-x-14 gap-y-14 grid sm:grid-col-2 lg:grid-cols-3">
                    <Manager/>
                    <Manager/>
                    <Manager/>
               </div>
               <div className=" items-start gap-x-14  gap-y-14 grid sm:grid-cols-2 lg:grid-cols-4">
                    <ThirdYear/>
                    <ThirdYear/>
                    <ThirdYear/>
                    <ThirdYear/>
                    <ThirdYear/>
                    <ThirdYear/>


                    
               </div>
               <div className=" items-start gap-x-14 gap-y-14 grid sm:grid-cols-2 lg:grid-cols-5">
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
        <Footer/>
        </div>
        </>
    )
}

export default TeamPg
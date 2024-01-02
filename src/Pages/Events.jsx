import React from "react";
import Group from "../Assets/Group.png"
import EventCard from "../Components/Cards/EventCard";
import { useEffect } from "react";
import axios from "axios";

function Event(){
   

    return(
        <>
        <div className=" flex flex-col bg-black">
            <div className="flex flex-row justify-start">
                <img
                src={Group}
                alt="group Image"
                className=" object-contain ml-10 p-5  bg-black"
                />
                <div className="text-white mt-72 E-summit"> 
                    Our Events
                </div>
            </div>
            <div className=" grid grid-cols-4 ml-10"> 
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
            </div>
        </>
    )
}

export default Event
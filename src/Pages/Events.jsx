import React from "react";
import Group from "../Assets/Group.png";
import EventCard from "../Components/Cards/EventCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Event() {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        axios
            .get(`https://e-cell-backend2k24-tppt.onrender.com/esummit/event/`)
            .then(
                (response) => (
                    setEvent(response.data),
                    console.log("response is", response)
                )
            );
    }, []);
    return (
        <>
            <div className=" flex flex-col bg-black">
                <div className="flex flex-row  lg:justify-start">
                    <img
                        src={Group}
                        alt="group Image"
                        className=" object-contain ml-10 p-5 w-20 h-20 lg:w-[335px] lg:h-[298px] bg-black "
                    />
                    <div className=" lg:ml-56 lg:pl-6 ml-0 lg:mb-14 text-blue-300 flex justify-center font-Play text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r from-blue-300 via-blue-800 to-blue-800 bg-clip-text text-transparent   lg:text-transparent lg:bg-gradient-to-r lg:from-blue-300 lg:to-blue-800 lg:bg-clip-text  lg:font-bold lg:text-6xl lg:mt-52 mt-6 sm:pl-24">
                        Our Events
                    </div>
                </div>
                <div className=" grid grid-cols-2  lg:grid-cols-4 lg:pl-16 space-y-4 pl-7">
                    {event &&
                        event.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                </div>
            </div>
        </>
    );
}

export default Event;

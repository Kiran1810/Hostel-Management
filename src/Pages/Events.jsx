import React  from "react";
import Group from "../Assets/Group.png"
import EventCard from "../Components/Cards/EventCard";
import { useEffect ,useState} from "react";
import axios from "axios";

function Event(){
    const [event,setEvent]=useState([])
    useEffect(()=>{
       axios.get(`https://e-cell-backend2k24.onrender.com/esummit/event/`) 
       .then((response)=>(setEvent(response.data),
       console.log("response is",response)))
    },[])
    return(
        <>
        <div className=" flex flex-col bg-black">
            <div className="flex lg:flex-row  sm:flex-col lg:justify-start">
                <img
                src={Group}
                alt="group Image"
                className=" object-contain ml-10 p-5  bg-black"
                />
                <div className=" lg:mt-72 sm:mt-8 E-summit sm:pl-24"> 
                    Our Events
                </div>
            </div>
            <div className=" grid sm:grid-2 lg:grid-cols-4 ml-10 sm:gap-y-4 sm:pl-20"> 
            {event && event.map((event,index)=>(<EventCard key={index} {...event}/>))}
                
            </div>
            </div>
        </>
    )
}

export default Event
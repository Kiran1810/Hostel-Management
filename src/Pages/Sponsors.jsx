import React from "react";
import  {useState, useEffect } from "react"
import Images from "../Components/Images/Images";
import SponsorImage from "../Assets/SponsorPg.png"
import axios from "axios"


function Sponsors(){
    const [sponser,setSponser]=useState([])
    useEffect(()=>{
     axios.get(`https://e-cell-backend2k24.onrender.com/esummit/sponsor/`)
     .then((response)=>(setSponser(response.data),
     console.log("response",response)))
    },[])
    return(
        <div className="flex flex-col pb-24  background ">
            <div className="flex flex-row-reverse">
                <img
                src={SponsorImage}
                className="w-80"

                />
            </div>
            <div className=" flex flex-col gap-y-20 ml-10 mr-10" >
                <div className="text-center font-bold tracking-widest text-6xl sponsors">
                    Our Sponsors
                </div>
                <div className=" items-start gap-x-14 grid grid-cols-5">
                    {sponser && sponser.map((sponser,index)=>( <Images key={index} {...sponser}/>))}
                   
                </div>
                <div className="text-center font-bold tracking-widest text-6xl sponsors">
                    Our Invester
                </div>
                <div className=" items-start gap-x-14 grid grid-cols-5">
                    <Images/>
                    <Images/>
                    <Images/>
                    <Images/>
                    <Images/>
                    
                </div>
            </div>
        </div>
    )
}
export default Sponsors
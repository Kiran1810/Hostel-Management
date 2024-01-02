import React from "react";
import Images from "../Components/Images/Images";
import SponsorImage from "../Assets/SponsorPg.png"
import { useEffect ,useState} from "react";
import axios from "axios";



function Sponsors(){
    const [sponsor,setSponsors]=useState([])

    useEffect(()=>{
         axios.get(
            `https://e-cell-backend2k24.onrender.com/esummit/sponsor/`
         )
         .then((response)=>(setSponsors(response.data),
         console.log("the response is ",response)))
        

       },[])

    return(
        <div className="flex flex-col pb-24  background">
            <div className="flex flex-row-reverse">
                <img
                src={SponsorImage}
                alt="image"
                className="w-80"

                />
            </div>
            <div className=" flex flex-col gap-y-20 ml-10 mr-10" >
                <div className="text-center font-bold tracking-widest text-6xl sponsors">
                    Our Sponsors
                </div>
                <div className=" items-start gap-x-14 grid grid-cols-5">
                {
                   sponsor && sponsor.map((sponsor, index) => (
                        <Images key={index} {...sponsor} />
                    ))}
                    
                   
                  
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
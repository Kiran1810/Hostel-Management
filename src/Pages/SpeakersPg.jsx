import React, { useState } from "react";
import SpeakersImage from "../Assets/SpeakersImage.png";
import SpeakerCard from '../Components/Cards/SpeakerCard';
import { useEffect } from "react";
import axios from "axios"

function SpeakersPage() {
  const [speaker,setSpeaker]=useState([])
  useEffect(()=>{
  axios.get(`https://e-cell-backend2k24.onrender.com/esummit/speaker/`)
  .then((response)=>(setSpeaker(response.data),
  console.log("response of the speaker ",response)))

  },[])

 const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleSpeakerClick = (name) => {
    // You can customize the content based on the selected speaker
    // For now, let's just display a generic message
    setSelectedSpeaker(`More about ${name}: Lorem ipsum...`);
  };

  return (
    <div className="bg-black pb-3 pt-2  lg:pt-16 pl-6 lg:pb-28  ">
      
      <div className="flex flex-col-reverse lg:flex-row justify-between  lg:mr-20">
        <div className="flex flex-col lg:items-center pt-8  lg:ml-10">
          <div className=" flex justify-center text-blue-300 text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r from-blue-300 via-blue-800 to-blue-800 bg-clip-text text-transparent   lg:text-transparent lg:bg-gradient-to-r lg:from-blue-300 lg:to-blue-800 lg:bg-clip-text  lg:font-bold lg:text-6xl font-Play ">OUR SPEAKERS</div>
          <div className=" p-6 lg:w-[700px] font-Roboto lg:text-3xl text-xs text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            reiciendis, fuga soluta atque itaque suscipit alias repudiandae
            exercitationem quidem totam!. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Rerum excepturi similique doloribus.
            Fugiat cum officiis tenetur exercitationem eligendi illum earum?
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={SpeakersImage}
            alt="SpeakersImage"
            className="object-contain  w-16 h-20 lg:w-80 lg:h-80"
          />
        </div>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-4 lg:gap-x-56 ml-16 mr-20 sm:pl-20">

       {speaker && speaker.map((speaker,index) =>(<SpeakerCard onClick={handleSpeakerClick} key={index} {...speaker}/>))
      }
     
      
      </div>


    </div>

  );
}

export default SpeakersPage;

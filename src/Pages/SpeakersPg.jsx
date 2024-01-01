import React, { useState } from "react";
import SpeakersImage from "../Assets/SpeakersImage.png";
import SpeakerCard from '../Components/Cards/SpeakerCard';

function SpeakersPage() {

  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleSpeakerClick = (speakerName) => {
    // You can customize the content based on the selected speaker
    // For now, let's just display a generic message
    setSelectedSpeaker(`More about ${speakerName}: Lorem ipsum...`);
  };

  return (
    <div className="bg-black  pb-4">
      <div className="flex flex-row ">
        <div className="flex flex-col items-center pt-8  ml-10">
          <div className="text-white E-summit">OUR SPEAKERS</div>
          <div className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            reiciendis, fuga soluta atque itaque suscipit alias repudiandae
            exercitationem quidem totam!. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Rerum excepturi similique doloribus.
            Fugiat cum officiis tenetur exercitationem eligendi illum earum?
          </div>
        </div>

        <div className="place-items-center w-96 h-96 ">
          <img
            src={SpeakersImage}
            alt="SpeakersImage"
            className="object-contain p-4 "
          />
        </div>
      </div>
      <div className="grid grid-cols-4 ml-16 mr-20">
      <SpeakerCard onClick={handleSpeakerClick}/>
      <SpeakerCard onClick={ handleSpeakerClick}/>
      <SpeakerCard onClick={ handleSpeakerClick}/>
      <SpeakerCard onClick={ handleSpeakerClick}/>
      <SpeakerCard onClick={ handleSpeakerClick}/>
      <SpeakerCard onClick={ handleSpeakerClick}/>
      <SpeakerCard onClick={ handleSpeakerClick}/>
      <SpeakerCard onClick={ handleSpeakerClick}/>
      
      </div>

      {/* {selectedSpeaker && (
        <div className="text-white mt-4 ml-16 mr-20">
          <p>{selectedSpeaker}</p>
        </div>
      )} */}

    </div>

  );
}

export default SpeakersPage;

// SpeakerCard.js
import React, { useState } from "react";
import SpeakerImage2 from "../../Assets/Speaker2Image.png";

function SpeakerCard({ onClick ,image,name,description }) {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleClick = () => {
    // Call the provided onClick function when the card is clicked
    onClick();
    // Toggle the state to show/hide the paragraph
    setShowParagraph(!showParagraph);
  };

  return (
    <div className="flex flex-col items-center Speaker box space-y-4 mt-8 " onClick={handleClick}>
      {showParagraph ? (
        <div className="text-white">
         {description}
        </div>
      ) : (
        <div className="w-32 h-32">
          <img
            src={image}
            alt="speakerImage"
            className="object-contain rounded-full"
          />
          <div className="space-y-3 text-white">
            <div>{name}</div>
            <div>Director and Producer</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpeakerCard;

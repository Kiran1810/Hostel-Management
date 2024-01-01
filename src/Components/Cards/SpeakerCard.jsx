// SpeakerCard.js
import React, { useState } from "react";
import SpeakerImage2 from "../../Assets/Speaker2Image.png";

function SpeakerCard({ onClick }) {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleClick = () => {
    // Call the provided onClick function when the card is clicked
    onClick("ANURAG KASYAP");
    // Toggle the state to show/hide the paragraph
    setShowParagraph(!showParagraph);
  };

  return (
    <div className="flex flex-col items-center Speaker box space-y-4 mt-8 " onClick={handleClick}>
      {showParagraph ? (
        <div className="text-white">
          More about ANURAG KASYAP: Lorem ipsum...
        </div>
      ) : (
        <div className="w-32 h-32">
          <img
            src={SpeakerImage2}
            alt="speakerImage"
            className="object-contain"
          />
          <div className="space-y-3 text-white">
            <div>ANURAG KASYAP</div>
            <div>Director and Producer</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpeakerCard;

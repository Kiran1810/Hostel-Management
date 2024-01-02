import React, { useState, useEffect } from "react";
import CardIcon from "../../Assets/card_icon.svg";
import Loyalty from "../../Assets/Loyalty.svg";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogDefault({ isOpen, onClose, name,description,prize}) {
  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      className="flex flex-col h-screen items-center text-white overflow-y-auto space-y-5 over"
    >
      <img src={CardIcon} alt="cardIcon" className="h-44 w-44 mt-5" />

      <DialogHeader>{name}</DialogHeader>
      <DialogBody className="ml-11 mr-11 mb-5">
        {description}
      </DialogBody>
      <DialogFooter className="flex flex-row justify-between">
        <div className="flex flex-row mr-20">
          <div className="flex flex-row items-center mr-4">
            <img src={Loyalty} alt="loyalty" className="mr-2" />
            <div>team</div>
          </div>
          <div className="flex flex-row items-center">
            <img src={Loyalty} alt="loyalty" className="mr-2" />
            <div>{prize}</div>
          </div>
        </div>
        <Button variant="gradient" color="green" onClick={onClose}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

const cards = ["card", "card2", "card3", "card4"];

function EventCard({name,event_date,description}) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const activeCardClass = cards[activeCardIndex];

  const handleCardClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div
        className={`card ${activeCardClass} w-80 h-80 text-white flex flex-col   items-center space-y-3  `}
        onClick={handleCardClick}
      >
        <img src={CardIcon} alt="cardIcon" className="h-14 w-14 mt-5" />
        <div className="ml-8 mr-8 mt-2 pb-3 space-y-4">
          <div className="font-kelly">{name}</div>
          <div className="font-kelly">Coming In</div>
          <div className="font-Rocker">{event_date}</div>
        </div>
      </div>

      <DialogDefault  name={name} description={description} isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </>
  );
}

export default EventCard;

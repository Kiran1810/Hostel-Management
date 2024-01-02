import React from "react";
import IdBg from "../Assets/Id.svg";
import Bg from "../Assets/bg.svg";
import Logo from "../Assets/logo.png"

function IdCard() {
  return (
    <div
      style={{
        backgroundImage: `url(${IdBg})`,
      }}
      className="h-screen Id flex flex-col items-center justify-center"
    >
      <div
        style={{
          backgroundImage: `url(${Bg})`,
        }}
        className="bg-cover bg-center InId flex flex-col items-center justify-center "
      >
        <div>
            <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="this is the image"
            className="rounded-full w-28 h-28"
            />
        </div>
        <div className="cardName">
         Nimit saxena
        </div>
        <div className="small flex flex-col items-center h-screen">
           <div className="volunteer">
               VOLUNTEER
           </div>
           <div>
            Email:123@gmail.com
           </div>
           <div>
            Colledge:abc Institute of technology
           </div>
           <div>
            Contact No:1234567890
           </div>
             
        </div>

        

      </div>
      <button className="downLoad mt-20 text-white font-K2D font-normal text-2xl">Download </button>

    </div>
  );
}

export default IdCard;

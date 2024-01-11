import React from 'react';
import { Typography } from '@material-tailwind/react';
import backgroundImageImage from '../Assets/background_image.jpg';
import constellationImage from '../Assets/constillation.png';
import jupiterImage from "../Assets/jupitor.png";
import Navbar from '../Components/Navbar/Navlist';
import "../index.css"
import Hindi from "../Assets/hindi_quote.png";
import AboutUsPage from './AboutusPg';
import Events from "./Events"
import Sponsors from './Sponsors';
import TeamPg from './TeamPg';
import SpeakersPage from './SpeakersPg';
import Footer from '../Components/Footer/Footer';
import "../index.css"

import IdPage from './TogglePage';

function HomePage() {
  return (

    <>
    
    <div>
    <Navbar/>
</div>
    <div
      className="flex flex-col items-center overflow-hidden lg:h-screen bg-cover bg-center w-full h-full"
      style={{
        backgroundImage: `url(${backgroundImageImage})`,
      }}
    >
       
      <img
        src={constellationImage}
        alt="Constellation"
        className="w-28 h-28 lg:w-64 lg:h-64  object-contain ml-auto "
      />
      <div>
      <div className=" font-K2D text-center text-gray-300 flex justify-center lg:text-4xl lg:w-screen w-56 text " >
       E-Cell NIT HAMIRPUR's
      </div>
      <div className="font-k2d text-center lg:font-black  text-color flex justify-center text-gray-300 text-shadow lg:text-9xl lg:w-screen w-56 text-4xl">
        ESUMMIT'24
      </div>
      </div>
      <div className="text-center text-gray-300 sm:text-base md:text-lg lg:text-4xl font-kelly mt-3 tracking-widest"  >
        EMERGENCE OF ETERNITY
      </div>
      <img
        src={Hindi}
        alt="Hindi quete"
        className="w-32 h-32 lg:w-96 lg:h-96 object-contain "
      />

      <div className="text-center text-gray-300 mt-4 font-Rocker">
      <h1>24-26 January</h1>
      </div>
      <img
        src={jupiterImage}
        alt="jupitor"
        className="w-28 h-28 lg:w-64 lg:h-64  object-contain mr-auto"
      />
    </div>
    <AboutUsPage/>
 
   
    <Events/>
   
    <div className=''>
    <SpeakersPage />
    </div>
    <div className="bg-black  ">
    <Sponsors/>
    </div>
    {/* <div className="bg-black ">
    <TeamPg/>
    </div> */}
   
    <div className="bg-black py-14">
    <Footer/>
    </div>
    
    </>
    
  );
}

export default HomePage;

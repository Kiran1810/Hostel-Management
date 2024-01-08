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
      className="flex flex-col items-center  h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImageImage})`,
      }}
    >
       
      <img
        src={constellationImage}
        alt="Constellation"
        className="sm:w-45 sm:h-48  md:w-45 md:h-48 lg:w-50 lg:h-50  object-contain ml-auto "
      />
      <div>
      <div className=" font-K2D text-left text-gray-300">
        <Typography variant="h4">E-Cell NIT HAMIRPUR's</Typography>
      </div>
      <div className="font-k2d text-center text-color text-gray-300 text-shadow text-9xl w-9/12  ">
        ESUMMIT'24
      </div>
      </div>
      <div className="text-center text-gray-300 sm:text-base md:text-lg lg:text-4xl font-kelly mt-3 tracking-widest"  >
        EMERGENCE OF ETERNITY
      </div>
      <img
        src={Hindi}
        alt="Hindi quete"
        className=" sm:w-25 sm:h-25 object-contain "
      />

      <div className="text-center text-gray-300 mt-4 font-Rocker">
      <h1>24-26 January</h1>
      </div>
      <img
        src={jupiterImage}
        alt="jupitor"
        className="sm:w-45 sm:h-48  md:w-45 md:h-48 lg:w-50 lg:h-50 object-contain mr-auto"
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

// SpeakerCard.js
import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import SpeakerImage2 from "../../Assets/Speaker2Image.png";

function SpeakerCard({ onClick ,image,name,description,linkedin_url,instagram_url,facebook_url }) {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("linkdin",{linkedin_url})


  const handleClick = () => {
    // Call the provided onClick function when the card is clicked
    onClick();
    // Toggle the state to show/hide the paragraph
  
    setShowParagraph(!showParagraph);
  };

  const handleIconClick = (event) => {
    // Prevent the event from propagating to the card
    event.stopPropagation();
  };

  return (
    <div className="flex flex-col items-center Speaker w-44 h-48 lg:w-80 lg:h-80 p-4 2 6 2 lg:p-10 8 14 8 space-y-4 mt-8 " onClick={handleClick}>
      {showParagraph ? (
        <div className="text-white text-xs lg:text-base">
         {description}
        </div>
      ) : (
        <div className="w-32 h-32 relative">
          <img
            src={image}
            alt="speakerImage"
            className="object-contain rounded-full lg:w-32 lg:h-32 w-10 h-10 "
          />
            <div className="svg-container absolute bottom-2 left-44 space-y-8">

            <a href={linkedin_url} target="_blank" rel="noopener noreferrer" onClick={handleIconClick}>
               <svg width="29" height="20" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1rem' }}>
                <path d="M0.390625 3.19225C0.390625 1.67415 1.65211 0.443848 3.20858 0.443848H35.9448C37.5012 0.443848 38.7627 1.67415 38.7627 3.19225V36.0675C38.7627 37.5856 37.5012 38.8159 35.9448 38.8159H3.20858C1.65211 38.8159 0.390625 37.5856 0.390625 36.0675V3.19225ZM12.2452 32.5661V15.2387H6.48699V32.5661H12.2452ZM9.3673 12.8716C11.3746 12.8716 12.6241 11.543 12.6241 9.87858C12.5882 8.17822 11.377 6.88556 9.40567 6.88556C7.4343 6.88556 6.14644 8.18062 6.14644 9.87858C6.14644 11.543 7.39593 12.8716 9.32892 12.8716H9.3673ZM21.1379 32.5661V22.8891C21.1379 22.3711 21.1763 21.8531 21.3298 21.4837C21.7447 20.4501 22.692 19.3781 24.2844 19.3781C26.3685 19.3781 27.2007 20.9657 27.2007 23.2968V32.5661H32.9589V22.6277C32.9589 17.3036 30.1194 14.8286 26.3302 14.8286C23.2748 14.8286 21.9054 16.5074 21.1379 17.6897V17.7497H21.0996C21.1123 17.7296 21.1251 17.7097 21.1379 17.6897V15.2387H15.3821C15.4541 16.8647 15.3821 32.5661 15.3821 32.5661H21.1379Z" fill="white"/>
               </svg> 
             </a>

              <a href={instagram_url} target="_blank" rel="noopener noreferrer" onClick={handleIconClick}>
               <svg width="29" height="20" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1rem' }}>
                <path d="M19.5767 0.541992C14.3701 0.541992 13.7153 0.565975 11.6696 0.657108C9.62391 0.753039 8.23052 1.0744 7.00981 1.54926C5.72937 2.03087 4.56956 2.78634 3.61148 3.76285C2.63557 4.72142 1.8802 5.88108 1.39789 7.16118C0.923038 8.37949 0.599273 9.77528 0.505741 11.8138C0.414608 13.8643 0.390625 14.5166 0.390625 19.7304C0.390625 24.9394 0.414608 25.5918 0.505741 27.6375C0.601671 29.6808 0.923038 31.0742 1.39789 32.2949C1.88953 33.5564 2.54426 34.626 3.61148 35.6932C4.67631 36.7604 5.74593 37.4176 7.00741 37.9068C8.23052 38.3817 9.62151 38.7054 11.6648 38.799C13.7129 38.8901 14.3653 38.9141 19.5767 38.9141C24.7881 38.9141 25.438 38.8901 27.4861 38.799C29.527 38.703 30.9252 38.3817 32.1459 37.9068C33.4255 37.425 34.5845 36.6695 35.5419 35.6932C36.6091 34.626 37.2638 33.5564 37.7554 32.2949C38.2279 31.0742 38.5517 29.6808 38.6476 27.6375C38.7387 25.5918 38.7627 24.9394 38.7627 19.728C38.7627 14.5166 38.7387 13.8643 38.6476 11.8162C38.5517 9.77528 38.2279 8.37949 37.7554 7.16118C37.2732 5.88105 36.5178 4.72137 35.5419 3.76285C34.5841 2.78598 33.4242 2.03046 32.1435 1.54926C30.9204 1.0744 29.5246 0.75064 27.4837 0.657108C25.4356 0.565975 24.7857 0.541992 19.5719 0.541992H19.5791H19.5767ZM17.8571 4.00028H19.5791C24.7017 4.00028 25.3085 4.01706 27.3302 4.1106C29.2009 4.19454 30.2177 4.50871 30.894 4.77012C31.7886 5.11786 32.4289 5.53516 33.1004 6.20667C33.7719 6.87818 34.1868 7.51612 34.5346 8.41307C34.7984 9.08698 35.1102 10.1038 35.1941 11.9745C35.2876 13.9962 35.3068 14.603 35.3068 19.7232C35.3068 24.8435 35.2876 25.4527 35.1941 27.4744C35.1102 29.345 34.796 30.3595 34.5346 31.0358C34.227 31.8689 33.736 32.6221 33.098 33.2398C32.4265 33.9113 31.7886 34.3262 30.8916 34.674C30.2201 34.9378 29.2033 35.2495 27.3302 35.3359C25.3085 35.427 24.7017 35.4486 19.5791 35.4486C14.4564 35.4486 13.8472 35.427 11.8255 35.3359C9.95487 35.2495 8.9404 34.9378 8.2641 34.674C7.4307 34.3668 6.67675 33.8767 6.0577 33.2398C5.41917 32.6211 4.92746 31.8672 4.61875 31.0334C4.35734 30.3595 4.04317 29.3426 3.95923 27.472C3.8681 25.4503 3.84891 24.8435 3.84891 19.7184C3.84891 14.5958 3.8681 13.9914 3.95923 11.9697C4.04557 10.099 4.35734 9.08218 4.62115 8.40587C4.96889 7.51132 5.38619 6.87099 6.0577 6.19948C6.72921 5.52797 7.36715 5.11307 8.2641 4.76532C8.9404 4.50151 9.95487 4.18974 11.8255 4.1034C13.5954 4.02186 14.2813 3.99788 17.8571 3.99548V4.00028ZM29.8196 7.18516C29.5173 7.18516 29.2179 7.24471 28.9386 7.36041C28.6592 7.47612 28.4054 7.6457 28.1916 7.8595C27.9778 8.07329 27.8082 8.32709 27.6925 8.60642C27.5768 8.88575 27.5173 9.18514 27.5173 9.48748C27.5173 9.78983 27.5768 10.0892 27.6925 10.3685C27.8082 10.6479 27.9778 10.9017 28.1916 11.1155C28.4054 11.3293 28.6592 11.4989 28.9386 11.6146C29.2179 11.7303 29.5173 11.7898 29.8196 11.7898C30.4302 11.7898 31.0158 11.5472 31.4476 11.1155C31.8794 10.6837 32.1219 10.0981 32.1219 9.48748C32.1219 8.87687 31.8794 8.29126 31.4476 7.8595C31.0158 7.42773 30.4302 7.18516 29.8196 7.18516ZM19.5791 9.876C18.2722 9.85561 16.9743 10.0954 15.761 10.5814C14.5477 11.0674 13.4432 11.79 12.5118 12.707C11.5804 13.6239 10.8407 14.717 10.3358 15.9226C9.83092 17.1282 9.57091 18.4222 9.57091 19.7292C9.57091 21.0363 9.83092 22.3303 10.3358 23.5358C10.8407 24.7414 11.5804 25.8345 12.5118 26.7515C13.4432 27.6685 14.5477 28.391 15.761 28.877C16.9743 29.3631 18.2722 29.6029 19.5791 29.5825C22.1657 29.5421 24.6327 28.4863 26.4476 26.6428C28.2625 24.7994 29.2798 22.3162 29.2798 19.7292C29.2798 17.1423 28.2625 14.6591 26.4476 12.8157C24.6327 10.9722 22.1657 9.91636 19.5791 9.876ZM19.5791 13.3319C21.2754 13.3319 22.9023 14.0058 24.1018 15.2053C25.3013 16.4048 25.9752 18.0317 25.9752 19.728C25.9752 21.4244 25.3013 23.0513 24.1018 24.2508C22.9023 25.4503 21.2754 26.1242 19.5791 26.1242C17.8827 26.1242 16.2558 25.4503 15.0563 24.2508C13.8568 23.0513 13.1829 21.4244 13.1829 19.728C13.1829 18.0317 13.8568 16.4048 15.0563 15.2053C16.2558 14.0058 17.8827 13.3319 19.5791 13.3319Z" fill="white"/>
                </svg> 
               </a>

               <a href={facebook_url} target="_blank" rel="noopener noreferrer" onClick={handleIconClick}>
                <svg width="29" height="20" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1rem' }}>
                <path d="M38.7627 19.9442C38.7627 9.28286 30.1732 0.640625 19.5791 0.640625C8.9801 0.643023 0.390625 9.28286 0.390625 19.9466C0.390625 29.5792 7.40704 37.5643 16.5768 39.0127V25.5242H11.709V19.9466H16.5816V15.6902C16.5816 10.8535 19.4472 8.1822 23.8282 8.1822C25.9289 8.1822 28.123 8.55867 28.123 8.55867V13.3066H25.7034C23.3223 13.3066 22.5789 14.7958 22.5789 16.3233V19.9442H27.8976L27.0487 25.5218H22.5765V39.0103C31.7463 37.5619 38.7627 29.5768 38.7627 19.9442Z" fill="white"/>
                </svg> 
                </a>
               
                </div>

          <div className="lg:space-y-3 space-y-1 text-white text-xs lg:text-base mt-2">
            <div>{name}</div>
            <div>Director and Producer</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpeakerCard;

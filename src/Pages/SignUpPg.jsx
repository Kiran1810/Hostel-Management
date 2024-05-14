import React from "react";
import Signup from "../Components/SignUp/SignUp";
import image from "../Assets/hostel.jpg";

function SignupPg() {
  const flagStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  return (
    <div className="relative border-b rounded-b-[2.5rem] overflow-hidden h-screen">
      <div className="flex flex-row h-full">
       
        <div className="w-full md:w-1/2 p-8">
          <Signup />
        </div>
    
        <div className="hidden md:block w-1/2" style={flagStyle}></div>
      </div>
    </div>
  );
}

export default SignupPg;

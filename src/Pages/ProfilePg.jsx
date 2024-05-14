import React from "react";
import Profile from "../Components/Profile/Profile";
import ProfileImg from "../Assets/mess.jpg";

function ProfilePg() {
    const flagStyle = {
        backgroundImage: `url(${ProfileImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
    };

    return (
        <div className="relative border-b rounded-b-[2.5rem] overflow-hidden   h-screen">
            <div className="flex flex-row h-full">
                <div className="w-full md:w-1/2 p-8">
                    <Profile />
                </div>

                <div className="hidden md:block w-2/3" style={flagStyle}></div>
            </div>
        </div>
    );
}

export default ProfilePg;

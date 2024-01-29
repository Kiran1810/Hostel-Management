import React from "react";
import personImage from "../Assets/person.png";

function AboutUsPage() {
    return (
        <div className="flex flex-col bg-black ">
            <div className="flex flex-col-reverse lg:flex-row  ml-20 mr-20 ">
                <div className="text-white place-items-center ">
                    <div className="font-Play text-white text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r  bg-clip-text   lg:bg-clip-text  lg:font-bold lg:text-6xl">
                        E-Summit-
                    </div>
                    <div className="font-Play text-blue-300 text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r from-blue-300 via-blue-800 to-blue-800 bg-clip-text text-transparent   lg:text-transparent lg:bg-gradient-to-r lg:from-blue-300 lg:to-blue-800 lg:bg-clip-text lg:font-playfair lg:font-bold lg:text-6xl">
                        Virtual Entrepreneurship Symposium
                    </div>
                    <div className="lg:pt-8 pt-4 lg:w-[600px] font-Roboto lg:text-3xl text-xs">
                        In the vast constellation of college festivals, where
                        cultures collide and technologies transcend, a beacon of
                        entrepreneurial spirit shines - the E-Summit. we embark
                        on a poetic journey, where young minds converge to weave
                        the fabric of change. Each note resonates with the
                        heartbeat of innovation in this symphony of creativity
                        and courage. Let us traverse the pathways of
                        imagination, where challenges become stepping stones and
                        ideas blossom into realities.
                    </div>
                </div>
                <div className=" ">
                    <img
                        src={personImage}
                        alt="personImage"
                        className=" object-contain ml-10 p-5 lg:w-[600px] lg:h-[521px]"
                    />
                </div>
            </div>
            <div className="flex flex-row  text-white justify-center lg:space-x-52 space-x-6 ">
                <div>
                    <div className="border-b-2 border-blue-500 py-2 lg:text-4xl text-2xl font-Rocker">
                        10+
                    </div>
                    <div className="py-1 ">Speakers</div>
                </div>
                <div>
                    <div className="border-b-2 border-blue-500 py-2 lg:text-4xl text-2xl font-Rocker">
                        10+
                    </div>
                    <div className="py-1 text-center ">Cities</div>
                </div>
                <div>
                    <div className="border-b-2 border-blue-500 py-2 lg:text-4xl text-2xl font-Rocker ">
                        10+
                    </div>
                    <div className="py-1 text-center">Events</div>
                </div>
                <div className="">
                    <div className="border-b-2 border-blue-500 py-2 lg:text-4xl text-2xl font-Rocker">
                        100+
                    </div>
                    <div className="py-1 text-center">Students</div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;

import React, { useState, useEffect } from "react";
 import backgroundImageImage from "../Assets/pinterest.jpg";

import Navbar from "../Components/Navbar/Navlist";

import Footer from "../Components/Footer/Footer";




function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const visitedBefore = localStorage.getItem("visitedHomePage");

        if (visitedBefore) {
            setLoading(false);
        } else {
            const timer = setTimeout(() => {
                setLoading(false);
                localStorage.setItem("visitedHomePage", "true");
            }, 7000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {loading ? (
                <div className="absolute w-full h-full flex justify-center items-center bg-white opacity-75 z-[100]">
                    {/* <ClipLoader color="#123abc" loading={loading} size={50} /> */}
                </div>
            ) : (
                <>
                    {/* <div className="absolute w-full h-full">
                        <SparklesCore />
                    </div> */}
                    <div className="relative">
                        <div
                            className="flex flex-col items-center overflow-hidden lg:h-screen bg-cover bg-center w-full h-full z-[10] "
                             style={{
                                 backgroundImage: `url(${backgroundImageImage})`,
                            }}
                        >
                            <div className="z-[10] w-full">
                                <Navbar />
                            </div>

                           
                            <div className=" mt-[20%] lg:mt-[8%]">
                                
                                <div className="font-k2d tracking-widest py-2 lg:font-black font-extrabold mb-[0.5rem] lg:my-[2.5rem] text-[2.0rem]  text-gray-900 text-shadow lg:text-[5rem]  text-4xl">
                                  Hostel Management
                                </div>
                                <div className="font-k2d tracking-widest text-center py-2 lg:font-black font-extrabold mb-[0.5rem] lg:my-[2.5rem] text-[2.0rem]  text-gray-900 text-shadow lg:text-[5rem]  text-4xl">
                                  System
                                </div>
                            </div>
                            
                            

                            
                        
                        </div>
                    </div>
                

                    <div className="bg-black py-14">
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
}

export default HomePage;

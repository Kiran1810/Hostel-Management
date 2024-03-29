import React from "react";
import { useState, useEffect } from "react";
import Images from "../Components/Images/Images";
import SponsorImage from "../Assets/SponsorPg.png";
import axios from "axios";
import Investor from "../Components/Images/Investor";

function Sponsors() {
    const [sponser, setSponser] = useState([]);
    const [investor, setInvestor] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://e-cell-backend2k24-tppt.onrender.com/esummit/sponsor/`
            )
            .then(
                (response) => (
                    setSponser(response.data), console.log("response", response)
                )
            );
    }, []);
    useEffect(() => {
        try {
            axios
                .get(
                    `https://e-cell-backend2k24-tppt.onrender.com/esummit/investor/`
                )
                .then((response) => setInvestor(response.data));
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="flex flex-col pb-24  background ">
            <div className="flex flex-row-reverse">
                <img
                    src={SponsorImage}
                    className="lg:w-80 w-24 lg:absolute lg:top-[3570px] "
                />
            </div>
            <div className=" flex flex-col lg:gap-y-20 gap-y-9 lg:ml-10 ml-4 mr-10">
                <div className="font-Play flex justify-center text-blue-300 text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r from-blue-300 via-blue-800 to-blue-800 bg-clip-text text-transparent   lg:text-transparent lg:bg-gradient-to-r lg:from-blue-300 lg:to-blue-800 lg:bg-clip-text lg:font-playfair lg:font-bold lg:text-6xl">
                    Our Sponsors
                </div>
                {/* <div className="font-Play flex justify-center text-blue-300 text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r from-blue-300 via-blue-800 to-blue-800 bg-clip-text text-transparent   lg:text-transparent lg:bg-gradient-to-r lg:from-blue-300 lg:to-blue-800 lg:bg-clip-text lg:font-playfair lg:font-bold lg:text-6xl">
                    To be revealed soon
                </div> */}
                <div className=" items-start lg:gap-x-14 gap-x-1 grid grid-cols-3 sm:gap-y-4 lg:grid-cols-5">
                    {sponser &&
                        sponser.map((sponser, index) => (
                            <Images key={index} {...sponser} />
                        ))}
                </div>
                <div className="font-Play flex justify-center text-blue-300 text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r from-blue-300 via-blue-800 to-blue-800 bg-clip-text text-transparent   lg:text-transparent lg:bg-gradient-to-r lg:from-blue-300 lg:to-blue-800 lg:bg-clip-text lg:font-playfair lg:font-bold lg:text-6xl">
                    Our Invester
                </div>
                {/* <div className="font-Play flex justify-center text-blue-300 text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r from-blue-300 via-blue-800 to-blue-800 bg-clip-text text-transparent   lg:text-transparent lg:bg-gradient-to-r lg:from-blue-300 lg:to-blue-800 lg:bg-clip-text lg:font-playfair lg:font-bold lg:text-6xl">
                    To be revealed soon
                </div> */}
                <div className=" items-start lg:gap-x-14 gap-x-1 grid grid-cols-3 sm:gap-y-4 lg:grid-cols-5 space-y-3">
                    {investor &&
                        investor.map((investor, index) => (
                            <Investor key={index} {...investor} />
                        ))}
                </div>
            </div>
        </div>
    );
}
export default Sponsors;

import React, { useEffect, useState } from "react";
import Manager from "../Components/Images/ManagerImage";
import SecondYear from "../Components/Images/SecondYear";
import ThirdYear from "../Components/Images/ThirdYear";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navlist";
import axios from "axios";
import ClipLoader from "react-spinners/BounceLoader";

function TeamPg() {
    const [detail, setDetail] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://e-cell-backend2k24-tppt.onrender.com/esummit/team/`)
            .then((response) => {
                setDetail(response.data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.log(error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

    console.log(detail, "the detail of the user");

    return (
        <>
            {loading ? (
                <div className="absolute w-full h-full flex justify-center items-center bg-white opacity-75 z-[100]">
                    <ClipLoader color="#123abc" loading={loading} size={50} />
                </div>
            ) : (
                <>
                    <div className="bg-black">
                        <Navbar />
                    </div>
                    <div className="bg-black">
                        <div className="flex flex-col pt-16 ml-10 mr-10">
                            <div className=" flex flex-col gap-y-24">
                                <div className="text-center font-bold tracking-widest text-6xl sponsors">
                                    MEET OUR TEAM
                                </div>
                                <div className=" items-start gap-x-14 gap-y-14 grid sm:grid-col-2 lg:grid-cols-3">
                                    {detail &&
                                        detail
                                            .filter((item) => item.year === "4")
                                            .map((event, index) => (
                                                <Manager
                                                    key={index}
                                                    {...event}
                                                />
                                            ))}
                                </div>
                                <div className=" items-start gap-x-14  gap-y-14 grid sm:grid-cols-2 lg:grid-cols-4">
                                    {detail &&
                                        detail
                                            .filter((item) => item.year === "3")
                                            .map((event, index) => (
                                                <ThirdYear
                                                    key={index}
                                                    {...event}
                                                />
                                            ))}
                                </div>
                                <div className=" items-start gap-x-14 gap-y-14 grid sm:grid-cols-2 lg:grid-cols-5">
                                    {detail &&
                                        detail
                                            .filter((item) => item.year === "2")
                                            .map((event, index) => (
                                                <SecondYear
                                                    key={index}
                                                    {...event}
                                                />
                                            ))}
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
}

export default TeamPg;

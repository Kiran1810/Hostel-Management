import { Typography } from "@material-tailwind/react";
import React from "react";


const LINKS = [
   
    {
        title: "LINKS",
        items: ["HOME","BOOKING"],
        slug: ["/","/HostelRoomBooking"],
    },
    {
        title: "CONTACT",
        items: [
            "📍 STUDENT ACTIVITY CENTER, NIT",
            "HIMACHAL PRADESH 177005",
            "📧 CONTACT",
        ],
    },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="relative w-full text-gray-400 mr-3">
            <div className="mx-auto w-full lg:px-8 px-2 border-t-2 border-blue-gray-50 pt-4">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <Typography
                        variant="h5"
                        className="lg:mt-6 lg:pl-20 ml-2 text-gray-100 items-center flex justify-between lg:justify-start"
                    >
                        
                        <h1 className="w-48 lg:text-xl text-sm ml-4 font-serif">
                            THE
                            <br className="lg:hidden" />
                            <span className="hidden lg:block">
                                {" "}
                                HOSTEL MANAGEMENT SYSTEM{" "}
                            </span>
                            <br />
                                                  
                        </h1>
                    </Typography>
                    <div className="grid grid-cols-3 text-md font-kelly mt-4 justify-between gap-4">
                        {LINKS.map(({ title, items, slug }) => (
                            <ul key={title}>
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="mb-3 font-medium "
                                >
                                    {title}
                                </Typography>
                                {items.map((link, index) => (
                                    <div className="my-4">
                                        <li key={link}>
                                            <Typography
                                                variant="small"
                                                as="a"
                                                href={slug && slug[index]}
                                                color="white"
                                                className="lg:font-normal  transition-colors hover:text-gray-400"
                                            >
                                                {link}
                                            </Typography>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                      
                       
                    </div>
        </footer>
    );
};

export default Footer;

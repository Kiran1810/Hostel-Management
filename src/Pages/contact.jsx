import React from "react";
import QueryContactPage from "./queryPage";
import ContactUs from "../Assets/contactus.png";
import Call from "../Assets/call.svg";
import location from "../Assets/location.svg";

function ContactUsPage() {
    return (
        <div
            className="overflow-hidden bg-cover bg-center w-full "
            style={{ backgroundImage: `url(${ContactUs})` }}
        >
            <div className="grid lg:grid-cols-2 grid-row-2 mt-11 p-12">
                <div className="space-y-11">
                    <div className="text-2xl lg:text-6xl font-semibold font-Playfair ">
                        Contact Us
                    </div>
                    <div className="font-extrabold lg:text-5xl text-xl font-Playfair">
                        For Excellent Proformance we focus on Critical
                    </div>
                    <div className="lg:text-2xl text-xs font-normal font-Gelasio">
                        Whether you have questions,or ideas,or just want to
                        connect,our Entrepreneurship Cell team is here for you.
                        Do you have questions or feedback? We'd love to hear
                        from you!
                    </div>
                    <div className="location lg:w-[473px] lg:h-[119px] w-[273px] h-[80px] flex flex-row space-x-11 items-center px-3">
                        <div>
                            <img src={location} alt="img" />
                        </div>
                        <div className="flex flex-col lg:text-2xl text-lg font-Playfair ">
                            <div>NIT Hamirpur</div>
                            <div> Hamirpur, Himachal Pradesh </div>
                        </div>
                    </div>
                    <div className="location lg:w-[473px] lg:h-[119px] w-[273px] h-[80px] flex flex-row space-x-11  items-center px-3">
                        <div>
                            <img src={Call} alt="img" />
                        </div>
                        <div className="flex flex-col lg:text-2xl text-xl font-Playfair">
                            <div>Call Us</div>
                            <div>8690625705</div>
                        </div>
                    </div>
                </div>
                <div className="mt-24">
                    <QueryContactPage />
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;

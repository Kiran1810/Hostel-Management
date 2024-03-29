import React, { useState, useEffect } from "react";
import CardIcon from "../../Assets/card_icon.svg";
import Loyalty from "../../Assets/Loyalty.svg";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import Money from "../../Assets/money2.png";
import axios from "axios";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function DialogDefault({
    id,
    isOpen,
    onClose,
    name,
    description,
    prize,
    image,
    event_type,
}) {
    const user = useSelector((state) => state.auth.userData);
    const navigate = useNavigate();
    const [upload, setUpload] = useState(false);
    const [isRegisterd, setIsRegistered] = useState(false);
    const [login, setLogin] = useState(true);

    useEffect(() => {
        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };
        if (!user) {
            setLogin(false);
        }

        if (user && user.id) {
            axios
                .get(
                    `https://e-cell-backend2k24-tppt.onrender.com/esummit/update/user/${user.id}/`,
                    {
                        headers,
                    }
                )
                .then(
                    (res) =>
                        res.data.registered_events.includes(id) &&
                        setIsRegistered(true)
                );
        }
    }, [isRegisterd]);

    async function handleLogin() {
        const authToken = Cookies.get("myToken");

        const headers = {
            Authorization: `Bearer ${authToken}`,
        };

        try {
            const response = await axios.get(
                `https://e-cell-backend2k24-tppt.onrender.com/esummit/update/user/${user.id}/`,
                {
                    headers,
                }
            );

            const currentUserData = response.data;

            if (!currentUserData.registered_events.includes(id)) {
                const updatedRegisteredEvents = [
                    ...currentUserData.registered_events,
                    id,
                ];

                await axios.patch(
                    `https://e-cell-backend2k24-tppt.onrender.com/esummit/update/user/${user.id}/`,
                    {
                        registered_events: updatedRegisteredEvents,
                    },
                    { headers }
                );
                setUpload(false);
                onClose();
            } else {
                // setIsRegistered(true)

                console.warn("Event ID is already registered for this user.");
                setUpload(false);
            }
        } catch (error) {
            console.error("Error updating registered events:", error);
            setUpload(false);
        }
    }

    return (
        <Dialog
            open={isOpen}
            type
            size="xl"
            handler={onClose}
            className="flex flex-col lg:w-[1014.691px] lg:h-auto items-center text-white overflow-y-auto space-y-5 over w-44 h-auto"
        >
            <img
                src={image}
                alt="cardIcon"
                className=" h-10 w-10  lg:h-44 lg:w-44  mt-5 rounded-lg"
            />

            <DialogHeader className="lg:text-5xl text-white text-base font-Rocker lg:p-4 p-0 ">
                {name}
            </DialogHeader>
            <DialogBody className="ml-11 mr-11 lg:mb-5 mb-2 lg:p-4 p-0 lg:text-2xl items-center text-center text-xs text-Play">
                {description}
            </DialogBody>
            <DialogFooter className="lg:w-full flex flex-row justify-around">
                <div className="flex flex-row items-center mr-4 gap-4">
                    <img
                        src={Loyalty}
                        alt="loyalty"
                        className="mr-2 lg:14 lg:h-14 w-10 h-10 "
                    />
                    <div className="font-Play lg:text-3xl ">{event_type}</div>
                    <div className="flex flex-row items-center">
                        <img
                            src={Money}
                            alt="loyalty"
                            className="mr-2 lg:11 lg:h-11 w-10 h-10 font-Play"
                        />
                        <div className="font-Play lg:text-3xl ">{prize}</div>
                    </div>
                </div>

                <div>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleLogin}
                        className="lg:px-6 px-2 lg:mt-0  lg:ml-0 "
                    >
                        {user ? (
                            isRegisterd ? (
                                <span>Registered</span>
                            ) : (
                                <span>
                                    {upload ? "Registering..." : "Register"}
                                </span>
                            )
                        ) : (
                            <span>
                                <a href="/Login">Please Login</a>
                            </span>
                        )}
                    </Button>
                </div>
            </DialogFooter>
        </Dialog>
    );
}

const cards = ["card", "card2", "card3", "card4"];

function EventCard({
    name,
    event_date,
    description,
    id,
    prize,
    event_type,
    image,
}) {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isDialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    const activeCardClass = cards[activeCardIndex];

    const handleCardClick = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <>
            <div
                className={`card ${activeCardClass} w-32 h-36 lg:w-80 lg:h-80 text-white flex flex-col   items-center justify-center text-center space-y-3  `}
                onClick={handleCardClick}
            >
                <img
                    src={image}
                    alt="cardIcon"
                    className="h-7 w-7 lg:h-20 lg:w-20 mt-5 rounded"
                />
                <div className="ml-8 mr-8 mt-2 pb-3 lg:p-3 space-y-4 text-xs lg:text-3xl">
                    <div className="font-Play">{name}</div>
                    <div className="font-Play lg:text-2xl text-xs">
                        Coming In
                    </div>
                    <div className="font-Rocker">{event_date}</div>
                </div>
            </div>

            <DialogDefault
                name={name}
                description={description}
                id={id}
                prize={prize}
                image={image}
                event_type={event_type}
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
            />
        </>
    );
}

export default EventCard;

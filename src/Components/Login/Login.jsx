import React, { useState } from "react";
import { Checkbox, Button, Input } from "@material-tailwind/react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";



function Login() {
    const [userData, setUserData] = useState({
        roomId: "",
        studentId: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `http://localhost:3000/api/booking`,
                userData
            );
            console.log(response);
           
        } catch (error) {
            console.log(error);
            
        }
    };

    
    return (
        <div className="flex flex-col  h-screen justify-center items-start px-4 space-y-8">
            <div className="font-bold font-K2D text-7xl">
                Hello There, Welcome back
            </div>
            <div className="font-bold font-K2D text-7xl">Booking</div>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-row space-x-6">
                    <div className="text-slate-500">
                        <label className="label">RoomId</label>
                        <Input
                            type="roomId"
                            className="text"
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    roomId: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="text-slate-500">
                    <label className="label">StudentId</label>
                    <Input
                        type="studentId"
                        className="text"
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                studentId: e.target.value,
                            })
                        }
                    />
                </div>
               

                <Button
                    className=" mt-6 bg-blue-950 text-white rounded-lg signUp"
                    fullWidth
                    color="white"
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Submit                </Button>

                
            </form>
        </div>
    );
}

export default Login;

import React, { useState } from "react";
import { Checkbox, Button, Input } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { login } from "../../React-Redux/Auth-Slice";
import { useDispatch } from "react-redux";

function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `https://e-cell-backend2k24.onrender.com/esummit/login/`,
                userData
            );
            console.log(response);
            Cookies.set("myToken", response.data.token.access, { expires: 30 });
            dispatch(login(response));
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col  h-screen justify-center items-start px-4 space-y-8">
            <div className="font-bold font-K2D text-7xl">
                Hello There, Welcome back
            </div>
            <div className="font-bold font-K2D text-7xl">Login</div>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-row space-x-6">
                    <div className="text-slate-500">
                        <label className="label">Email</label>
                        <Input
                            type="email"
                            className="text"
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="text-slate-500">
                    <label className="label">Password</label>
                    <Input
                        type="password"
                        className="text"
                        labelProps={{
                            className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                password: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex items-center">
                    <span className="ml-2 label">Forget your Password?</span>
                </div>

                <Button
                    className=" mt-6 bg-blue-950 text-white rounded-lg signUp"
                    fullWidth
                    color="white"
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Log In
                </Button>
            </form>
        </div>
    );
}

export default Login;
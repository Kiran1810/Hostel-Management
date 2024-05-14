import React from "react";
import axios from "axios";
import { useState } from "react";
import { Checkbox, Button, Input } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
    const {id}=useParams()
    console.log("the id of the room is",id)
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        phoneNumber: ""
        
    });
    const Navigate=useNavigate()

 const handleFormSubmit=async (e)=>{
    e.preventDefault();
    try{
    const response= await axios.post(`http://localhost:3000/api/student`,userData)
    console.log("information added",response.data.student_id)
    const booking=await axios.post(`http://localhost:3000/api/booking`,{roomId:id,studentId:response.data.student_id})
    console.log("the booking is",booking)
   toast.success("successfully booked the room");
   setTimeout(() => {
    Navigate("/");
}, 2000); 

 }
 catch(error){
    console.log("some error in adding the information",error)
 }

  
}
    return (
        <div className="flex flex-col  h-screen justify-center items-start px-4 space-y-8">
            <div className="font-medium text-5xl">
                <h1>User Information</h1>
            </div>
            <form
                onSubmit={handleFormSubmit}
                className="lg:space-y-0 space-y-3"
            >
                <div className="label ">
                    <label>Name</label>
                    <Input
                        type="Name"
                        className="text !border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                            className: "hidden text",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                name: e.target.value,
                            })
                        }
                    />
                </div>

                <div className="label ">
                    <label>Email</label>
                    <Input
                        type="email"
                        className="text !border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                            className: "hidden text",
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
                <div className="label">
                    <label>phoneNumber</label>
                    <Input
                        type="number"
                        className=" text !border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                            className: "hidden text",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                phoneNumber: e.target.value,
                            })
                        }
                    />
                </div>
                

                <div className="flex items-center">
                    <Checkbox defaultChecked />
                    <span className="ml-2">
                        I've read and agree with the Terms and Service and
                        Privacy Policy
                    </span>
                </div>

                <Button
                    className=" mt-6 bg-blue-950 text-white rounded-lg signUp"
                    fullWidth
                    color="white"
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Sumbit
                </Button>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />

               
            </form>
        </div>
    );
}

export default Signup;

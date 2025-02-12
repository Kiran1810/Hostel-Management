import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/BounceLoader";

function  Login() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        phonenumber: ""
    });

    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.get(`https://hostelmanagement-cpky.onrender.com/api/student/email/${userData.email}`,);

           const studentId=response.data.student_id;
           if(!studentId){
            toast.error("book your room");
            setTimeout(()=>{navigate(`/HostelRoomBooking`)},2000)
            

           }else{
            navigate(`/userProfile/${studentId}`)
            console.log("the responce is ",response)
           }
       
           
        } catch (error) {
            console.log("Some error in adding the information", error);
            toast.error("Error while booking the room");
        } finally {
            setLoading(false);
           
        }
    };

    return (
        <> {loading? 
            <div className="absolute w-full h-full flex justify-center items-center bg-white opacity-75 z-[100]">
                    <ClipLoader color="#123abc" loading={loading} size={50} />
                </div>:
            <div className="flex flex-col h-screen justify-center items-start px-4 space-y-8">
            <div className="font-medium text-5xl">
                <h1>My Booking</h1>
            </div>
            <form onSubmit={handleFormSubmit} className="lg:space-y-0 space-y-3">
                
                <div className="label">
                    <label>Email</label>
                    <Input
                        type="email"
                        className="text !border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{ className: "hidden text" }}
                        containerProps={{ className: "min-w-[100px]" }}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                </div>
                <div className="label">
                    <label>PhoneNumber</label>
                    <Input
                        type="number"
                        className="text !border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{ className: "hidden text" }}
                        containerProps={{ className: "min-w-[100px]" }}
                        onChange={(e) => setUserData({ ...userData, phonenumber: e.target.value })}
                    />
                </div>
                <Button
                    className=" mt-6 bg-blue-950 text-white rounded-lg signUp"
                    fullWidth
                    color="white"
                    type="submit"
                    onClick={handleFormSubmit}
                    disabled={loading}
                >
                    {loading ? "Booking..." : "Submit"}
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
        </div>}</>
        
    );
}

export default Login;

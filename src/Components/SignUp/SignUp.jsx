import React from "react";
import axios from "axios"
import { useState, } from "react";
import { Checkbox ,Button,Input} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import {login} from "../../React-Redux/Auth-Slice"
import { useDispatch } from "react-redux";
function Signup(){
   const [userData,setUserData]=useState({
    email: "",
    name: "",
    password: "",
    password2: "",
    number:""
   });
   const navigate=useNavigate()
   const dispatch=useDispatch()
  const handleFormSubmit=async(e)=>{
    e.preventDefault()
    try{
         const response= await axios.post(
            `https://e-cell-backend2k24.onrender.com/esummit/register/`,userData
          )
          console.log(response)
          Cookies.set('mtToken',response.data.token.access,
          {expires:30})
          dispatch(login(response))
          navigate('/')

          

    }catch(error){
           console.log(error)
    }
  }
 

    return(
        <div className="flex flex-col  h-screen justify-center items-start px-4 space-y-8">
            <div className="font-medium text-5xl">
                <h1>Sign Up</h1>
            </div>
            <form onSubmit={handleFormSubmit}>
            <div className="flex flex-row space-x-6">
              <div className="text-slate-500">
                <label>Name</label>
                <Input
                    type="Name"
                    
                    className="!border !border-gray-300 rounded  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500  bg-gray-200 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                    className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                    onChange={(e)=>setUserData({
                        ...userData,
                        name:e.target.value
                    }
                     )}
                />
                 
              </div>
              <div className="text-slate-500">
              <label >Email</label>
              <Input
                    type="email"
                    
                    className="!border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                    className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                    onChange={(e)=>setUserData({
                        ...userData,
                        email:e.target.value
                    })}
                />
              </div>
            </div>
            <div className="text-slate-500">
            <label>Password</label>
            <Input
                    type="password"
                    
                    className="!border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                    className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                    onChange={(e)=>setUserData({
                        ...userData,
                        password:e.target.value
                    })}
                />
            </div> 
            <div className="text-slate-500">
            <label>Confirm Password</label>
            <Input
                    type="password"
                    
                    className="!border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                    className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                    onChange={(e)=>setUserData({
                        ...userData,
                        password2:e.target.value
                    })}
                />
            </div> 
            <div className="text-slate-500">
            <label>Contact No</label>
            <Input
                    type="number"
                    
                    className="!border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                    className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                    onChange={(e)=>setUserData({
                        ...userData,
                        number:e.target.value
                    })}
                />
            </div> 
            <div className="flex items-center">
                <Checkbox defaultChecked />
                <span className="ml-2">I've read and agree with the Terms and Service and Privacy Policy</span>
            </div>


            <Button
                        className=" mt-6 bg-blue-950 text-white rounded-lg"
                        fullWidth
                        color="white"
                        type="submit"
                        onClick={handleFormSubmit}
                    >
                        Sign Up
                    </Button>
          </form>
        </div>
    )
}

export default Signup
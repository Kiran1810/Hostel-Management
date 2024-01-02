import React from "react";
import {Button,Input} from "@material-tailwind/react";
import Id2Image from "../../Assets/Id2Image.png"
function Id(){
    return(
        <div className="flex flex-col  h-screen justify-center items-center px-4 space-y-8">
            <div className="items-center p-2">
            <img
            src={Id2Image}
            alt="Id2Image"
            className="object-contain p-4 "
          />
            </div>
            <div className="flex flex-row space-x-6">
              <div className="text-slate-500">
                <label>Contact Number</label>
                <Input
                    type="Name"
                    style={{ height: "45px", width:"700px" }}
                    className="!border !border-gray-300 rounded  text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500  bg-gray-200 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                    className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                />
                 
              </div>
            </div>
            <div className="text-slate-500">
            <label>Name of Institution</label>
            <Input
                    type="password"
                    style={{ height: "45px", width:"700px" }}
                    className="!border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                    className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                />
            </div> 
            <div className="text-slate-500">
            <label>Bio(upto 30 words)</label>
            <Input
                    type="password"
                    style={{ height: "80px", width:"700px" }}
                    className="!border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                    className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                />
            </div> 
            <Button
                        className=" mt-6 bg-blue-950 text-white rounded-lg"
                        fullWidth
                        color="white"
                        type="submit"
                    >
                        Sign Up
                    </Button>

        </div>
    )
}

export default Id
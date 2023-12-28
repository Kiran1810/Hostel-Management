import React from "react";
import { Checkbox ,Button,Input} from "@material-tailwind/react";
function Login(){
    return(
        <div className="flex flex-col  h-screen justify-center items-start px-4 space-y-8">
            <div className="font-medium text-5xl">
                <h1>Log In</h1>
            </div>
            <div className="flex flex-row space-x-6">
             
              <div className="text-slate-500">
              <label >Email</label>
              <Input
                    type="email"
                    
                    className="!border !border-gray-300 rounded bg-gray-200 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                    className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
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
                />
            </div> 
            <div className="flex items-center">
               
                <span className="ml-2">Forget your Password?</span>
            </div>


            <Button
                        className=" mt-6 bg-blue-950 text-white rounded-lg"
                        fullWidth
                        color="white"
                        type="submit"
                    >
                        Log In
                    </Button>

        </div>
    )
}

export default Login
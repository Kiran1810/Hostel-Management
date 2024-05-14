import React, { useState, useEffect } from "react";
import { Checkbox, Button, Input } from "@material-tailwind/react";
import axios from "axios";

function Login() {
    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8); // Change the number of items per page as needed

    useEffect(() => {
        axios.get(`https://hostelmanagement-cpky.onrender.com/api/booking`)
            .then((response) => {
                setUserData(response.data);
                console.log(response.data, "response data");
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    // Calculate indexes for current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div className="container pt-12">
            <div className="font-Play pt-4 text-center text-gray-900 text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:font-bold lg:text-6xl">
                General Profile
            </div>
            <div className='pt-10'>
                <table className="w-full">
                    <tr>
                        <th className='text-gray-900 text-1xl bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:font-bold lg:text-4xl'>Room No</th>
                        <th className='text-gray-900 text-1xl font-bold leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:font-bold lg:text-4xl'>Student Name</th>
                    </tr>
                    {currentItems.map((booking, index) => (
                        <tr key={index}>
                            <td className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:text-2xl'>{booking.roomid.roomno}</td>
                            <td className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl  leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text  lg:text-2xl'>{booking.studentid.name}</td>
                        </tr>
                    ))}
                </table>
                <div className="flex justify-between mt-4">
                    <Button onClick={prevPage} disabled={currentPage === 1}>Previous</Button>
                    <Button onClick={nextPage} disabled={indexOfLastItem >= userData.length}>Next</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;


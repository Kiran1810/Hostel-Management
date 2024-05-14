
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile({ id }) {
    const [userData, setUserData] = useState({
        roomid: {
            roomno: '',
            capacity: '',
            status: ''
        },
        studentid: {
            name: '',
            email: '',
            phonenumber: ''
        }
    });

    useEffect(() => {
        axios.get(`https://hostelmanagement-cpky.onrender.com/api/booking/${id}`)
            .then((response) => {
                setUserData(response.data);
                console.log(response.data, "response in profile");
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, [id]);

    return (
        <div className="container pt-12">
            <div className="font-Play pt-4 text-center text-gray-900 text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:font-bold lg:text-6xl">
                User Profile
            </div>
            <div className='pt-10'>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className='text-gray-900 text-1xl bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:font-bold lg:text-4xl'>Property</th>
                            <th className='text-gray-900 text-1xl font-bold leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:font-bold lg:text-4xl'>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(userData.studentid).map(([key, value]) => (
                            <tr key={key}>
                                <td className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:text-2xl'>{key}</td>
                                <td className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:text-2xl'>{value}</td>
                            </tr>
                        ))}
                        {Object.entries(userData.roomid).map(([key, value]) => (
                            <tr key={key}>
                                <td className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:text-2xl'>{key}</td>
                                <td className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:text-2xl'>{value}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:text-2xl'>Registration ID</td>
                            <td className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:text-2xl'>{id}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserProfile;



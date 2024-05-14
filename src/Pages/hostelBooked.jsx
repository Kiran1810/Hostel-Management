import React, { useState, useEffect } from 'react';
import ContactUs from "../Assets/1.jpg";
import axios from 'axios';
import { Link } from 'react-router-dom';


function HostelRoomBooking() {
    const [rooms, setRooms] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3000/api/room`)
        .then((response)=>{
             setRooms(response.data.data)
            console.log(response,"response")
        })
       .catch((error)=>{
        console.log("error",error)
       })
    }, []);

    return (
        <div className="overflow-hidden bg-cover bg-center w-full" style={{ backgroundImage: `url(${ContactUs})` }}>
            <div className="container pt-12">
                <div className="font-Play pt-4 text-center text-gray-900 text-2xl font-bold leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:font-bold lg:text-6xl">
                    Room Booking
                </div>
                <div className='pt-10'>
                    <table className="w-full">
                        
                            <tr>
                                <th className=' text-gray-900 text-1xl  bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:font-bold lg:text-4xl'>Room No.</th>
                                <th  className=' text-gray-900 text-1xl font-bold leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:font-bold lg:text-4xl'>Status</th>
                                <th  className='text-gray-900 text-1xl font-bold leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text lg:font-bold lg:text-4xl'>Capacity</th>
                                
                            </tr>
                        
                       
                            {rooms.map((room, index) => (
                                <tr key={index}>
                                    <td  className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text  lg:text-2xl '>{room.roomNo}</td>
                                    <td className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl  leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text  lg:text-2xl'>{room.status}</td>
                                    <td className='font-bold font-Play pt-4 text-center text-gray-900 text-1xl  leading-normal tracking-wider bg-gradient-to-r bg-clip-text lg:bg-clip-text  lg:text-2xl'>{room.capacity}</td>
                                    <td>
                    {room.status === 'available' ? (
                      <Link to={`/signup/${room.room_id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
                      </Link>
                    ) : (
                      <button className="bg-green-500 text-white font-bold py-2 px-4 rounded disabled">Booked</button>
                    )}
                  </td>
                                </tr>
                            ))}
                           
                    
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HostelRoomBooking;

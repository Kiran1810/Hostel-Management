import React from "react";
// import LogoutBtn from "./Logoutbtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



function Navbar() {
    const authStatus = useSelector((state) => state.auth.status);
    //   const user = useSelector((state) => state.auth.userData)

    const navigate = useNavigate();

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
    
       
        {
            name: "Booking",
            slug: "/HostelRoomBooking",
            active: true,
        },
    
      
    ];

    return (
        <header className="py-3 shadow bg-transparent">
            {/* <Container> */}
            <nav className="flex">
                
                <ul className="flex  lg:ml-auto ml-auto">
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                {/* <button
                                    onClick={() => navigate(item.slug)}
                                    className="inline-bock lg:px-6 lg:py-2 px-2 py-2 lg:text-2xl text-xs duration-200 text-gray-900"
                                >
                                    {item.name}
                                </button> */}
                                <Link
                                    to={item.slug}
                                    className="inline-bock lg:px-6 lg:py-2 px-2 py-2 lg:text-2xl text-xs duration-200 text-gray-900"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ) : null
                    )}
                    {/* {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )} */}
                </ul>
            </nav>
            {/* </Container> */}
        </header>
    );
}

export default Navbar;

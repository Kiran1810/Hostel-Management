import React from "react";
import LogoutBtn from "./Logoutbtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../Assets/logo.png";

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
        // {
        //     name: "Scan",
        //     slug: "/scan",
        //     active: true,
        // },
        {
            name: "Our-Team",
            slug: "/Team",
            active: true,
        },
        {
            name: "My-Profile",
            slug: "/app",
            active: authStatus,
        },
        {
            name: "Login",
            slug: "/Login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/Signup",
            active: !authStatus,
        },
        //   {
        //       name: "Sponsors",
        //       slug: "/",
        //       active: authStatus,
        //   },
        //   {
        //       name: "Contact-Us",
        //       slug: "/",
        //       active: authStatus,
        //   },
    ];

    return (
        <header className="py-3 shadow bg-transparent">
            {/* <Container> */}
            <nav className="flex">
                <div className=" mr-2 lg:mr-4">
                    <Link to="/">
                        <img
                            src={LogoImage}
                            alt="LogoImage"
                            className="  ml-3 h-[42px] lg:h-[154px] lg:ml-8 absolute"
                        />
                    </Link>
                </div>
                <ul className="flex  lg:ml-auto ml-auto">
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className="inline-bock lg:px-6 lg:py-2 px-2 py-2 lg:text-2xl text-xs duration-200 text-white"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ) : null
                    )}
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </nav>
            {/* </Container> */}
        </header>
    );
}

export default Navbar;

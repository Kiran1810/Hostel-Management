import React from 'react'
import LogoutBtn from './Logoutbtn'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoImage from "../../Assets/logo.png"

function Navbar() {
  const authStatus = useSelector((state) => state.auth.status)
//   const user = useSelector((state) => state.auth.userData)
 
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
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
  ]


  return (
    <header className='py-3 shadow bg-black'>
      {/* <Container> */}
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
            <img
        src={LogoImage}
        alt="LogoImage"
        className="w-14 h-14 ml-8"
      />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 text-white'
                >{item.name}</button>
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
  )
}

export default Navbar
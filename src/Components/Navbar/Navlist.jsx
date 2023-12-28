import React from 'react'
import LogoutBtn from './Logoutbtn'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
      slug: "/",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/",
      active: !authStatus,
  },
  {
      name: "Sponsors",
      slug: "/",
      active: authStatus,
  },
  {
      name: "Contact-Us",
      slug: "/",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-black'>
      {/* <Container> */}
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              {/* <Logo width='70px'   /> */}

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
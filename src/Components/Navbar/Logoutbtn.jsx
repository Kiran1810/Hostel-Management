import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../React-Redux/Auth-Slice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
      dispatch(logout())
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 text-white lg:text-2xl text-xs'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
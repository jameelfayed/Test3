import React from 'react'
import CustomNavbar from '../component/dashbored/user/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function AuthLayot() {
  return (
  <>
   <CustomNavbar/>
   <Outlet/>
  </>
  
  )
}

export default AuthLayot
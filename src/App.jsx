import React from 'react'
import CustomNavbar from './assets/component/dashbored/user/navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayot from './assets/layout/AuthLayot';
import DashboardLayout from './assets/layout/DashboardLayout';
import Register from "./pages/dashboard/user/register/Register"
import Login from './pages/dashboard/user/login/Login';
import { ToastContainer } from 'react-toastify';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayot />,
      children: [
        {
          path: 'register',
          element: <Register/>,
        },
        {
          path: 'login',
          element: <Login/>,
        },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children:[

      ],
    },
  ]);
  return (
  <>
  <ToastContainer/>
  <RouterProvider router={router}/>

    </>
  )
}


export default App
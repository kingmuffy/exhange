import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
    <div>
      <h1 className="text-white">Hello World</h1>

      <div className="container mx-auto">
        <Outlet />
      </div>

      <ToastContainer />
    </div>
  )
}

export default App

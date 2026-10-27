import { useState } from 'react'
import Login from '../components/Auth/Login'
import Header from '../components/other/Header'
import EmployeeDashboard from '../components/Dashboard/EmployeeDashboard'
import AdminDashboard from '../components/Dashboard/AdminDashboard'

function App() {

  return (
    <>
    {/* <Login />  */}
    {/* <EmployeeDashboard /> */}
    <AdminDashboard />

    </>
  )
}

export default App

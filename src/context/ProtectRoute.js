import React from 'react'

import { useLocation, Navigate, Outlet } from "react-router-dom";



export const ProtectAdminRoute = ({children}) => {
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('signature')
    const userRole = localStorage.getItem('role')

      
    if(!isAuthenticated ||userRole ==="user" ||  userRole ==="vendor"){
        return (
            <Navigate to="/login" state={{from:location} }/>
        )
    }
    return children
}




export const ProtectCustomerRoute = ({children}) => {
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('signature')
    const userRole = localStorage.getItem('role')

      
    if(!isAuthenticated || userRole ==="ADMIN" ||  userRole ==="SUPER_ADMIN"){
        return (
            <Navigate to="/login" state={{from:location} }/>
        )
    }
    return children
}


export const RequireAdminAuth = () => {
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('signature')
    const userRole = localStorage.getItem('role')
  
    return (
      userRole === "ADMIN" || userRole === "SUPERADMIN"  &&  isAuthenticated ? 
        <Outlet /> : <Navigate to="/login" state={ { from: location } } />
    )
  }

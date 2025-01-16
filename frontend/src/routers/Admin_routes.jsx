import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Admin_routes = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/admin"></Navigate>
    }
    return children ? children : <Outlet />
}

export default Admin_routes

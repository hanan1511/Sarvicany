import { Outlet,useLocation } from 'react-router-dom';
import NavWork from '../NavBarWork/NavWork';
import React from 'react';
function Layout(){
    const location = useLocation();
    const isnotReg=!(location.pathname==='/'||location.pathname==='/serviceReg');
    return(
        <>
        {isnotReg && <NavWork/>}
        <Outlet/>
        </>
    );
}
export default Layout;
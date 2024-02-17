import { Outlet,useLocation } from 'react-router-dom';

import React from 'react';
import NavWork from '../NavBarWork/NavWork.jsx';
function Layout(){
    const location = useLocation();
    const isnotReg=!(location.pathname==='/workerReg'||location.pathname==='/serviceReg');
    return(
        <>
        {isnotReg && <NavWork/>}
        <Outlet/>
        </>
    );
}
export default Layout;
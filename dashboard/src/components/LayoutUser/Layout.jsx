// Layout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout() {
  const location = useLocation();
  const isnotReg = (location.pathname !== '/customer')||(location.pathname !== '/customer/registerCustomer')||(location.pathname !== '/customer/loginCustomer');

  return (
    <>
      {isnotReg && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
}

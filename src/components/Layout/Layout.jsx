// Layout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <>
      {isHomePage && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
}

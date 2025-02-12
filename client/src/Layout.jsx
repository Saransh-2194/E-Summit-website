import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <ScrollToTop /> 
        <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

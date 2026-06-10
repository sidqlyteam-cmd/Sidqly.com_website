import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyLeadCTA from '../components/StickyLeadCTA';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-sidqly-ivory font-sans selection:bg-sidqly-green-soft selection:text-sidqly-green-deep">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <StickyLeadCTA />
    </div>
  );
};

export default MainLayout;

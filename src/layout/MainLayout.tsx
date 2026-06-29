import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIFooterStrip from '../components/ai/AIFooterStrip';
import StickyLeadCTA from '../components/StickyLeadCTA';

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-sidqly-ivory">
      <Navbar />
      <main className="flex-grow">
        {children || <Outlet />}
      </main>
      <Footer />
      <AIFooterStrip />
      <StickyLeadCTA />
    </div>
  );
};

export default MainLayout;

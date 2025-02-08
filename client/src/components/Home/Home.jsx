import React from 'react';
import { motion } from 'framer-motion';
import Events from '../Events/Events';
import Speakers from '../Speakers/Speakers';
import Sponsers from '../Sponsers/Sponsers';

export default function Home() {
  const headerStyle = {
    backgroundImage: "url('/home-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="header-section" style={headerStyle}>
        <div className="flex justify-center mb-12">
          <motion.img
            src="/E-summit’25.png"
            alt="Home"
            className="h-48 md:h-64 lg:h-80"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div id="home-content" className="mb-16">
          {/* Home page content */}
        </div>
      </div>
      <div id="events-content" className="mb-16">
        <Events />
      </div>
      <div id="speakers-content" className="mb-16">
        <Speakers />
      </div>
      <div id="sponsers-content" className="mb-16">
        <Sponsers />
      </div>
    </div>
  );
}

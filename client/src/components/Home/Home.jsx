import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Events from '../Events/Events';
import Speakers from '../Speakers/Speakers';
import Sponsors from '../Sponsors/Sponsors';

export default function Home() {
  const [animate, setAnimate] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative bg-pink-400 min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <div 
        className={`relative flex justify-center items-center h-full lg:mt-14.5 mt-8 bg-yellow-300 ${isMobile ? 'h-screen w-full' : ''}`}
        style={{
          backgroundImage: isMobile ? "url('/MobileBg.png')" : "url('/home-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Cloud image in center */}
        {!isMobile && (
          <motion.img
            src="/E-summit’25.png"
            alt="E-Summit 2025"
            className="w-[70%] md:w-[60%] lg:w-[90%] max-w-[500%] ml-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={animate ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
          />
        )}
      </div>

      {/* Infinite moving text */}
      <div className="relative w-full overflow-hidden bg-white py-1">
        <div className="marquee">
          <div className="marquee-content">
            <span className="text-2xl font-bold mx-4">INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 •</span>
            <span className="text-2xl font-bold mx-4">INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 •</span>
          </div>
        </div>
      </div>

      {/* Other sections */}
      <div id="events-content" className="mt-20 px-4 md:px-8 lg:px-16">
        <Events />
      </div>
      <div id="speakers-content" className="px-4 md:px-8 lg:px-16">
        <Speakers />
      </div>
      <div id="sponsers-content" className="px-4 md:px-8 lg:px-16">
        <Sponsors />
      </div>
    </div>
  );
}

// Add the following CSS to your global stylesheet or in a CSS-in-JS solution
// .marquee {
//   display: flex;
//   overflow: hidden;
//   white-space: nowrap;
// }

// .marquee-content {
//   display: inline-block;
//   will-change: transform;
//   animation: marquee 20s linear infinite;
//   animation-delay: 0s; /* Ensure the animation starts immediately */
// }

// @keyframes marquee {
//   0% { transform: translateX(100%); }
//   100% { transform: translateX(-100%); }
// }


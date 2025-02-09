import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Events from '../Events/Events';
import Speakers from '../Speakers/Speakers';
import Sponsers from '../Sponsers/Sponsers';

export default function Home() {
  const [animate, setAnimate] = useState(true);

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
    <div className="relative">
      <div 
        className="relative flex justify-center items-center h-full mt-14.5"
        style={{
          backgroundImage: "url('/home-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Cloud image in center */}
        <motion.img
          src="/E-summit’25.png"
          alt="E-Summit 2025"
          className="w-[70%] md:w-[60%] lg:w-[90%] max-w-[500%] ml-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={animate ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Other sections */}
      <div id="events-content" className="mt-50">
        <Events />
      </div>
      <div id="speakers-content">
        <Speakers />
      </div>
      <div id="sponsers-content">
        <Sponsers />
      </div>
    </div>
  );
}

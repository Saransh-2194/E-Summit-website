import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Events from "../Events/Events";
import PastSpeakers from "../Speakers/PastSpeakers"; // Import the PastSpeakers component
import AboutUs from "./About.jsx";
import Register from "../Register/Register.jsx";
import Takeaways from "../Takeaways/Takeaways.jsx";
import Faqs from "../Faqs/Faqs"; // Import the Faqs component
import Sponsers from "../Sponsers/Sponsers"; // Import the Sponsors component
import { motion } from "framer-motion";
import './Home.css';

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 3.5, // Sync animation with video end
      },
    }),
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 3.5, // Sync animation with video end
        duration: 1.5, // Make the fade-in slower
      },
    }),
  };

  const pageStyle = {
    backgroundImage: "url('/bg-1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    fontFamily: "'Comic Neue', cursive",
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden" style={pageStyle}>
      <div
        className={`relative flex justify-center items-center h-full lg:mt-14.5 mt-8 bg-yellow-300 ${
          isMobile ? "h-screen w-full" : ""
        }`}
        style={{
          backgroundImage: isMobile ? "url('/MobileBg.png')" : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop Video Background */}
        {!isMobile && (
          <video
            ref={videoRef}
            src="/websiteanimationvideo.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
          />
        )}

        {/* Overlay content (logos and text) */}
        {!isMobile && (
          <div className="absolute top-1/3.5 left-1/2 transform -translate-x-1/2 translate -translate-y-1/10 flex flex-col items-center text-center">
            {/* Logos container */}
            <div className="logos-container flex justify-center items-center gap-4 flex-wrap mr-10 md:mt-13 md:mr-6 lg:mt-28 xl:mt-16">
              <motion.img
                src="/juitlogo.png"
                alt="JUIT"
                className="h-16 md:h-8 lg:h-14"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={0}
              />
              <motion.img
                src="/iiclogo.png"
                alt="IIC"
                className="h-16 md:h-6 lg:h-10"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={1}
              />
              <motion.img
                src="/Edusphere.png"
                alt="Jaypee Edusphere"
                className="h-12 md:h-6 lg:h-10"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={2}
              />
              <motion.img
                src="/logo.png"
                alt="Esummit Logo"
                className="h-16 md:h-8 lg:h-12"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={3}
              />
              <motion.img
                src="/tiedc logo.png"
                alt="TIEDC Logo"
                className="h-16 md:h-8 lg:h-12"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={4}
              />
            </div>

            {/* Text container */}
            <div className="text-container flex flex-col items-center">
              <motion.img
                src="/Esummit.png"
                alt="E-SUMMIT’25"
                className="h-24 md:h-26 lg:h-34 xl:h-44 mx-auto ml-3"
                initial="hidden"
                animate="visible"
                variants={fadeInFromLeft}
                custom={5}
              />
              <motion.img
                src="/h2.png"
                alt="INNOVATION TO EXCEL"
                className="h-12 md:h-9 lg:h-12 xl:h-15 mx-auto my-[-4%]"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={6}
              />
              <motion.img
                src="/h3.png"
                alt="20-22 MARCH 2025"
                className="mt-4 h-10 md:h-10 lg:h-12  xl:h-15 mx-auto my-2"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={7}
              />
              <motion.button
                className="px-14 py-3 bg-blue-400 text-white font-bold rounded-lg shadow-lg  hover:underline hover:text-white transition duration-300"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                custom={8}
                onClick={handleRegisterClick}
              >
                Register Now
              </motion.button>
            </div>
          </div>
        )}
        {/* Mobile Video Background */}
        {isMobile && (
          <div className="absolute bottom-55 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center">
            <button
              className="px-5 py-0.5 bg-blue-400 text-black font-bold rounded-lg shadow-lg hover:bg-blue-400 hover:text-white transition duration-300"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={5}
              onClick={handleRegisterClick}
            >
              Register Now
            </button>
          </div>
        )}
      </div>

      {/* Infinite moving text */}
      <div className="marquee">
        <div className="marquee-content">
          <div className="text-2xl font-bold">
            INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 •
          </div>
          <div className="text-2xl font-bold">
            INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 • INNOVATE TO EXCEL • E-SUMMIT’25 •
          </div>
        </div>
      </div>

      {/* Other sections */}
      <div id="about-us-content" className="mt-10 px-4 md:px-8 lg:px-16 mb-10">
        <AboutUs />
      </div>
      <div id="events-content" className="mt-10 px-4 md:px-8 lg:px-16 mb-10">
        <Events />
      </div>
      {/* { <div id="events-takeawats" className="mt-20 px-4 md:px-8 lg:px-16 mb-20">
        <Takeaways />
      </div> } */}
      <div id="speakers-content" className="mt-10 px-4 md:px-8 lg:px-16">
        <PastSpeakers /> {/* Replaced Speakers with PastSpeakers */}
      </div>
      <div id="sponsers-content" className="mt-10 px-4 md:px-8 lg:px-16">
        <Sponsers />
      </div>
      <div id="faqs-content" className="px-4 md:px-8 lg:px-16 mb-10">
        <Faqs />
      </div>
    </div>
  );
}

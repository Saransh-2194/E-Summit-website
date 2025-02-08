import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Events() {
  const events = [
    { name: "Event 1", image: "Dummy.jpeg", link: "/register", details: "Join this amazing event!" },
    { name: "Event 2", image: "Dummy.jpeg", link: "/register", details: "Don't miss out!" },
    { name: "Event 3", image: "Dummy.jpeg", link: "/register", details: "An event like no other." },
    { name: "Event 4", image: "Dummy.jpeg", link: "/register", details: "Sign up today!" },
    { name: "Event 5", image: "Dummy.jpeg", link: "/register", details: "Experience the fun!" },
    { name: "Event 6", image: "Dummy.jpeg", link: "/register", details: "Be part of something big!" },
  ];

  const pageStyle = {
    fontFamily: "'Luckiest Guy', cursive",
    backgroundImage: "url('/events-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const handleNavigate = (link) => {
    setIsExiting(true);
    setTimeout(() => {
      navigate(link);
    }, 500);
  };

  return (
    <div>
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            className="relative min-h-screen w-full flex flex-col items-center mb-50"
            style={pageStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex justify-center mb-12 mt-30"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <motion.img
                src="/events.png"
                alt="EVENTS"
                className="h-12 md:h-16 lg:h-22"
              />
            </motion.div>
            <div className="w-full max-w-7xl mx-8 px-4 md:px-8 lg:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mt-10 sm:mt-12 m-10">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <FlipCard event={event} handleNavigate={handleNavigate} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Flip Card Component
function FlipCard({ event, handleNavigate }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-80 h-80 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => handleNavigate(event.link)}
    >
      {/* Shadow Layer (Moved to the left) */}
      <div className="absolute w-full h-full bg-black rounded-xl -translate-x-3 translate-y-3"></div>

      {/* Rotating Card */}
      <div
        className={`relative w-full h-full bg-white border-4 border-black rounded-xl shadow-lg transform transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center p-4 backface-hidden">
          <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-lg mb-6" />
          <h3 className="text-lg font-bold">{event.name}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-yellow-300 flex flex-col items-center justify-center p-4 text-center rotate-y-180 backface-hidden">
          <p className="text-sm">{event.details}</p>
          <a href={event.link} className="mt-4 px-4 py-2 bg-white text-black rounded-lg">Register</a>
        </div>
      </div>
    </div>
  );
}

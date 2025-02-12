import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const events = [
    { name: "Event 1", image: "Dummy.jpeg", link: "/register", details: "Join this amazing event!" },
    { name: "Event 2", image: "Dummy.jpeg", link: "/register", details: "Don't miss out!" },
    { name: "Event 3", image: "Dummy.jpeg", link: "/register", details: "An event like no other." },
    { name: "Event 4", image: "Dummy.jpeg", link: "/register", details: "Sign up today!" },
    { name: "Event 5", image: "Dummy.jpeg", link: "/register", details: "Experience the fun!" },
    { name: "Event 6", image: "Dummy.jpeg", link: "/register", details: "Be part of something big!" },
  ];

  const navigate = useNavigate();

  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/')" }}>
      <div className="flex justify-center mb-12 mt-10">
        <img src="/events.png" alt="EVENTS" className="h-12 md:h-16 lg:h-22" />
      </div>
      <div className="max-w-7xl mx-8 px-10 md:px-8 lg:px-0">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-20 mt-10 sm:mt-12">
          {events.map((event, index) => (
            <div key={index}>
              <EventCard event={event} navigate={navigate} cardTextStyle={cardTextStyle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Event Card Component
function EventCard({ event, navigate, cardTextStyle }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (e) => {
    e.stopPropagation();
    if (isMobile) {
      navigate(event.link);
    } else {
      setIsFlipped((prev) => !prev);
    }
  };

  return isMobile ? (
    <div
      className="relative w-60 h-72 sm:w-80 sm:h-96 cursor-pointer bg-white border-4 border-black rounded-xl shadow-lg flex flex-col items-center p-4"
      onClick={handleCardClick}
      style={{ boxShadow: '-20px 20px 0px 0px black' }}
    >
      {/* Shadow */}
      <div className="absolute w-full h-full bg-black rounded-xl -z-10 translate-x-2 translate-y-2"></div>

      {/* Image */}
      <img src={event.image} alt={event.name} className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3" />
      
      {/* Event Details */}
      <h3 className="text-md sm:text-xl font-bold" style={cardTextStyle}>{event.name}</h3>
      <p className="text-xs sm:text-sm mt-1 text-gray-700 text-center" style={cardTextStyle}>{event.details}</p>
    </div>
  ) : (
    <div
      className="relative w-60 h-72 sm:w-80 sm:h-96 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleCardClick}
    >
      {/* Shadow Layer (Moved to the left) */}
      <div className="absolute w-full h-full bg-black rounded-xl -translate-x-4 translate-y-4"></div>

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
          <img src={event.image} alt={event.name} className="w-full h-50 sm:h-58 object-full rounded-lg mb-3" />
          <h3 className="text-md sm:text-2xl font-bold" style={cardTextStyle}>{event.name}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-yellow-300 flex flex-col items-center justify-center p-4 text-center rotate-y-180 backface-hidden">
          <p className="text-xs sm:text-sm" style={cardTextStyle}>{event.details}</p>
          <a href={event.link} className="mt-2 sm:mt-4 px-2 sm:px-4 py-1 sm:py-2 bg-white text-black rounded-lg">Register</a>
        </div>
      </div>
    </div>
  );
}

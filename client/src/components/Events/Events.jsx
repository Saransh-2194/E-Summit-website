import React, { useState } from "react";

export default function Events() {
  const events = [
    { name: "Event 1", image: "event1.jpg", link: "/register", details: "Join this amazing event!" },
    { name: "Event 2", image: "event2.jpg", link: "/register", details: "Don't miss out!" },
    { name: "Event 3", image: "event3.jpg", link: "/register", details: "An event like no other." },
    { name: "Event 4", image: "event4.jpg", link: "/register", details: "Sign up today!" },
    { name: "Event 5", image: "event5.jpg", link: "/register", details: "Experience the fun!" },
    { name: "Event 6", image: "event6.jpg", link: "/register", details: "Be part of something big!" },
  ];

  const pageStyle = {
    fontFamily: "'Luckiest Guy', cursive",
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center mb-50" style={pageStyle}>
      <img src="/events.png" alt="EVENTS" className="mt-20 mb-10" />
      <div className="w-full max-w-7xl mx-8 px-4 md:px-6 lg:px-8">
        {/* Increased gap without changing card size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-8 sm:mt-12 m-10">
          {events.map((event, index) => (
            <FlipCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Flip Card Component
function FlipCard({ event }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-64 h-64 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
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
          <a href={event.link} className="mt-4 px-4 py-2 bg-black text-white rounded-lg">Register</a>
        </div>
      </div>
    </div>
  );
}

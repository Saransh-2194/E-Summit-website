import React, { useState, useEffect, useRef } from "react";

const speakers = [
  { name: "BhuvanBam", position: "Content Creator | Actor", image: "./speakers/bhuvanbam.jpeg" },
  { name: "Samay Raina", position: "Comicstaan 2 winner | Stand Up Comic", image: "./speakers/samay.jpeg" },
  { name: "Sunchit Dudeja", position: "SDE-V at Adobe", image: "./speakers/sunchit.png" },
  { name: "Hina Arora", position: "Engineering Manager, Jio Platforms Limited", image: "./speakers/hina.jpg" },
  { name: "Saurabh Dayal", position: "Co-founder @ ClearDekho", image: "./speakers/saurabh.jpg" },
  { name: "Anmol Jamwal", position: "CEO @ Feoster | Angel Investor", image: "./speakers/anmoljamwal.jpeg" },
  // Add more speakers as needed
];

export default function PastSpeakers() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center px-4 py-2">
      <div className="flex justify-center items-center">
        <img src="/past.png" alt="SPEAKERS" className="h-20 md:h-16 lg:h-25" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 mt-10">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </div>
  );
}

function SpeakerCard({ speaker }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };

  return (
    <div className="relative group bg-white p-2 rounded-lg w-full max-w-xs shadow-lg hover:shadow-2xl transition-shadow duration-300 border-black border-4 m-4 overflow-hidden" style={{ boxShadow: '-20px 20px 0px 0px black' }}>
      <img
        src={speaker.image}
        alt={speaker.name}
        className="w-full h-70 object-cover rounded-t-lg transition duration-300"
      />
      <h3 className="text-xl font-semibold mt-4 text-gray-800" style={cardTextStyle}>
        {speaker.name}
      </h3>
      <p className="text-gray-600" style={cardTextStyle}>{speaker.position}</p>
    </div>
    
  );
}



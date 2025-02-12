import React, { useState, useEffect, useRef } from "react";

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
        className="w-full h-60 object-cover rounded-t-lg transition duration-300"
      />
      <h3 className="text-xl font-semibold mt-4 text-gray-800" style={cardTextStyle}>
        {speaker.name}
      </h3>
      <p className="text-gray-600" style={cardTextStyle}>{speaker.date}</p>
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
        <div className="flex justify-center gap-4">
          <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a href={speaker.Instagram} target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" className="w-7 h-7 sm:w-9 sm:h-9" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Speakers() {
  const speakers = [
    { name: "Speaker 1", image: "speaker-dummy.jpg", date: "March 10, 2025", linkedin: "https://linkedin.com/speaker1", twitter: "https://twitter.com/speaker1" },
    { name: "Speaker 2", image: "speaker-dummy.jpg", date: "March 12, 2025", linkedin: "https://linkedin.com/speaker2", twitter: "https://twitter.com/speaker2" },
    { name: "Speaker 3", image: "speaker-dummy.jpg", date: "March 15, 2025", linkedin: "https://linkedin.com/speaker3", twitter: "https://twitter.com/speaker3" },
    { name: "Speaker 4", image: "speaker-dummy.jpg", date: "March 18, 2025", linkedin: "https://linkedin.com/speaker4", twitter: "https://twitter.com/speaker4" },
    { name: "Speaker 5", image: "speaker-dummy.jpg", date: "March 20, 2025", linkedin: "https://linkedin.com/speaker5", twitter: "https://twitter.com/speaker5" },
    { name: "Speaker 6", image: "speaker-dummy.jpg", date: "March 22, 2025", linkedin: "https://linkedin.com/speaker6", twitter: "https://twitter.com/speaker6" },
  ];

  const pageStyle = {
    fontFamily: "'Comic Neue', cursive",
    backgroundImage: "url('/')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center mb-20 px-4 py-10" style={pageStyle}>
      <div className="flex justify-center mb-12 mt-20">
        <img src="/speakers.png" alt="SPEAKERS" className="h-20 md:h-16 lg:h-35 " />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-10">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </div>
  );
}
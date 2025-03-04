import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const events = [
    { 
      name: "Hacking Hills", 
      image: "./Events/SwHackathon.jpg", 
      shortDetails: "A software based 24-hour hackathon in which students will compete overnight to solve a given problem statement.",
      doclink: "https://docs.google.com/document/d/1bpzB1i6EZK1NW0y5bc_62BpDWYjjdBTW/edit?usp=sharing&ouid=115514402854407416627&rtpof=true&sd=true"
    },
    { 
      name: "Hard-Wired", 
      image: "./Events/HwHackathon.jpg", 
      shortDetails: "A hardware based hackathon in which students will develop a prototype for an exhibition, judged by guest experts.",
      doclink: "https://docs.google.com/document/d/1bpzB1i6EZK1NW0y5bc_62BpDWYjjdBTW/edit?usp=sharing&ouid=115514402854407416627&rtpof=true&sd=true"
    },
    { 
      name: "Code-Dash", 
      image: "./Events/Codathon.jpg", 
      shortDetails: "A code-a-thon, in which students can compete in an online coding challenge.",
      doclink: "https://docs.google.com/document/d/1bpzB1i6EZK1NW0y5bc_62BpDWYjjdBTW/edit?usp=sharing&ouid=115514402854407416627&rtpof=true&sd=true"
    },
    { 
      name: "Fundfrontier", 
      image: "./Events/Fundfrontier.jpg", 
      shortDetails: "An investment challenge where startups pitch their ideas to a panel of investors.",
      doclink: "https://docs.google.com/document/d/135xL4fAenYPswloYuF5ZttGCB1WL5Eso/edit?usp=sharing&ouid=115514402854407416627&rtpof=true&sd=true"
    },
    { 
      name: "IPL Auction", 
      image: "./Events/Ipl auction.jpg", 
      shortDetails: "Teams compete in a cricket and IPL quiz, then bid on players to build the best squad.",
      doclink: "https://docs.google.com/document/d/15yCfjh2y9XJfwg8je6jlxmlhTehcM1GlODdz8Gq00MQ/edit?usp=sharing"
    },
    { 
      name: "Stock Royale", 
      image: "./Events/Stock titain.jpg", 
      shortDetails: "A real-time stock market simulation where participants compete to build the most profitable portfolio.",
      doclink: "https://docs.google.com/document/d/17A06c55XcrkyT0_6EVivdzK8K75WsGLDIXCLTdmqZIc/edit?usp=sharing" 
    },
    { 
      name: "Case Studies", 
      image: "./Events/CaseStudy.jpeg", 
      shortDetails: "Two Case Studies based on what's happening around the world.",
      doclink: "https://docs.google.com/document/d/1H4d4a40R-R0P7FPVVvmp55VbU9OVxqnig68MqVlhr10/edit?usp=sharing"
    },
    { 
      name: "Item To Icon", 
      image: "./Events/Design Sphere.jpg", 
      shortDetails: "An online design event celebrating creativity, innovation, and artistic expression.",
      doclink: "https://docs.google.com/document/d/1N3pLPpig6_JGGyny5WAKuuIqhIguzB0hsXPq42nyZ0Y/edit?usp=sharing"
    },
    { 
      name: "Summit Scape", 
      image: "./Events/SummitScape.jpg", 
      shortDetails: "A digital engagement initiative where attendees capture and share dynamic moments from E-Summit 2025.",
      doclink: "https://docs.google.com/document/d/1nd3s7qTmujDOZ9_gntwWBWzdXO_5ec9CYLInZyXr_HY/edit?usp=sharing" 
    },
    { 
      name: "Valorant Vortex", 
      image: "./Events/Valorant.jpg", 
      shortDetails: "A gaming tournament where players compete in fast-paced FPS battles.",
      doclink: "https://docs.google.com/document/d/1ebJLXwSydjVTOqo-S2sShnVfB4jb2mHPAQQnzEDP6Jo/edit?usp=sharing" 
    },
    { 
      name: "Biz Quiz", 
      image: "./Events/BizQuiz.jpg", 
      shortDetails: "A fast-paced version of the traditional BizQuiz. Players compete to test their business acumen.",
      doclink: "https://docs.google.com/document/d/1DrQ-P9tfqj9TYyQJC9QNYFh36ME61A3n/edit?usp=sharing&ouid=115514402854407416627&rtpof=true&sd=true"
    },
  ];

  const navigate = useNavigate();

  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };

  const handleImageClick = () => {
    navigate("/register");
  };

  return (
    <div className=" relative min-h-screen w-full flex flex-col items-center bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center mb-3 mt-10">
        <img src="/events.png" alt="EVENTS" className="h-16 md:h-16 lg:h-22" />
      </div>
      <div className="max-w-7xl mx-8 px-10 md:px-8 lg:px-0">
        <div className="flex flex-wrap justify-center gap-16 mt-10">
          {events.map((event, index) => (
            <div key={index}>
              <EventCard event={event} cardTextStyle={cardTextStyle} onImageClick={handleImageClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Event Card Component
function EventCard({ event, cardTextStyle, onImageClick }) {
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
      setIsFlipped((prev) => !prev);
    }
  };

  return isMobile ? (
    <div
      className="relative w-72 h-auto sm:w-92 sm:h-auto cursor-pointer bg-white border-4 border-black rounded-xl shadow-lg flex flex-col items-center p-4 justify-center"
      onClick={handleCardClick}
      style={{ boxShadow: '-20px 20px 0px 0px black' }}
    >
      {/* Shadow */}
      <div className="absolute w-full h-full bg-black rounded-xl -z-10 translate-x-2 translate-y-2"></div>

      {/* Image */}
      <img src={event.image} alt={event.name} className="w-full h-48 sm:h-56 object-cover rounded-lg mb-3" onClick={onImageClick} />
      
      {/* Event Details */}
      <h3 className="text-md sm:text-xl font-bold" style={cardTextStyle}>{event.name}</h3>
      <p className="text-sm sm:text-sm mt-1 text-gray-700 text-center" style={cardTextStyle}>{event.shortDetails}</p>
      <a href={event.doclink} className="mt-1 sm:mt-3 px-3 sm:px-5 py-2 sm:py-3 bg-yellow-300 text-black rounded-md">Details</a>
    </div>

  ) : (
    <div
      className="relative w-72 lg:h-106 sm:w-92 sm:h-104 cursor-pointer mb-10"
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
          <img src={event.image} alt={event.name} className="w-full lg:h-70 sm:h-73 object-full rounded-lg mb-3" />
          <h3 className="text-md sm:text-2xl font-bold" style={cardTextStyle}>{event.name}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-yellow-300 flex flex-col items-center justify-center p-4 text-center rotate-y-180 backface-hidden">
          <p className="text-sm sm:text-lg" style={cardTextStyle}>{event.shortDetails}</p>
          <a href={event.doclink} className="mt-2 sm:mt-4 px-2 sm:px-4 py-1 sm:py-2 bg-white text-black rounded-lg">Details</a>
        </div>
      </div>
    </div>
  );
}

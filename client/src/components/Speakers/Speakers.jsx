import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from 'framer-motion';

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
      <p className="text-gray-600 mb-4" style={cardTextStyle}>{speaker.designation}</p>
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
        <div className="flex justify-center gap-4">
          <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a href={speaker.instagram} target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" className="w-7 h-7 sm:w-9 sm:h-9" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Speakers() {
  const speakers = [
    { name: "Ekant Agarwal", 
      image: "./Speakers/ekant.jpg", 
      designation: "Founder & CEO, Ekant Associates and CBMA", 
      linkedin: "https://www.linkedin.com/in/ekant-agarwal/", 
      instagram: "https://www.instagram.com/ekant_agarwal/" 
    },
    { name: "Anmol Jamwal", 
      image: "./Speakers/anmol.jpeg", 
      designation: "CEO, Feoster", 
      linkedin: "https://www.linkedin.com/in/anmoljamwal/", 
      instagram: "https://www.instagram.com/_anmol.jamwal/" 

    },
    { name: "Amit Madaan", 
      image: "./Speakers/amit.jpg", 
      designation: "CEO, A-Square Media & Chairman, IBSE", 
      linkedin: "https://www.linkedin.com/in/amitmmadaan/", 
      instagram: "https://www.instagram.com/amit_madaan0729/" 

    },
    { name: "Hitesh Gulati", 
      image: "./Speakers/hitesh.jpeg", 
      designation: "Founder, Diversity Ace Business Consulting", 
      linkedin: "https://www.linkedin.com/in/hgulati/", 
      instagram: "https://www.instagram.com/hiteshkumargulati/" 

    },
    { name: "Rahul Lakhmani", 
      image: "./Speakers/rahul.jpeg", 
      designation: "Founder & CEO, Skiify", 
      linkedin: "https://www.linkedin.com/in/rahullakhmani/", 
      instagram: "https://www.instagram.com/drlakhmani/" 

    },
  ];

  const pageStyle = {
    backgroundImage: "url('/bg-1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    fontFamily: "'Comic Neue', cursive",
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center px-4 py-10" style={pageStyle}>
      <motion.div
          className="flex justify-center mt-25"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <motion.img
            src="/speakers.png" alt="SPEAKERS" className="h-20 md:h-16 lg:h-25 " 
          />
        </motion.div>

      <div className="flex flex-wrap justify-center gap-16 mt-25 mb-30">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </div>
  );
}
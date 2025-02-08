import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Speakers() {
  const [expandedCard, setExpandedCard] = useState(null);
  const speakers = [
    { name: "Speaker 1", image: "speaker-dummy.jpg", description: "Expert in AI & ML", date: "March 10, 2025", linkedin: "https://linkedin.com/speaker1", twitter: "https://twitter.com/speaker1" },
    { name: "Speaker 2", image: "speaker-dummy.jpg", description: "Cybersecurity Specialist", date: "March 12, 2025", linkedin: "https://linkedin.com/speaker2", twitter: "https://twitter.com/speaker2" },
    { name: "Speaker 3", image: "speaker-dummy.jpg", description: "Blockchain Innovator", date: "March 15, 2025", linkedin: "https://linkedin.com/speaker3", twitter: "https://twitter.com/speaker3" },
    { name: "Speaker 4", image: "speaker-dummy.jpg", description: "Cloud Computing Guru", date: "March 18, 2025", linkedin: "https://linkedin.com/speaker4", twitter: "https://twitter.com/speaker4" },
    { name: "Speaker 5", image: "speaker-dummy.jpg", description: "Data Science Enthusiast", date: "March 20, 2025", linkedin: "https://linkedin.com/speaker5", twitter: "https://twitter.com/speaker5" },
    { name: "Speaker 6", image: "speaker-dummy.jpg", description: "IoT Visionary", date: "March 22, 2025", linkedin: "https://linkedin.com/speaker6", twitter: "https://twitter.com/speaker6" },
  ];

  const pageStyle = {
    fontFamily: "'Luckiest Guy', cursive",
    backgroundImage: "url('/speakers-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  const handleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="relative min-h-screen w-full flex flex-col items-center mb-20 px-6 py-10"
        style={pageStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center mb-12 mt-20">
        <motion.img
          src="/speakers.png"
          alt="SPEAKERS"
          className="h-12 md:h-16 lg:h-22"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 w-full max-w-6xl mt-15 ">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className={`bg-white border-4 border-black rounded-xl shadow-[-15px_15px_0px_black] overflow-hidden w-full p-8 relative transition-all duration-900 cursor-pointer transform ${
                expandedCard !== null && expandedCard !== index ? "scale-90 opacity-50" : "scale-100 opacity-100"
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleExpand(index)}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-48 md:h-56 object-cover rounded-lg cursor-pointer"
              />
              <h3 className="text-xl font-semibold text-center mt-4">{speaker.name}</h3>
              <p className="text-center text-gray-500 text-lg">{speaker.date}</p>
              <div className="flex justify-center gap-4 mt-2 ">
                <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href={speaker.twitter} target="_blank" rel="noopener noreferrer">
                  <img src="/twitter.png" alt="Twitter" className="w-9 h-9" />
                </a>
              </div>
              {expandedCard === index && (
                <motion.div
                  className="absolute inset-0 bg-black text-white p-6 rounded-lg shadow-4xl z-20 flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-4">{speaker.name}</h2>
                  <p className="text-lg mb-6">{speaker.description}</p>
                  <button
                    onClick={() => handleExpand(index)}
                    className="px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

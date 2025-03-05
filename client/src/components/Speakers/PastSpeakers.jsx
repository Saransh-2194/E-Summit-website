import React from "react";
import { InfiniteMovingSpeakers } from "../ui/past-speakers-animation"; 
import { motion, AnimatePresence } from "framer-motion";

const speakers = [
  { name: "BhuvanBam", position: "Content Creator | Actor", image: "./past speakers/bhuvanbam.jpeg" },
  { name: "Samay Raina", position: "Comicstaan 2 winner | Stand Up Comic", image: "./past speakers/samay.jpeg" },
  { name: "Sunchit Dudeja", position: "SDE-V at Adobe", image: "./past speakers/sunchit.png" },
  { name: "Hina Arora", position: "Engineering Manager, Jio Platforms Limited", image: "./past speakers/hina.jpg" },
  { name: "Saurabh Dayal", position: "Co-founder @ ClearDekho", image: "./past speakers/saurabh.jpg" },
  { name: "Anmol Jamwal", position: "CEO @ Feoster | Angel Investor", image: "./past speakers/anmoljamwal.jpeg" },
  // Add more speakers as needed
];

const titleControls = {
  opacity: 1,
  y: 0,
};

export default function PastSpeakers() {
  return (
    <AnimatePresence>
      <motion.div
        className="relative mb-6 w-full flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex justify-center mt-25"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <motion.img
            src="/past.png"
            alt="Speakers"
            className="h-10 lg:h-18 mb-10"
          />
        </motion.div>
        <div className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mt-10 "
            initial={{ opacity: 0, y: 30 }}
            animate={titleControls}
            transition={{ duration: 0.75}}
          >
          </motion.h2>
          <InfiniteMovingSpeakers 
            items={speakers} 
            direction="left" 
            speed="normal" 
            pauseOnHover={true} 
            className="w-full overflow-hidden"
            itemClassName="flex-shrink-0 w-50 h-50 md:w-60 md:h-60 lg:w-80 lg:h-80"
            imageClassName="object-cover w-full h-full rounded-xl" // Ensure the image fits the card
            triggerOnScroll={true} // Add this prop to trigger animation on scroll
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}



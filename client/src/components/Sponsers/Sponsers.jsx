import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion, AnimatePresence } from "framer-motion";

export default function Sponsers() {
  const infiniteSponsers = [
    { name: 'Sponsor 1', image: 'sponsors-dummy.jpg' },
    { name: 'Sponsor 2', image: 'sponsors-dummy.jpg' },
    { name: 'Sponsor 3', image: 'sponsors-dummy.jpg' },
    { name: 'Sponsor 4', image: 'sponsors-dummy.jpg' },
    { name: 'Sponsor 5', image: 'sponsors-dummy.jpg' },
    { name: 'Sponsor 6', image: 'sponsors-dummy.jpg' },
  ];

  const titleControls = {
    opacity: 1,
    y: 0,
  };

  const pageStyle = {
    backgroundImage: "url('/events-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <AnimatePresence>
      <motion.div
        className="relative min-h-screen w-full mt-65 flex flex-col items-center"
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
            src="/sponsers.png"
            alt="SPONSORS"
            className="h-12 md:h-20 lg:h-26"
          />
        </motion.div>
        <div className="flex flex-col items-center w-full px-4 md:px-8 lg:px-16">
          <motion.h2
            className="text-xl md:text-2xl lg:text-4xl text-green-200 font-['Exo_2'] font-bold mb-4 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={titleControls}
            transition={{ duration: 0.75}}
          >
          </motion.h2>
          <InfiniteMovingCards 
            items={infiniteSponsers} 
            direction="left" 
            speed="normal" 
            pauseOnHover={true} 
            className="w-full overflow-hidden"
            itemClassName="flex-shrink-0 w-60 h-60 md:w-64 md:h-64 lg:w-80 lg:h-80"
            imageClassName="object-cover w-full h-full" // Ensure the image fits the card
            triggerOnScroll={true} // Add this prop to trigger animation on scroll
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
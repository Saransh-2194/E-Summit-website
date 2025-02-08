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

  return (
    <AnimatePresence>
      <motion.div
        className="relative min-h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-12 mt-30">
        <motion.img
          src="/sponsers.png"
          alt="SPONSORS"
          className="h-12 md:h-20 lg:h-26"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        </div>
        <div className="flex flex-col items-center">
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
            imageClassName="object-cover w-relative h-relative" // Ensure the image fits the card
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

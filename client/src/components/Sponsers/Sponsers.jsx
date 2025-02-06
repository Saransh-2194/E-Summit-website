import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion, AnimatePresence } from "framer-motion";

export default function Sponsers() {
  const infiniteSponsers = [
    { name: 'Sponser 1', image: 'sponser1.jpg' },
    { name: 'Sponser 2', image: 'sponser2.jpg' },
    { name: 'Sponser 3', image: 'sponser3.jpg' },
    { name: 'Sponser 4', image: 'sponser3.jpg' },
    { name: 'Sponser 5', image: 'sponser3.jpg' },
    { name: 'Sponser 6', image: 'sponser3.jpg' },
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
        <motion.div
          className="relative justify-center items-center flex flex-col"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/sponsers.png" alt="SPONSORS" className="mt-20 mb-10"/>
        </motion.div>
        <div className="mt-12 sm:mt-16">
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
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

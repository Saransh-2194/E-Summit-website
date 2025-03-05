import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { motion, AnimatePresence } from "framer-motion";

export default function Sponsers() {
  const infiniteSponsers = [
    { name: 'ccd', image: '/Past Sponsors/ccd.png' },
    { name: 'canarabank', image: '/Past Sponsors/canarabank.png' },
    { name: 'cocacola', image: '/Past Sponsors/coca-cola.png' },
    { name: 'google', image: '/Past Sponsors/Google_Cloud.png' },
    { name: 'kfc', image: '/Past Sponsors/kfc.png' },
    { name: 'paytm', image: '/Past Sponsors/Paytm.png' },
    { name: 'pnb', image: '/Past Sponsors/pnb.png' },
    { name: 'royal', image: '/Past Sponsors/royal.png' },
    { name: 'headstart', image: '/Past Sponsors/headstart.png' },
    { name: 'pepsi', image: '/Past Sponsors/pepsi.png' },
  ];

  const titleControls = {
    opacity: 1,
    y: 0,
  };

  return (
    <AnimatePresence>
      <motion.div
        className="relative mb-55 w-full flex flex-col items-center"
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
            src="/pastsponsors.png"
            alt="SPONSORS"
            className="h-12 lg:h-22"
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
          <InfiniteMovingCards 
            items={infiniteSponsers} 
            direction="left" 
            speed="normal" 
            pauseOnHover={true} 
            className="w-full overflow-hidden"
            itemClassName="flex-shrink-0 w-40 h-40 md:w-64 md:h-64 lg:w-60 lg:h-60 bg-white rounded-lg"
            imageClassName="object-cover w-full h-full" // Ensure the image fits the card
            triggerOnScroll={true} // Add this prop to trigger animation on scroll
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Sponsors() {
  const sponsors = [
    { name: 'Sponsor 1', image: 'sponsors-dummy.jpg', type: 'Platinum' },
    { name: 'Sponsor 2', image: 'sponsors-dummy.jpg', type: 'Gold' },
    { name: 'Sponsor 3', image: 'sponsors-dummy.jpg', type: 'Silver' },
    { name: 'Sponsor 4', image: 'sponsors-dummy.jpg', type: 'Silver' },
    { name: 'Sponsor 5', image: 'sponsors-dummy.jpg', type: 'Silver' },
    { name: 'Sponsor 6', image: 'sponsors-dummy.jpg', type: 'Gold' },
    { name: 'Sponsor 7', image: 'sponsors-dummy.jpg', type: 'Bronze' },
    { name: 'Sponsor 8', image: 'sponsors-dummy.jpg', type: 'Bronze' },
    { name: 'Sponsor 9', image: 'sponsors-dummy.jpg', type: 'Bronze' },
    { name: 'Sponsor 10', image: 'sponsors-dummy.jpg', type: 'Bronze' },
  ];

  const categorizedSponsors = sponsors.reduce((acc, sponsor) => {
    acc[sponsor.type] = acc[sponsor.type] || [];
    acc[sponsor.type].push(sponsor);
    return acc;
  }, {});

  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };

  const pageStyle = {
    backgroundImage: "url('/bg-1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    fontFamily: "'Comic Neue', cursive",
  };

  return (
    <div className="w-full flex flex-col items-center p-8 min-h-screen text-black overflow-hidden" style = {pageStyle}>
      {/* Title Image */}
      <div className="flex justify-center mb-12 mt-10">
        <img src="/sponsors.png" alt="Our Sponsors" className="h-20 md:h-16 lg:h-35" />
      </div>
      
      {/* Sponsor Categories */}
      {Object.entries(categorizedSponsors).map(([category, sponsors], categoryIndex) => {
        const controls = useAnimation();
        const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

        useEffect(() => {
          if (inView) {
            controls.start({ opacity: 1, y: 0 });
          } else {
            controls.start({ opacity: 0, y: 50 });
          }
        }, [controls, inView]);

        return (
          <motion.div 
            key={category} 
            ref={ref}
            className="flex flex-col items-center mb-8 w-full relative"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1.2, delay: categoryIndex * 0.5 }}
          >
            {/* Category Title */}
            <motion.h2
              className="text-2xl font-bold mb-4 mt-10"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 1.2, delay: categoryIndex * 0.5 }}
              style={cardTextStyle}
            >
              {category}
            </motion.h2>

            {/* Sponsor Images in Single Line */}
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-screen-lg px-4">
              {sponsors.map((sponsor, index) => (
                <motion.img 
                  key={index} 
                  src={sponsor.image} 
                  alt={sponsor.name} 
                  className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 ${category === 'Platinum' ? 'w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80' : ''}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              ))}
            </div>
            {categoryIndex < Object.keys(categorizedSponsors).length - 1 && (
              <motion.div 
                className="w-0.5 bg-black absolute top-full"
                initial={{ height: 0 }}
                animate={{ height: inView ? '4rem' : '0' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              ></motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default Sponsors;

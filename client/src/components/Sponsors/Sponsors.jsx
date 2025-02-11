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
    { name: 'Sponsor 0', image: 'sponsors-dummy.jpg', type: 'Bronze' },
  ];

  const categorizedSponsors = sponsors.reduce((acc, sponsor) => {
    acc[sponsor.type] = acc[sponsor.type] || [];
    acc[sponsor.type].push(sponsor);
    return acc;
  }, {});

  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };

  return (
    <div id="sponsors-section" className="w-full flex flex-col items-center p-8 min-h-screen text-black overflow-hidden">
      <div className="flex justify-center mb-12 mt-10">
        <img src="/sponsors.png" alt="Our Sponsors" className="h-20 md:h-16 lg:h-35" />
      </div>
      
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
            <motion.h2
              className="text-2xl font-bold mb-2 mt-10"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 1.2, delay: categoryIndex * 0.5 }}
              style={cardTextStyle}
            >
              {category}
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-30 max-w-4xl relative">
              {sponsors.map((sponsor, index) => (
                <motion.img 
                  key={index} 
                  src={sponsor.image} 
                  alt={sponsor.name} 
                  className={`w-24 h-24 sm:w-32 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 ${category === 'Platinum' ? 'w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80' : ''}`}
                  initial={{ opacity: 2, scale: 0.8 }}
                  animate={controls}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              ))}
            </div>
            {categoryIndex < Object.keys(categorizedSponsors).length - 1 && (
              <motion.div 
                className="w-0.5 bg-black absolute top-full"
                initial={{ height: 0 }}
                animate={{ height: inView ? '4rem' : '0', y: scrollDirection === 'down' ? 0 : -4 }}
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

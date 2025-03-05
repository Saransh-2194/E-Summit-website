import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Takeaways() {
  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };

  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({ triggerOnce: true });
//   const { ref: secondSectionRef, inView: secondSectionInView } = useInView({ triggerOnce: true });
//    const { ref: thirdSectionRef, inView: thirdSectionInView } = useInView({ triggerOnce: true });
//   const { ref: newSectionRef, inView: newSectionInView } = useInView({ triggerOnce: true });

  const firstSectionControls = useAnimation();
//   const secondSectionControls = useAnimation();
//   const thirdSectionControls = useAnimation();
//   const newSectionControls = useAnimation();

  useEffect(() => {
    if (firstSectionInView) {
      firstSectionControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 2.5 },
      });
    }
  }, [firstSectionInView, firstSectionControls]);

  return (
    <div className=" text-white px-12 sm:px-12 md:px-20 lg:px-32 py-4">
      {/* Header */}
      <div className=" flex justify-center items-center">
        <img src="/takeaways.png" alt="Takeaways" className="h-15 md:h-0 lg:h-18 mb-10" />
      </div>

      {/* FIrst Section: JUIT */}
      <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, x: 100 }}
        animate={firstSectionControls}
        className="flex flex-col-reverse lg:flex-row items-center gap-12"
      >
        {/* Text Content */}
        <div className="relative w-full lg:w-3/3 text-center lg:text-left">
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/torn-page.png')",
              backgroundSize: "125% 125%", // Increase the size of the background image
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={firstSectionControls}
          ></motion.div>
          <motion.div
            className="relative z-10 p-10 max-w-full"
            style={cardTextStyle}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }} // Add delay to text animation
          >
            <h2 className="text-black text-3xl font-bold mb-4 text-center lg:text-left ml-4 mt-8 lg:mt-0" style={cardTextStyle}>
            <a href="https://www.juit.ac.in" className="text-black hover:underline ml-3">
            JUIT</a></h2>
            <p className="text-black mt-4 leading-relaxed ml-4 mr-4 mb-4 lg:mb-0">
            Jaypee University of Information Technology (JUIT) is a premier institute located in Waknaghat, Himachal Pradesh, dedicated to academic excellence and research in engineering, technology, and applied sciences. Established in 2002 under the aegis of the Jaypee Group, JUIT offers a dynamic learning environment with state-of-the-art infrastructure, modern laboratories, and a research-driven curriculum.
            With a strong focus on innovation and entrepreneurship, JUIT fosters industry collaborations and hands-on learning experiences, preparing students for global challenges. The university is known for its vibrant campus life, technical and cultural events, and a highly qualified faculty committed to nurturing future leaders.
            </p>
          </motion.div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-4/5">
          <a href="https://www.juit.ac.in" target="_blank" rel="noopener noreferrer">
            <img src="/juit.jpg" alt="JUIT" className="rounded-xl shadow-lg w-full" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Takeaways() {
  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };

  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({ triggerOnce: true });

  const firstSectionControls = useAnimation();

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
    <div className="text-white px-6 sm:px-12 md:px-20 lg:px-32 py-2">
      {/* Header */}
      <motion.div
          className="flex justify-center mt-15 mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <motion.img
            src="/takeaways.png" alt="Takeaways" className="h-10 lg:h-18 mb-20" 
          />
        </motion.div>
      

      {/* First Section: JUIT */}
      <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, x: 100 }}
        animate={firstSectionControls}
        className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-12"
      >
        {/* Text Content */}
        <div className="relative w-full lg:w-3/3 text-center lg:text-left">
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/torn-page.png')",
              backgroundSize: "125% 125%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={firstSectionControls}
          ></motion.div>
          <motion.div
            className="relative z-10 p-6 sm:p-10 max-w-full"
            style={cardTextStyle}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p className="text-black mt-4 leading-relaxed ml-2 sm:ml-4 mr-2 sm:mr-4 mb-4 lg:mb-0">
              E-Summit 2025 is a platform to learn, network, and grow in an innovation-driven space. Connect with industry leaders, gain insights from founders, and compete in high-stakes events. Here’s what participants can look forward to:
            </p>
            <ul className="list-none ml-4 sm:ml-6">
              <li className="flex items-center text-black mb-2"><span className="w-2 h-2 bg-yellow-400 border border-black rounded-full inline-block mr-2 shrink-0"></span> Network with industry leaders and like-minded entrepreneurs.</li>
              <li className="flex items-center text-black mb-2"><span className="w-2 h-2 bg-yellow-400 border border-black rounded-full inline-block mr-2 shrink-0"></span> Exclusive goodies & merchandise to take home.</li>
              <li className="flex items-center text-black mb-2"><span className="w-2 h-2 bg-yellow-400 border border-black rounded-full inline-block mr-2 shrink-0"></span> Expert talks & workshops from startup founders and corporate pros.</li>
              <li className="flex items-center text-black mb-2"><span className="w-2 h-2 bg-yellow-400 border border-black rounded-full inline-block mr-2 shrink-0"></span> Exciting competitions with big rewards and recognition.</li>
            </ul>
          </motion.div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-4/5">
            <img src="/esummit19pic.JPG" alt="JUIT" className="rounded-xl shadow-lg w-full" />
        </div>
      </motion.div>
    </div>
  );
}

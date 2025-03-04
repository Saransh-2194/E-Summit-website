import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutUs() {
  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };

  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({ triggerOnce: true });
  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({ triggerOnce: true });
  const { ref: thirdSectionRef, inView: thirdSectionInView } = useInView({ triggerOnce: true });
  const { ref: newSectionRef, inView: newSectionInView } = useInView({ triggerOnce: true });

  const firstSectionControls = useAnimation();
  const secondSectionControls = useAnimation();
  const thirdSectionControls = useAnimation();
  const newSectionControls = useAnimation();

  useEffect(() => {
    if (firstSectionInView) {
      firstSectionControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 2.5 },
      });
    }
  }, [firstSectionInView, firstSectionControls]);

  useEffect(() => {
    if (secondSectionInView) {
      secondSectionControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 2.5 },
      });
    }
  }, [secondSectionInView, secondSectionControls]);

  useEffect(() => {
    if (thirdSectionInView) {
      thirdSectionControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 2.5 },
      });
    }
  }, [thirdSectionInView, thirdSectionControls]);


  return (
    <div className="text-white min-h-screen px-12 sm:px-12 md:px-20 lg:px-32 py-4">
      {/* Header */}
      <div className="flex justify-center mb-20">
        <img src="/about.png" alt="About Us" className="h-28 md:h-28 lg:h-25" />
      </div>

      {/* FIrst Section: JUIT */}
      <motion.div
        ref={firstSectionRef}
        initial={{ opacity: 0, x: 100 }}
        animate={firstSectionControls}
        className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-20"
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
            <p className="text-black mt-4 leading-relaxed ml-4 mr-4 mb-10 lg:mb-1">
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

      {/* Second Section: TIEDC */}
      <motion.div
        ref={secondSectionRef}
        initial={{ opacity: 0, x: 100 }}
        animate={secondSectionControls}
        className="flex flex-col lg:flex-row items-center gap-12 mb-20"
      >
        {/* Image */}
        <div className="w-full h-full lg:w-4/5">
          <a href="https://www.juit.ac.in/tiedc-cell" target="_blank" rel="noopener noreferrer">
            <img src="/Tiedc-juit.jpg" alt="JUIT" className="rounded-xl shadow-lg w-full" />
          </a>
        </div>

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
              fontFamily: "'Comic Neue', cursive",
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={secondSectionControls}
          ></motion.div>
          <motion.div
            className="relative z-10 p-10 max-w-full"
            style={cardTextStyle}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }} // Add delay to text animation
          >
            <h2 className="text-black text-3xl font-bold lg:text-left ml-2 mt-10 lg:mt-0" style= {cardTextStyle}><a href="https://www.juit.ac.in/tiedc-cell" className="text-black mb-4 inline-block hover:underline ml-3">
              TIEDC
            </a></h2>
            <p className="text-black mt-4 leading-relaxed ml-4 mr-1 mb-4">
              <strong>The Technology Incubation and Entrepreneurship Development Cell (TIEDC)</strong> is an initiative to foster innovation, creativity, and entrepreneurship within academic and business communities. Established in 2017 with support from the <strong>Department of Industries, Govt. of Himachal Pradesh</strong>, we aim to create a dynamic platform for individuals with innovative ideas and visions. By bridging the gap between the corporate world and aspiring entrepreneurs, we nurture an entrepreneurial ecosystem where ideas flourish and opportunities thrive, inspiring the next generation of entrepreneurs and driving positive change in our community.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Third Section: E-Summit */}
      <motion.div
        ref={thirdSectionRef}
        initial={{ opacity: 0, x: 100 }}
        animate={thirdSectionControls}
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
            animate={thirdSectionControls}
          ></motion.div>
          <motion.div
            className="relative z-10 p-10 max-w-full"
            style={cardTextStyle}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }} // Add delay to text animation
          >
            <h2 className="text-black text-3xl font-bold mb-4 text-center lg:text-left ml-4 mt-8 lg:mt-0" style={cardTextStyle}>
              What is E-Summit
            </h2>
            <p className="text-black mt-4 leading-relaxed ml-4">
              <i>
                <strong>"An entrepreneur is someone who jumps off a cliff and builds a plane on the way down." – Reid Hoffman</strong>
              </i>
            </p>
            <p className="text-black mt-4 leading-relaxed ml-4 mr-3 mb-12 lg:mb-5">
              The Entrepreneurship Summit (E-Summit) at JUIT is a dynamic event aimed at unlocking entrepreneurial potential. It brings together experts from the startup and corporate worlds for leadership talks, inspiring competitions, and networking sessions. Designed to inspire and nurture entrepreneurship, the E-Summit offers students a platform to explore innovative ideas and gain insights from industry leaders. Past editions have featured renowned speakers and attracted participants from various colleges and universities, promising a transformative experience for the next generation of entrepreneurs.
            </p>
          </motion.div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-4/5">
          <img src="/esummit19pic.JPG" alt="TIEDC" className="rounded-xl shadow-lg w-full" />
        </div>
      </motion.div>
    </div>
  );
}

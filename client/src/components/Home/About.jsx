import React from 'react';

export default function AboutUs() {
  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };

  return (
    <div className="text-white min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 py-4">
      {/* Header */}
      <div className="flex justify-center mb-20">
        <img src="/about.png" alt="About Us" className="h-15 md:h-28 lg:h-25" />
      </div>

      {/* First Section: TIEDC */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        {/* Image */}
        <div className="w-full h-full lg:w-2/3">
          <img src="/Tiedc-juit.jpg" alt="JUIT" className="rounded-xl shadow-lg w-full h-70" />
        </div>

        {/* Text Content */}
        <div className="relative w-full lg:w-3/3 text-center lg:text-left">
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/torn-page.png')",
              backgroundSize: "125% 125%", // Increase the size of the background image
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="relative z-10 p-10 max-w-full"  style = {cardTextStyle}>
            <h2 className="text-black text-3xl font-bold lg:text-left ml-2">TIEDC-JUIT</h2>
            <p className="text-black mt-4 leading-relaxed ml-4 mr-1">
              <strong>The Technology Incubation and Entrepreneurship Development Cell (TIEDC)</strong> is an initiative to foster innovation, creativity, and entrepreneurship within academic and business communities. Established in 2017 with support from the <strong>Department of Industries, Govt. of Himachal Pradesh</strong>, we aim to create a dynamic platform for individuals with innovative ideas and visions. By bridging the gap between the corporate world and aspiring entrepreneurs, we nurture an entrepreneurial ecosystem where ideas flourish and opportunities thrive, inspiring the next generation of entrepreneurs and driving positive change in our community.
            </p>
            <a href="https://www.juit.ac.in/tiedc-cell" className="text-white mb-2 inline-block hover:underline ml-3">
              Explore JUIT
            </a>
          </div>
        </div>
      </div>

      {/* Second Section: E-Summit */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="relative w-full lg:w-3/3 text-center lg:text-left">
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/torn-page.png')",
              backgroundSize: "125% 125%", // Increase the size of the background image
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="relative z-10 p-10 max-w-full"  style = {cardTextStyle}>
            <h2 className="text-black text-3xl font-bold mb-4 text-center lg:text-left  ml-4">
              What is E-Summit
            </h2>
            <p className="text-black mt-4 leading-relaxed ml-4">
              <i>
                <strong>"An entrepreneur is someone who jumps off a cliff and builds a plane on the way down." – Reid Hoffman</strong>
              </i>
            </p>
            <p className="text-black mt-4 leading-relaxed ml-4 mr-3 mb-4">
              The Entrepreneurship Summit (E-Summit) at JUIT is a dynamic event aimed at unlocking entrepreneurial potential. It brings together experts from the startup and corporate worlds for leadership talks, inspiring competitions, and networking sessions. Designed to inspire and nurture entrepreneurship, the E-Summit offers students a platform to explore innovative ideas and gain insights from industry leaders. Past editions have featured renowned speakers and attracted participants from various colleges and universities, promising a transformative experience for the next generation of entrepreneurs.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-2/3">
          <img src="/Dummy.jpeg" alt="TIEDC" className="rounded-xl shadow-lg w-full" />
        </div>
      </div>
    </div>
  );
}

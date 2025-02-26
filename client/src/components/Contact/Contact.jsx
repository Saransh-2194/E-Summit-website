//// filepath: /c:/Users/saran/OneDrive/Desktop/programming/Projects/E-Summit 2025/client/src/components/Contact/Contact.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Akshit Sharma",
    role: "Coordinator",
    description: "Leading with vision and purpose.",
    query: "Overall Coordinator",
    image: "./Council/Akshit Sharma.png",
    email: "",
    linkedin: "https://www.linkedin.com/in/actuallyakshit/"
  },
  {
    name: "Geetansh Singh",
    role: "Coordinator",
    description: "Empowering the team with excellence.",
    query: "Overall Coordinator",
    image: "./Council/Geetansh Singh.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/geetansh-singh-/"
  },
  {
    name: "Sanya Jain",
    role: "Public Relations Head",
    description: "Building bridges with the world.",
    query: "Events and PR",
    image: "./Council/Sanya Jain.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/jainsanya/"
  },
  {
    name: "Priyanshi Jain",
    role: "Corporate Relations Head",
    description: "Building bridges with industry.",
    query: "Speakers",
    image: "./Council/Priyanshi Jain.jpeg",
    email: "",
    linkedin: "https://www.linkedin.com/in/jain-priyanshii/"
  },
  {
    name: "Akash Gupta",
    role: "Finance & Sponsorships Head",
    query: "Sponsorships",
    image: "./Council/Akash Gupta.JPG",
    email: "",
    linkedin: "https://www.linkedin.com/in/akash-gupta-ai-ml/"
  },
  {
    name: "Saransh Agarwal",
    role: "Design & Tech team member",
    description: "Crafting the digital experience.",
    query: "Website and Technical",
    image: "./Council/Saransh Agarwal.jpg",
    email: "work.saranshagarwal@gmail.com",
    linkedin: "https://www.linkedin.com/in/saransh-ag21/"
  },
  {
    name: "Mithas Aggarwal",
    role: "Design Head",
    description: "Crafting the digital experience.",
    query: "Design and Technical",
    image: "./Council/mithas.jpeg",
    email: "",
    linkedin: "https://www.linkedin.com/in/mithasaggarwal-/"
  },
  {
    name: "Kanishka Sharma",
    role: "Social Media Head",
    description: "Sharing experiences with the world.",
    query: "Social Media",
    image: "./Council/kanishka.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/kanishka-sharma-b6994a256/"
  },
  {
    name: "Akshit Sharma",
    role: "Student Mentor",
    description: "Guiding the team with experience.",
    query: "Website and Technical",
    image: "./Council/Akshit sharma.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/akshit-sharmaa/"
  },
  {
    name: "Ashmi Sharma",
    role: "Events & Operations Head",
    description: "Ensuring seamless execution.",
    query: "Events and PR",
    image: "./Council/Ashmi Sharma.jpg",
    email: "sharmaashmi142004@gmail.com",
    linkedin: "https://www.linkedin.com/in/ashmi-sharma42/"
  }
];

const groupedTeamMembers = teamMembers.reduce((acc, member) => {
  if (!acc[member.query]) {
    acc[member.query] = [];
  }
  acc[member.query].push(member);
  return acc;
}, {});

const cardTextStyle = {
  fontFamily: "'Comic Neue', cursive",
};
function TeamMemberCard({ member, index }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const cardRef = useRef(null);

  // Update mobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = () => {
    if (isMobile) {
      setShowOverlay((prev) => !prev);
    }
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setShowOverlay(false);
    }
  };

  const handleScroll = () => {
    if (isMobile) {
      setShowOverlay(false);
    }
  };

  useEffect(() => {
    if (isMobile) {
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (isMobile) {
        document.removeEventListener('click', handleClickOutside);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMobile]);


  return (
    <div
      ref={cardRef}
      key={index}
      onClick={handleCardClick}
      className="relative group bg-white p-8 rounded-lg w-full max-w-xs shadow-lg hover:shadow-2xl transition-shadow duration-300 border-black border-4 m-4"
      style={{ boxShadow: '-20px 20px 0px 0px black' }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-xl font-semibold mt-4 text-gray-800" style={cardTextStyle}>
        {member.name}
      </h3>
      <p className="text-gray-600" style={cardTextStyle}>{member.role}</p>
      <p className="mt-2 text-gray-500 text-sm" style={cardTextStyle}>
        {member.description}
      </p>
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-yellow-400 to-transparent rounded-br-lg transition-opacity duration-300 
          ${showOverlay ? "opacity-100" : "opacity-0"} ${!isMobile ? "group-hover:opacity-100" : ""}`}
      >
        <div className="absolute bottom-0 left-0 p-4 flex gap-4 items-center">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}&su=Hello%20${member.name}&body=Hi%20${member.name},`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/gmail.png" alt="Email" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const pageStyle = {
    backgroundImage: "url('/bg-1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    fontFamily: "'Comic Neue', cursive",
  };

  return (
    <div className="w-full py-8 pt-30 bg-pink-400 overflow-x-hidden" style={pageStyle}>
      <div className="flex justify-center mb-12">
        <motion.img
          src="/team.png"
          alt="Our Team"
          className="h-12 md:h-16 lg:h-25"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
      {Object.keys(groupedTeamMembers).map((query, index) => (
        <div key={index} className="mb-16" style={cardTextStyle}>
          <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center" style={{ textShadow: "4px 4px 0px black", fontFamily: "'Comic Neue', cursive", }}>
            {query} {query !== "Overall Coordinator" ? "related Queries" : ""}
          </h1>
          <div className="flex flex-wrap justify-center gap-12">
            {groupedTeamMembers[query].map((member, idx) => (
              <TeamMemberCard key={idx} member={member} index={idx} />
            ))}
          </div>
        </div>
      ))}
      {/* How to Reach JUIT Section */}
      <div className="mt-20 px-10 md:px-20 lg:px-32 text-center mb-10">
        <h2 className="text-6xl font-bold text-yellow-400 mb-14" style={{ textShadow: "4px 4px 0px black", fontFamily: "'Comic Neue', cursive", }}>
          How to Reach JUIT
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
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
            <div className="relative z-10 p-10 max-w-full" style = {cardTextStyle}>
              <p className="text-lg text-gray-800 leading-relaxed mb-6 ml-6 mt-4">
                Jaypee University of Information Technology (JUIT) is located in Waknaghat, Solan, Himachal Pradesh. Here are the ways to reach JUIT:
              </p>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-black mb-2 ml-6" style = {cardTextStyle}>By Air:</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4 ml-6">
                  The nearest airport is Shimla Airport, which is approximately 30 km from the campus. You can take a taxi from the airport to reach JUIT.
                </p>
                <h3 className="text-2xl font-bold text-black mb-2 ml-6 " style = {cardTextStyle}>By Train:</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4 ml-6 ">
                  The nearest railway station is Kalka Railway Station, which is around 40 km from the campus. From Kalka, you can take a taxi or a bus to reach JUIT.
                </p>
                <h3 className="text-2xl font-bold text-black mb-2 ml-6 " style = {cardTextStyle}>By Road:</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4 ml-6 mb-10">
                  JUIT is well connected by road. You can take a bus or drive to the campus. The university is located on the Shimla-Kalka Highway (NH-22).
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-2/3">
            <iframe
              title="JUIT Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.348057943318!2d77.06758407586845!3d31.016550974448627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057db24364e085%3A0x4f4fefd65caa0317!2sJaypee%20University%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1740157345380!5m2!1sen!2sin"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
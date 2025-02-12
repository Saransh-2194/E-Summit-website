//// filepath: /c:/Users/saran/OneDrive/Desktop/programming/Projects/E-Summit 2025/client/src/components/Contact/Contact.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Akshit Sharma",
    role: "Coordinator",
    description: "Leading with vision and purpose.",
    query: "Overall Coordinator",
    image: "speaker-dummy.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/actuallyakshit/"
  },
  {
    name: "Geetansh Singh",
    role: "Coordinator",
    description: "Empowering the team with excellence.",
    query: "Overall Coordinator",
    image: "speaker-dummy.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/geetansh-singh-/"
  },
  {
    name: "Sanya Jain",
    role: "Public Relations Head",
    description: "Building bridges with the world.",
    query: "Events and PR",
    image: "speaker-dummy.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/jainsanya/"
  },
  {
    name: "Priyanshi Jain",
    role: "Corporate Relations Head",
    description: "Building bridges with industry.",
    query: "Speakers",
    image: "speaker-dummy.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/jain-priyanshii/"
  },
  {
    name: "Akash Gupta",
    role: "Finance & Sponsorships Head",
    query: "Sponsorships",
    image: "speaker-dummy.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/akash-gupta-ai-ml/"
  },
  {
    name: "Saransh Agarwal",
    role: "Design & Tech team member",
    description: "Crafting the digital experience.",
    query: "Website and Technical",
    image: "speaker-dummy.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/saransh-ag21/"
  },
  {
    name: "Mithas Aggarwal",
    role: "Design Head",
    description: "Crafting the digital experience.",
    query: "Design and Technical",
    image: "speaker-dummy.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/mithasaggarwal-/"
  },
  {
    name: "Kanishka Sharma",
    role: "Social Media Head",
    description: "Sharing experiences with the world.",
    query: "Social Media",
    image: "speaker-dummy.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/kanishka-sharma-b6994a256/"
  },
  {
    name: "Akshit Sharma",
    role: "Student Mentor",
    description: "Guiding the team with experience.",
    query: "Website and Technical",
    image: "speaker-dummy.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/akshit-sharmaa/"
  },
  {
    name: "Ashmi Sharma",
    role: "Events & Operations Head",
    description: "Ensuring seamless execution.",
    query: "Events and PR",
    image: "speaker-dummy.jpg",
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
  fontFamily: "'Comic Neue'",
};

function TeamMemberCard({ member, index }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const cardRef = useRef(null);

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
    minHeight: "100vh",
    fontFamily: "'Comic Neue', cursive",
  };

  return (
    <div className="w-full py-8 pt-30 bg-pink-400 overflow-x-hidden custom-scrollbar" style={pageStyle}>
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
          <h1 className="text-4xl font-bold text-center mb-8 text-black font-extrabold"
            style={cardTextStyle}>
            {query} {query !== "Overall Coordinator" ? "related Queries" : ""}
          </h1>
          <div className="flex flex-wrap justify-center gap-12">
            {groupedTeamMembers[query].map((member, idx) => (
              <TeamMemberCard key={idx} member={member} index={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
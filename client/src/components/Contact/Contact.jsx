import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: "Akshit Sharma",
        role: "Coordinator",
        description: "Leading with vision and purpose.",
        query: "Overall Coordinator",
        image: "",
        email: "",
        linkedin: "https://www.linkedin.com/in/actuallyakshit/"
      },
      {
        name: "Geetansh Singh",
        role: "Coordinator",
        description: "Empowering the team with excellence.",
        query: "Overall Coordinator",
        image: "",
        email: "",
        linkedin: "https://www.linkedin.com/in/geetansh-singh-/"
      },
      {
        name: "Sanya Jain",
        role: "Public Relations Head",
        description: "Building bridges with the world.",
        query: "Events and PR",
          image: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/jainsanya/"
      },
      {
          name: "Priyanshi Jain",
          role: "Corporate Relations Head",
        description: "Building bridges with industry.",
        query: "Speakers",
          image: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/jain-priyanshii/"
        },
        {
          name: "Akash Gupta",
          role: "Finance & Sponsorships Head",
          query: "Sponsorships",
            image: "",
            email: "",
            linkedin: "https://www.linkedin.com/in/akash-gupta-ai-ml/"
        },
        {
          name: "Saransh Agarwal",
          role: "Design & Tech team member",
          description: "Crafting the digital experience.",
          query: "Website and Technical",
            image: "",
            email: "",
            linkedin: "https://www.linkedin.com/in/saransh-ag21/"
        
        },
        {
          name: "Mithas Aggarwal",
          role: "Design Head",
          description: "Crafting the digital experience.",
          query: "Design and Technical",
            image: "",
            email: "",
            linkedin: "https://www.linkedin.com/in/mithasaggarwal-/"
        },
      {
        name: "Kanishka Sharma",
        role: "Social Media Head",
        description: "Sharing experiences with the world.",
        query: "Social Media",
          image: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/kanishka-sharma-b6994a256/"
      },
      {
        name: "Akshit Sharma",
        role: "Student Mentor",
        description: "Guiding the team with experience.",
        query: "Website and Technical",
          image: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/akshit-sharmaa/"
      },
      {
        name: "Ashmi Sharma",
        role: "Events & Operations Head",
        description: "Ensuring seamless execution.",
        query: "Events and PR",
        image: "/./Council/Ashmi.jpg",
        email: "sharmaashmi142004@gmail.com",
        linkedin: "https://www.linkedin.com/in/ashmi-sharma42/",
      
      }
];

const groupedTeamMembers = teamMembers.reduce((acc, member) => {
  if (!acc[member.query]) {
    acc[member.query] = [];
  }
  acc[member.query].push(member);
  return acc;
}, {});

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 pt-30">
      <div className="flex justify-center mb-12">
        <motion.img
          src="/team.png"
          alt="Our Team"
          className="h-12 md:h-16 lg:h-22"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
      {Object.keys(groupedTeamMembers).map((query, index) => (
        <div key={index} className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            {query} {query !== "Overall Coordinator" ? "related Queries" : ""}
          </h1>
          <div className="flex flex-wrap justify-center gap-12">
            {groupedTeamMembers[query].map((member, index) => (
              <motion.div
                key={index}
                className={`bg-white p-8 rounded-lg w-72 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative border-black border-4 m-8`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ boxShadow: '-20px 20px 0px 0px black' }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold mt-4 font-['Exo_2'] text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-['Exo_2']">{member.role}</p>
                <p className="mt-2 text-gray-500 font-['Exo_2'] text-sm">
                  {member.description}
                </p>

                {/* Hover Gradient & Icons */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-transparent rounded-br-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-4 flex gap-4 items-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        target="_blank"
                        rel="noopener noreferrer"
                        src="/linkedin.png"
                        alt="LinkedIn"
                        className="w-8 h-8"
                      />
                    </a>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}&su=Hello%20${member.name}&body=Hi%20${member.name},`} target="_blank" rel="noopener noreferrer"
                    >
                      <img src="/gmail.png" alt="Email" className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";

const events = [
  { 
    name: "Fundfrontier", 
    details: "FundFrontier is an investment challenge where startups pitch their ideas to a panel of investors, aiming to secure funding. Participants showcase their business acumen, persuasion, and strategic thinking through live negotiations and funding rounds. It’s a unique opportunity to gain real-world experience in venture funding." 
  },
  { 
    name: "Ipl auction", 
    details: "The \"Pitch Panic: Ultimate IPL Auction\" is a two-round event where teams first compete in a cricket and IPL quiz to qualify, then bid on players to build the best squad under a ₹100 crore budget. Teams will strategise, balancing star and emerging players while adhering to budget rules. Judging is based on squad balance, budget use, and player selection, with prizes for the best team and strategy." 
  },
  { 
    name: "Stock titan", 
    details: "Stock Titans: The Investment Showdown is a real-time stock market simulation where participants compete to build the most profitable portfolio. With live updates, themed challenges, and a market crash, the event tests financial acumen and risk management. Winners receive cash prizes, StockGro credits, and mentorship opportunities." 
  },
  { 
    name: "Design Sphere", 
    details: "Get ready to explore the limitless world of design from the comfort of your own space! Our upcoming online design event is a celebration of creativity, innovation, and artistic expression. Whether you’re a seasoned designer or just starting your creative journey, this event will bring together a vibrant community of thinkers, creators, and visionaries." 
  },
  { 
    name: "Summit Scape", 
    details: "SummitScape 2025 is a digital engagement initiative where attendees capture and share dynamic moments from E-Summit 2025 on social media, competing for the most likes and comments. Participants will showcase their creativity through photos and reels, amplifying the event's digital presence. Top contributors will be recognized and featured on the official Instagram pages." 
  },
  { 
    name: "Valorant Vortex", 
    details: "The Valorant Gaming Tournament brings together players to compete in fast-paced FPS battles. Teams showcase their precision, strategy, and teamwork as they go up against skilled opponents to claim the title. Players can specialize in roles like duelist, sentinel, or controller, with exciting rewards for the top performers." 
  },
  { 
    name: "BizQuiz", 
    details: "Biz Quiz is a competitive event for business enthusiasts to test their knowledge across topics like startups, market trends, and financial strategies. Participants will face multiple rounds, including rapid-fire questions, audio-visual challenges, and case-solving. It's a dynamic opportunity to showcase expertise and compete for the top spot." 
  },
  { 
    name: "Software Hackathon – Tech for a Greener Future", 
    details: `This software-focused hackathon pushes developers to create applications, AI-driven models, and blockchain-based solutions for sustainability. From urban planning to smart energy consumption, coders will develop scalable digital innovations.
    Themes: Sustainability, retro games animation etc.
    What to Expect: AI, ML, blockchain-based software solutions etc. Live demonstrations and final pitches.` 
  },
  { 
    name: "Hardware Hackathon - Innovate for Sustainability", 
    details: `The Hardware Hackathon challenges participants to build innovative, tangible solutions addressing sustainability issues. Whether it's energy-efficient devices, smart waste management, or IoT-based urban solutions, this event focuses on real-world impact through hardware development.
    Themes: Sustainability.
    What to Expect: Prototype development using IoT, AI, and smart materials. Live mentorship and feedback. Hardware exhibition-style showcase.` 
  },
  { 
    name: "Codathon – The Ultimate Coding Relay", 
    details: `Test your problem-solving and algorithmic skills in this high-speed coding relay! The Codathon features a time-bound, DSA-based challenge where teams must solve progressively difficult problems in a competitive format.
    Challenge Format: Individual speed coding challenge.
    What to Expect: Algorithm-intensive problems. Time-bound coding sessions.`
  },
];

export default function Description() {
  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{
        backgroundImage: "url('/events-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        fontFamily: "'Comic Neue', cursive",
      }}
    >
      <div className="relative bg-white border-8 border-black rounded-3xl shadow-2xl p-10 max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-yellow-400 uppercase mb-10 text-center" style={{ textShadow: "4px 4px 0px black", fontFamily: "'Comic Neue', cursive" }}>
          Event Descriptions
        </h1>
        {events.map((event, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-bold text-black uppercase mb-2" style={cardTextStyle}>{event.name}</h2>
            <p className="text-lg text-gray-800 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{event.details}</p>
          </div>
        ))}
        <div className="absolute -top-5 -left-5 w-12 h-12 bg-pink-500 border-4 border-black rounded-full"></div>
        <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-blue-500 border-4 border-black rounded-full"></div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function Register() {
  const plans = [
    {
      name: "PRIME",
      price: "₹999",
      features: [
        { text: "Participation in All Events", filled: true },
        { text: "Access to Guest Lectures", filled: true },
        { text: "Event certificates", filled: true },
        { text: "Goodies", filled: false },
        { text: "Food & Lodging", filled: false },
      ],
      link: "https://forms.gle/saqFzSuD9NrsK4Nz9"
    },
    {
      name: "GOLD",
      price: "₹1299",
      features: [
        { text: "Participation in All Events", filled: true },
        { text: "Access to Guest Lectures", filled: true },
        { text: "Event certificates", filled: true },
        { text: "Goodies", filled: true },
        { text: "Food & Lodging", filled: false },
      ],
      link: "https://forms.gle/mQoodqAAXyuLZfyX7"
    },
    {
      name: "PLATINUM",
      price: "₹1899",
      features: [
        { text: "Participation in All Events", filled: true },
        { text: "Access to Guest Lectures", filled: true },
        { text: "Event certificates", filled: true },
        { text: "Goodies", filled: true },
        { text: "Food & Lodging", filled: true, description: ["2 meals per day", "Accommodation in campus hostels", "24/7 access to campus facilities"] },
      ],
      link: "https://forms.gle/ZRU2D8RQKpRFCWkw6"
    },
  ];

  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };

  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{
        backgroundImage: "url('/bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        fontFamily: "'Comic Neue', cursive",
      }}
    >
      <div className="flex justify-center mb-14 mt-14 text-center">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-yellow-400 m-6" style={{ textShadow: "3px 3px 0px black", fontFamily: "'Comic Neue', cursive" }}>
          Buy passes for E-Summit 2025
        </h1>
      </div>
      {/* Registration Cards */}
      <div className="flex flex-wrap justify-center gap-14 mb-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white border-4 border-black rounded-xl shadow-lg p-6 w-full sm:w-96 flex flex-col items-start mt-2 relative h-120"
            style={{ boxShadow: '-20px 20px 0px 0px black', ...cardTextStyle }}
          >
            <div className="flex justify-center w-full mb-4" style={cardTextStyle}>
              <h2 className="text-4xl font-bold text-black" style={cardTextStyle}>{plan.name}</h2>
            </div>
            <ul className="mb-4 text-xl mt-10 w-full" style={cardTextStyle}>
              {plan.features.map((feature, i) => (
                <li key={i} className="flex flex-col items-start text-gray-700 mb-2">
                  <div className="flex items-center cursor-pointer" onClick={() => feature.text === "Food & Lodging" && toggleDescription(index)}>
                    <span
                      className={`w-4 h-4 mr-3 rounded-full border-2 border-[rgb(0, 0, 0)] ${feature.filled ? 'bg-[rgb(254,222,87)]' : 'bg-white'}`}
                    ></span>
                    <span className={feature.filled ? "" : "line-through"}>{feature.text}</span>
                    {feature.filled && feature.text === "Food & Lodging" && feature.description && (
                      <img
                        src="/arrow-circle-direction-down.webp"
                        alt="Toggle Description"
                        className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${showDescription[index] ? 'rotate-180' : ''}`}
                      />
                    )}
                  </div>
                  {feature.filled && feature.text === "Food & Lodging" && feature.description && showDescription[index] && (
                    <ul className="ml-8 mt-2 list-disc">
                      {feature.description.map((desc, j) => (
                        <li key={j} className="text-sm">{desc}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <hr className="w-full border-t-2 border-gray-300 my-2" />
            <div className="mt-auto w-full flex justify-between items-center">
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold" style={cardTextStyle}>Total Payable</span>
                <span className="text-2xl font-semibold" style={cardTextStyle}>{plan.price}</span>
              </div>
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg"
                style={cardTextStyle}
              >
                REGISTER
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

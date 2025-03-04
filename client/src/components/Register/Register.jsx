import React from "react";

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
        { text: "Food & Lodging", filled: true },
      ],
      link: "https://forms.gle/ZRU2D8RQKpRFCWkw6"
    },
  ];

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
      {/* Registration Cards */}
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-white border-4 border-black rounded-xl shadow-lg p-4 max-w-3xl w-full flex flex-col items-start mb-4 relative h-60"
        >
          <div className="flex justify-between w-full">
            <h2 className="text-2xl font-bold text-black">{plan.name}</h2>
            <span className="text-xl font-semibold">{plan.price}</span>
          </div>
          <ul className="mt-2 mb-2 text-sm">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <span
                  className={`w-3 h-3 mr-2 rounded-full border-2 border-[rgb(0, 0, 0)] ${feature.filled ? 'bg-[rgb(254,222,87)]' : 'bg-white'}`}
                ></span>
                {feature.text}
              </li>
            ))}
          </ul>
          <a
            href={plan.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg mt-4 self-center"
          >
            SELECT
          </a>
        </div>
      ))}
    </div>
  );
}

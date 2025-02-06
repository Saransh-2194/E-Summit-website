import React, { useState } from "react";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-96 h-56 flex justify-center items-center cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Shadow Layer */}
      <div className="absolute w-full h-full bg-black rounded-xl translate-x-2 translate-y-2"></div>

      {/* Rotating Card */}
      <div
        className={`relative w-full h-full bg-white border-4 border-black rounded-xl shadow-lg p-6 transform transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Front Side */}
        <div className={`absolute w-full h-full flex justify-center items-center ${isFlipped ? "hidden" : ""}`}>
          <h2 className="text-2xl font-bold">Front Content</h2>
        </div>

        {/* Back Side */}
        <div className={`absolute w-full h-full flex justify-center items-center bg-gray-200 rotate-y-180 ${isFlipped ? "" : "hidden"}`}>
          <p className="text-lg">This is the back of the card!</p>
        </div>
      </div>
    </div>
  );
}

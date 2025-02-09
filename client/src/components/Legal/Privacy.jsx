import React from "react";

export default function Privacy() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-6 py-10"
      style={{
        backgroundImage: "url('/home-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative bg-white border-8 border-black rounded-3xl shadow-2xl p-10 max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-yellow-400 uppercase mb-4" style={{ textShadow: "4px 4px 0px black" }}>
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="absolute -top-5 -left-5 w-12 h-12 bg-pink-500 border-4 border-black rounded-full"></div>
        <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-blue-500 border-4 border-black rounded-full"></div>
      </div>
    </div>
  );
}

import React from "react";

export default function Register() {
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
      <div className="relative bg-white border-8 border-black rounded-3xl shadow-2xl p-10 max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-yellow-400 uppercase mb-10" style={{ textShadow: "2px 2px 0px black", fontFamily: "'Comic Neue', cursive" }}>
          Coming Soon
        </h1>
      </div>
    </div>
  );
}

import React from "react";

export default function Refund() {
  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-6 py-20 mt-8"
      style={{
        backgroundImage: "url('/speakers-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        fontFamily: "'Comic Neue', cursive",
      }}
    >
      <div className="relative bg-white border-8 border-black rounded-3xl shadow-2xl p-10 max-w-4xl text-center" style = {cardTextStyle}>
        <h1 className="text-4xl font-bold text-yellow-400 uppercase mb-4" style={{ textShadow: "4px 4px 0px black", fontFamily: "'Comic Neue', cursive",}}>
          Refund & Cancellation Policy
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed" style = {cardTextStyle}>
          1. No Participant-Initiated Refunds
          <br />
          Registration fees for the E-Summit are non-refundable, except in specific cases outlined below.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          2. Eligible Refund Scenarios
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed" style = {cardTextStyle}>
          Refunds will only be issued under the following circumstances:
          <ul className="list-disc list-inside">
            <li>Duplicate Payments: If a participant accidentally makes multiple payments for the same registration.</li>
            <li>Accidental Overcharges: If an error results in a participant being charged more than the actual registration fee.</li>
            <li>Event Cancellation: Although unlikely, in the rare event of a full cancellation by the organizers, participants will receive a refund.</li>
          </ul>
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          3. Refund Process
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Refund requests must be made via email to <a href="mailto:tiedc@juitsolan.in" className="text-blue-500">tiedc@juitsolan.in</a> with proof of payment.
          <br />
          Approved refunds will be processed through bank transfer.
          <br />
          The exact timeframe for receiving refunds depends on the university’s processing time.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          4. Policy Changes
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          This refund policy is subject to change. Any updates will be communicated via the event website.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          5. Contact Us
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed" style = {cardTextStyle}>
          For refund-related inquiries, please email <a href="mailto:tiedc@juitsolan.in" className="text-blue-500">tiedc@juitsolan.in</a>.
        </p>
        <div className="absolute -top-5 -left-5 w-12 h-12 bg-pink-500 border-4 border-black rounded-full"></div>
        <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-blue-500 border-4 border-black rounded-full"></div>
      </div>
    </div>
  );
}

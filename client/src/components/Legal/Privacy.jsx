import React from "react";

export default function Privacy() {
  const cardTextStyle = {
    fontFamily: "'Comic Neue', cursive",
  };
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-6 py-20 mt-8"
      style={{
        backgroundImage: "url('/home-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        fontFamily: "'Comic Neue', cursive",
      }}
    >
      <div className="relative bg-white border-8 border-black rounded-3xl shadow-2xl p-10 max-w-4xl" >
        <h1 className="text-4xl font-bold text-yellow-400 uppercase mb-4 text-center" style={{ textShadow: "4px 4px 0px black", fontFamily: "'Comic Neue', cursive",}} >
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed" style = {cardTextStyle}>
          Welcome to the official website of the E-Summit organized by JUIT. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our website.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          1. Information We Collect
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed"style = {cardTextStyle}>
          We collect the following personal information through our registration form:
          <ul className="list-disc list-inside" style = {cardTextStyle}>
            <li >Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>University</li>
          </ul>
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2"style = {cardTextStyle}>
          2. Purpose of Data Collection
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed" style = {cardTextStyle}>
          The information collected is used for:
          <ul className="list-disc list-inside" style = {cardTextStyle}>
            <li>Registering participants for the E-Summit</li>
            <li>Communicating important updates about the event</li>
            <li>Providing event-related information and networking opportunities</li>
            <li>Informing users about future summits and related activities</li>
          </ul>
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          3. Data Sharing
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed" style = {cardTextStyle}>
          We do not share your personal information with third parties, including sponsors or partners.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          4. Cookies and Tracking
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Our website does not use cookies or any tracking technologies.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          5. Data Retention
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          We retain user data for future summits to provide updates and relevant information.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          6. Data Modification and Deletion
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Users can request modification or deletion of their personal data by emailing us at <a href="mailto:tiedc@juitsolan.in" className="text-blue-500">tiedc@juitsolan.in</a>.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          7. Data Security
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          We implement standard security measures to protect user information from unauthorized access, alteration, disclosure, or destruction.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          8. Age Restrictions
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          There are no age restrictions for using our website or registering for the E-Summit.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          9. Changes to This Policy
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          We may update this policy from time to time. However, users will not be specifically notified of changes.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2" style = {cardTextStyle}>
          10. Contact Us
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:tiedc@juitsolan.in" className="text-blue-500">tiedc@juitsolan.in</a>.
        </p>
        <div className="absolute -top-5 -left-5 w-12 h-12 bg-pink-500 border-4 border-black rounded-full"></div>
        <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-blue-500 border-4 border-black rounded-full"></div>
      </div>
    </div>
  );
}
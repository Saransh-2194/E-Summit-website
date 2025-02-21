import React from "react";

export default function TnC() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-6 py-20 mt-10"
      style={{
        backgroundImage: "url('/events-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative bg-white border-8 border-black rounded-3xl shadow-2xl p-10 max-w-4xl">
        <h1 className="text-4xl font-bold text-yellow-400 uppercase mb-4 text-center" style={{ textShadow: "4px 4px 0px black" }}>
          Terms & Conditions
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          Welcome to the E-Summit organized by TIEDC, JUIT. By accessing or registering for this event through our website, you agree to comply with the following Terms and Conditions.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          1. Event Purpose
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          The E-Summit website facilitates:
          <ul className="list-disc list-inside">
            <li>Event Registration for interested participants</li>
            <li>Promotion of the E-Summit and its associated activities</li>
            <li>Providing Event Details including schedule, speakers, and sessions</li>
          </ul>
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          2. Eligibility
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Anyone interested in the event is eligible to register and participate.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          3. Registration and Fees
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Registration requires providing accurate personal details.
          <br />
          A participation fee is applicable.
          <br />
          A separate Refund Policy will govern any refund-related requests.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          4. Participant Conduct
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          All participants must adhere to the following guidelines:
          <ul className="list-disc list-inside">
            <li>Respectful Behavior: Participants must engage respectfully with fellow attendees, speakers, and organizers.</li>
            <li>No Misuse: The event platform should not be used for spamming, harassment, or any unlawful activity.</li>
            <li>Compliance: Participants must follow all event-related guidelines set by the organizers.</li>
          </ul>
          Failure to comply may result in immediate disqualification.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          5. Event Modifications
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          The organizers reserve the right to modify the event schedule, speakers, or other details if necessary.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          6. Violations and Disqualification
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          If a participant violates these Terms and Conditions, the organizing committee has the right to disqualify them from the event.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          7. Content Usage Rights
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          By participating, attendees grant the organizers permission to use any submitted content (e.g., presentations, pitches) for promotional purposes.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          8. Liability Disclaimer
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          The organizers are not responsible for any technical issues, including website downtime or registration failures.
          <br />
          The organizers are not liable for any data loss or unauthorized access beyond their control.
          <br />
          The organizers are not responsible for actions taken by third parties, including event sponsors or vendors.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          9. Participation Benefits
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          All attendees who successfully attend the event will receive:
          <ul className="list-disc list-inside">
            <li>A Participation Certificate</li>
            <li>Event-related Goodies</li>
          </ul>
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          10. Dispute Resolution
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Any disputes must be addressed by contacting the organizing committee.
          <br />
          The decision of the organizing committee shall be final and binding.
          <br />
          Legal matters, if any, shall be subject to the jurisdiction of Solan, Himachal Pradesh.
        </p>
        <h3 className="text-2xl font-bold text-black uppercase mb-2">
          11. Contact Us
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          For any queries related to these Terms and Conditions, please contact us at <a href="mailto:tiedc@juitsolan.in" className="text-blue-500">tiedc@juitsolan.in</a>.
        </p>
        <div className="absolute -top-5 -left-5 w-12 h-12 bg-pink-500 border-4 border-black rounded-full"></div>
        <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-blue-500 border-4 border-black rounded-full"></div>
      </div>
    </div>
  );
}

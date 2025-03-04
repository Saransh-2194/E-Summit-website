import React, { useState } from 'react';

const faqs = [
  {
    question: "What is the E-Summit, and who can participate?",
    answer: "The Entrepreneurship Summit (E-Summit) at JUIT is a dynamic event designed to unlock entrepreneurial potential. It brings together industry experts, startup founders, and students for leadership talks, competitions, and networking sessions. Any entrepreneur or student from anywhere can participate."
  },
  {
    question: "How can I register for the E-Summit?",
    answer: "You can register for the E-Summit through our official website by filling out the registration form."
  },
  {
    question: "Is there a participation fee?",
    answer: "Yes, there is a participation fee. Please refer to the registration page for more details."
  },
  {
    question: "Will I receive a certificate for attending?",
    answer: "Yes, all attendees who successfully attend the event will receive a participation certificate."
  },
  {
    question: "What benefits do participants receive?",
    answer: "Participants will get access to: Networking opportunities with industry leaders and fellow entrepreneurs, Exciting goodies and merchandise, Expert talks from professionals in the startup and corporate world, Competitions with exciting rewards."
  },
  {
    question: "Can I get a refund if I can’t attend the event?",
    answer: "Please refer to our Refund Policy on the website for details."
  },
  {
    question: "Will food be provided during the event?",
    answer: "Yes, participants will receive coupons for breakfast and lunch at the university mess. For dinner, participants can visit our food sponsors."
  },
  {
    question: "Is accommodation available for outstation participants?",
    answer: "Yes, accommodation is available at the university, depending upon the tier chosen. Participants can choose between registering with or without accommodation. However, girl students have to mandatorily register with an accommodation."
  },
  {
    question: "What should I bring to the event?",
    answer: "Participants will receive an email well in advance detailing what they need to bring."
  },
  {
    question: "How can I contact the organizers?",
    answer: "You can visit the Contact Us page on the website or email us at tiedc@juitsolan.in."
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        fontFamily: "'Comic Neue', cursive",
      }}
    >
      <div className="relative bg-white border-8 border-black rounded-3xl shadow-2xl p-10 max-w-5xl w-full mb-15">
        <h1 className="text-4xl font-bold text-yellow-400 uppercase mb-15 text-center" style={{ textShadow: "4px 4px 0px black", fontFamily: "'Comic Neue', cursive" }}>
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-300 pb-4 relative">
              <div
                role="button"
                tabIndex={0}
                className="w-full text-left text-xl font-bold text-black uppercase mb-2 flex justify-between items-center focus:outline-none cursor-pointer"
                onClick={() => toggleFaq(index)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleFaq(index);
                  }
                }}
              >
                {faq.question}
                <span className="ml-2">
                  <img
                    src="./arrow-circle-direction-down.webp"
                    alt="Toggle"
                    className={`w-8 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </span>
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute -top-5 -left-5 w-12 h-12 bg-pink-500 border-4 border-black rounded-full"></div>
        <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-blue-500 border-4 border-black rounded-full"></div>
      </div>
    </div>
  );
}

export default Faqs;
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  let lastScrollY = window.scrollY;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (route) => {
    navigate(route); // Navigate without delay
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const headerTextStyle = {
    fontFamily: "'Luckiest Guy', cursive",
    color: "white",
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 shadow-md transition-all duration-300 py-0.25 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="px-4 mx-auto max-w-screen-xl flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src="events.png" alt="SIAM Logo" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center lg:order-2">
            <Link
                to="/register"
                className="text-blue bg-white hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-400 font-medium rounded-xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
                Register
            </Link>
        </div>

        {/* Expanded Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center space-x-16 items-center py-2">
          <ul className="flex space-x-16 font-serif text-base w-full justify-center header-text" style={headerTextStyle}>
            <li>
              <NavLink
                to="/"
                onClick={() => handleButtonClick("/")}
                className={({ isActive }) =>
                  `nav-links text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white font-medium hover:text-green-300 transform scale-105"
                      : "hover:text-green-200"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                onClick={() => handleButtonClick("/events")}
                className={({ isActive }) =>
                  `nav-links text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white font-medium hover:text-green-300 transform scale-105"
                      : "hover:text-green-200"
                  }`
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/speakers"
                onClick={() => handleButtonClick("/speakers")}
                className={({ isActive }) =>
                  `nav-links text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white font-medium hover:text-green-300 transform scale-105"
                      : "hover:text-green-200"
                  }`
                }
              >
                Speakers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sponsers"
                onClick={() => handleButtonClick("/sponsers")}
                className={({ isActive }) =>
                  `nav-links text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white font-medium hover:text-green-300 transform scale-105"
                      : "hover:text-green-200"
                  }`
                }
              >
                Sponsers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleButtonClick("/contact")}
                className={({ isActive }) =>
                  `nav-links text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-white font-medium hover:text-green-300 transform scale-105"
                      : "hover:text-green-200"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-green-300 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-8 w-8 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45" : "rotate-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Slide-Down Animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black bg-opacity-500 shadow-md absolute top-full left-0 right-0 py-4`}
      >
        <ul className="flex flex-col items-center space-y-5 font-serif text-base text-gray-300 header-text" style={headerTextStyle}>
          <li>
            <NavLink
              to="/"
              onClick={() => handleButtonClick("/")}
              className="nav-links px-6 py-3 rounded-lg hover:text-green-300 transition-all duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => handleButtonClick("/about")}
              className="nav-links px-6 py-3 rounded-lg hover:text-green-300 transition-all duration-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              onClick={() => handleButtonClick("/team")}
              className="nav-links px-6 py-3 rounded-lg hover:text-green-300 transition-all duration-300"
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => handleButtonClick("/contact")}
              className="nav-links px-6 py-3 rounded-lg hover:text-green-300 transition-all duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;


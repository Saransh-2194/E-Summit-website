import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleTouchStart = (event) => {
      const target = event.target.closest('.group');
      if (target) {
        target.classList.add('hover');
      }
    };

    const handleTouchEnd = (event) => {
      const target = event.target.closest('.group');
      if (target) {
        target.classList.remove('hover');
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <footer className="bg-gradient-to-t from-black to-pink-400 border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="esummitlogo.png"
                className=" h-20 mt-10 ml"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="text-white hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div> */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">E-Summit 2025</h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="/contact"
                    className="text-white hover:underline"
                    rel="noreferrer"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <Link to="/register" className="text-white hover:underline">
                    Register Now!
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/privacy" className="text-white hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/tnc" className="text-white hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="refund" className="text-white hover:underline">
                    Refund &amp; Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © {currentYear}&nbsp;
            <a href="/" className="text-white hover:underline">
              TIEDC-JUIT
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="https://www.facebook.com/tiedcjuit" className="group text-white" target="_blank">
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-130 group-hover:text-blue-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="https://www.instagram.com/tiedcjuit/" className="group text-white" target="_blank">
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-130 group-hover:text-pink-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 22"
              >
                <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="group text-white" target="_blank">
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-130 group-hover:text-blue-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="https://www.linkedin.com/company/tiedcjuit/" className="group text-white" target="_blank">
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-130 group-hover:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 22"
              >
                <path
                  fillRule="evenodd"
                  d="M22.2283 0.133301H1.77167C1.30179 0.133301 0.851161 0.319958 0.518909 0.65221C0.186657 0.984462 0 1.43509 0 1.90497V22.3616C0 22.8315 0.186657 23.2821 0.518909 23.6144C0.851161 23.9466 1.30179 24.1333 1.77167 24.1333H22.2283C22.6982 24.1333 23.1488 23.9466 23.4811 23.6144C23.8133 23.2821 24 22.8315 24 22.3616V1.90497C24 1.43509 23.8133 0.984462 23.4811 0.65221C23.1488 0.319958 22.6982 0.133301 22.2283 0.133301ZM7.15333 20.5783H3.545V9.11663H7.15333V20.5783ZM5.34667 7.5283C4.93736 7.526 4.53792 7.4025 4.19873 7.17339C3.85955 6.94428 3.59584 6.61983 3.44088 6.24099C3.28591 5.86215 3.24665 5.44589 3.32803 5.04476C3.40941 4.64362 3.6078 4.27558 3.89816 3.98708C4.18851 3.69859 4.55782 3.50257 4.95947 3.42376C5.36112 3.34495 5.77711 3.38689 6.15495 3.54429C6.53279 3.70168 6.85554 3.96747 7.08247 4.30811C7.30939 4.64876 7.43032 5.04899 7.43 5.4583C7.43386 5.73233 7.38251 6.00434 7.27901 6.25811C7.17551 6.51187 7.02198 6.7422 6.82757 6.93537C6.63316 7.12853 6.40185 7.28058 6.14742 7.38245C5.893 7.48432 5.62067 7.53392 5.34667 7.5283ZM20.4533 20.5883H16.8467V14.3266C16.8467 12.48 16.0617 11.91 15.0483 11.91C13.9783 11.91 12.9283 12.7166 12.9283 14.3733V20.5883H9.32V9.12497H12.79V10.7133H12.8367C13.185 10.0083 14.405 8.8033 16.2667 8.8033C18.28 8.8033 20.455 9.9983 20.455 13.4983L20.4533 20.5883Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Linkedin</span>
            </Link>
            <Link to="https://www.youtube.com/@tiedcjuit3132" className="group text-white" target="_blank">
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-130 group-hover:text-red-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 25 22"
              >
                <path
                  fillRule="evenodd"
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.0775 12.9973C17.4535 12.8002 17.6893 12.4106 17.6893 11.9856C17.6882 11.5617 17.4523 11.1721 17.0752 10.9761L9.66464 7.12838C9.31143 6.94494 8.88872 6.95862 8.54804 7.16598C8.20737 7.37221 8 7.74137 8 8.13902V15.8606C8 16.2594 8.20851 16.6286 8.54918 16.8348C8.73034 16.9442 8.93429 17 9.13938 17C9.32055 17 9.50171 16.9567 9.66692 16.8701L17.0775 12.9973Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Youtube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
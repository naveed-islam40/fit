import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap md:flex-row md:items-start footer-content">
          {/* Logo and Title Section */}
          <div className="w-full md:w-1/4 flex-shrink-0 text-center md:text-left mb-6 md:mb-0">
            <a className="flex title-font font-medium items-center justify-center md:justify-start text-white">
              <img src="/logo1.png" alt="logo" className="w-24 h-24" />
              <span className="ml-3 text-xl">FIT&TONE</span>
            </a>
            <p className="mt-2 text-sm text-gray-400">Be Healthy, Stronger Everyday</p>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/4 flex-shrink-0 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contact Us</h2>
            <p className="text-gray-400">Email: fit&tone@gmail.com</p>
            <p className="text-gray-400">Phone: +92 344482528</p>
            <p className="text-gray-400">Address: Lahore, Pakistan</p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/4 flex-shrink-0 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
            <nav className="list-none">
              <li><a href="/" className="text-white hover:text-gray-400">Home</a></li>
              <li><a href="/dashboard" className="text-white hover:text-gray-400">Dashboard</a></li>
              <li><a href="/about" className="text-white hover:text-gray-400">About</a></li>
              <li><a href="/contactus" className="text-white hover:text-gray-400">Contact Us</a></li>
              <li><a href="/review" className="text-white hover:text-gray-400">Review Us</a></li>
            </nav>
          </div>

          {/* Follow Us Section */}
          <div className="w-full md:w-1/4 flex-shrink-0 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Follow Us</h2>
            <div className="flex space-x-3">
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-black py-2">
          <div className="container mx-auto flex flex-wrap flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 FIT&TONE —
              <a href="https://twitter.com" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@LaibaNadeem</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

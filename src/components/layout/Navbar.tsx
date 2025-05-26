// import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { scrollToElement } from '../../utils/scroll';

const Navbar = () => {
  // const handleAboutClick = () => scrollToElement('about');

  return (
    <nav className="bg-gray-900 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Gamepad2 size={32} className="text-purple-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Popular Casual Games
          </span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          {/* <button onClick={handleAboutClick} className="hover:text-purple-400 transition-colors">
            About Us
          </button> */}
          <Link
            to="/contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

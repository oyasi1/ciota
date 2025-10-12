import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import logo from './ciota.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <img src={logo} className="h-12 w-auto" alt="Logo" />
            </div>
            
            {/* Centered Desktop Navigation with Hover Scaling */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {links.map((link) => (
                <li key={link.id} className="relative group">
                  <a
                    href={link.url}
                    className="text-gray-800 px-3 py-2 text-sm font-medium transition-all duration-200 ease-out 
                    group-hover:scale-105 group-hover:text-blue-600 transform origin-center"
                  >
                    {link.text}
                  </a>
                  {/* Optional underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 
                  group-hover:w-full"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:block">
            <ul className="flex space-x-6">
              {social.map((socialIcon) => (
                <li key={socialIcon.id}>
                  <a
                    href={socialIcon.url}
                    className="text-gray-600 hover:text-blue-500"
                    aria-label={socialIcon.text}
                  >
                    {socialIcon.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}
      >
        <ul className="px-2 pt-2 pb-4 space-y-2">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            </li>
          ))}
          
          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-6 pt-4">
            {social.map((socialIcon) => (
              <a
                key={socialIcon.id}
                href={socialIcon.url}
                className="text-gray-600 hover:text-blue-500"
                aria-label={socialIcon.text}
              >
                {socialIcon.icon}
              </a>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
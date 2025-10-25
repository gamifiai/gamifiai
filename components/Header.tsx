import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAhCAMAAAAyKFyJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIpSURBVHic7ZzbbuMwDERtEw5wCf9/2h5qUlbq0DN2E8e1GElLkhzfsWvXrl27/sPqUvQ1hR2mKVpYp0hBFw2l6AtoSZuKXqS1pC3d1zSNI01TjF6g6XqapgBptgZpmuFv2yZp4rbtT9MkSZu20kQDab4e07RImhZpuoa2/ZO0t9s6TNPoaVrM6LftnaaJ2/ZPaVokbfuSJoI0T4/SNEmapkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/QhpmhZJ09C2T9I2btuHtEzSNhTSNEmamkHTNDSt/Qjpmj5pmn5u2/lP09C2T9I2btuHtEzSNhTSNEmamkHTNPSl27b9kzTtb9t/StMkaVtyaYI0aZKmSdL0TNM0NE2zPUnb6b/7+v7P17/L6f38r2s5fQ1tG0nTJGkbbWkX7dug6XqapgBptm4z/wB8l0a9f5dLewAAAABJRU5ErkJggg==" alt="GAMIFIA Logo" className="h-10" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300">
                {link.name}
              </a>
            ))}
             <a href="#contact" className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-5 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md">
                Request Demo
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-blue-400 hover:bg-slate-700"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold mt-4 py-2 px-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300"
            >
                Request Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
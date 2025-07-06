 "use-react"

import { ModeToggle } from '@/components/mode-toggle';
import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">MyLogo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to='/' className="text-gray-600 font-bold hover:text-blue-500">Home</Link>
          <Link to='/taks' className="text-gray-600 font-bold hover:text-blue-500">Taks</Link>
          <Link to='/users' className="text-gray-600 font-bold hover:text-blue-500">User</Link>
          <Link to='/' className="text-gray-600 font-bold hover:text-blue-500">Home</Link>
    
        </div>
        <div>
            <ModeToggle/>
        </div>

        {/* Hamburger Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
         <Link to='/' className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link to='/taks' className="text-gray-600 hover:text-blue-500">Taks</Link>
          <Link to='/users' className="text-gray-600 hover:text-blue-500">User</Link>
          <Link to='/' className="text-gray-600 hover:text-blue-500">Home</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleDollarSign, BarChart2, Users, Menu, X, LogIn } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { 
      to: "#pricing", 
      icon: CircleDollarSign, 
      text: "Pricing",
      onClick: () => scrollToSection('pricing')
    },
    { 
      to: "#aifeature", 
      icon: CircleDollarSign, 
      text: "AI Assistant",
      onClick: () => scrollToSection('aifeature')
    },
    { to: "/community", icon: Users, text: "Community" },
    { 
      to: "#about", 
      icon: Users, 
      text: "About Us",
      onClick: () => scrollToSection('about')
    },
    { to: "/login", icon: LogIn, text: "Login" }
  ];

  return (
    <nav className="sticky top-0 bg-gray-800 shadow-lg border-b border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BarChart2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">Ufulu Tracker</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(({ to, icon: Icon, text, onClick }) => (
              <Link
                key={to}
                to={to}
                onClick={onClick}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-indigo-400"
              >
                <Icon className="h-5 w-5 mr-1" />
                {text}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
            {navLinks.map(({ to, icon: Icon, text, onClick }) => (
              <Link
                key={to}
                to={to}
                onClick={onClick}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-400 hover:bg-gray-700"
              >
                <Icon className="h-5 w-5 mr-2" />
                {text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
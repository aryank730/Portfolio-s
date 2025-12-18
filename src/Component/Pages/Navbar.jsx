import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { BsTwitterX, BsSun, BsMoon } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight, MdDownload } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTimes, FaCode } from 'react-icons/fa';
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { HiTerminal } from "react-icons/hi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Theme initialization
    const theme = localStorage.getItem('color-theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    // Scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      setIsDark(true);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/Aplayground', label: 'Playground' },
  ];

  const socialLinks = [
    { href: "https://github.com/aryank730", icon: <FaGithub className="w-4 h-4" />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/aryank730", icon: <FaLinkedin className="w-4 h-4" />, label: "LinkedIn" },
    { href: "https://x.com/aryan_k7_", icon: <BsTwitterX className="w-4 h-4" />, label: "Twitter" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-200/50 dark:border-gray-700/50'
      }`}>
        <div className="px-2 py-1">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink 
              to='/' 
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <FaCode className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Aryan K.
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `relative px-4 py-1.5 rounded-lg font-medium transition-all duration-300 group ${
                      isActive 
                        ? 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {item.label}
                  <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full transition-all duration-300 ${
                    location.pathname === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </NavLink>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {isDark ? <BsSun className="w-5 h-5" /> : <BsMoon className="w-5 h-5" />}
              </button>

              {/* CTA Button */}
              <NavLink
                to='/Aplayground'
                className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Playground
              </NavLink>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Theme Toggle - Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <BsSun className="w-5 h-5" /> : <BsMoon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 mt-20">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute right-4 top-4 w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <FaCode className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Aryan Katiyar</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  <span className="font-medium">{item.label}</span>
                  <MdKeyboardDoubleArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                    location.pathname === item.path ? 'text-purple-600' : 'text-gray-400'
                  }`} />
                </NavLink>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-4 space-y-3">
              <a
                href="mailto:aryankatiyar@example.com"
                className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                <SiGmail className="w-5 h-5" />
                Send Email
              </a>
              
              <a
                href="https://wa.me/your-number"
                className="flex items-center justify-center gap-3 p-4 border-2 border-green-500 text-green-600 dark:text-green-400 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
              >
                <PiWhatsappLogoDuotone className="w-5 h-5" />
                WhatsApp Chat
              </a>
            </div>

            {/* Social Links */}
            <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Terminal Section */}
            <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm">
                <div className="flex items-center justify-between text-gray-400 mb-3">
                  <div className="flex items-center space-x-2">
                    <HiTerminal className="w-4 h-4" />
                    <span>terminal</span>
                  </div>
                  <button className="text-gray-500 hover:text-gray-300 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <div className="text-green-400">
                  <span className="text-purple-400">$</span> npx create-react-app portfolio
                </div>
                <div className="text-gray-500 mt-1">
                  <span className="text-purple-400">$</span> cd portfolio && npm start
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <button className="w-full flex items-center justify-center gap-3 p-4 bg-gray-800 dark:bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105">
                <MdDownload className="w-5 h-5" />
                Download Resume
                <span className="px-2 py-1 text-xs bg-purple-600 rounded-md">PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
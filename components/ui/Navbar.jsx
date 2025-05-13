"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const navlinks = [
  { linkName: "Why Us?", href: "/why-us" },
  { linkName: "Invest", href: "/invest" },
  { linkName: "Raise", href: "/raise" },
  { linkName: "Stories", href: "/stories" },
  { linkName: "Help", href: "/help" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle mobile menu link clicks
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`${isScrolled ? 'fixed top-0 left-0 right-0 shadow-sm bg-white' : 'fixed top-0 left-0 right-0'} z-20 transition-all duration-300`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <nav className="flex justify-between items-center py-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={150}
              height={150}
              alt="logo"
              priority
            />
          </Link>

          <div className="hidden sm:flex space-x-5 items-center">
            {navlinks.map((link) => (
              <Link
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href 
                    ? "text-emerald-700" 
                    : "hover:text-emerald-700"
                }`}
                href={link.href}
                key={link.linkName}
              >
                {link.linkName}
              </Link>
            ))}
            <Link
              href="https://www.marginplus.ng/"
              className={`bg-[#014F2A] px-6 py-3 rounded-lg text-sm font-bold text-white hover:bg-emerald-800 transition-colors`}
            >
              <span className="cursor-pointer">Get Started</span>
            </Link>
          </div>
          
          <div 
            className="flex flex-col space-y-[2px] cursor-pointer sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-[30px] h-1 bg-[#014F2A] rounded-md transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-[30px] h-1 bg-[#014F2A] rounded-md transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-[30px] h-1 bg-[#014F2A] rounded-md transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col p-6">
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col space-y-6">
                {navlinks.map((link) => (
                  <Link
                    className={`text-lg font-bold transition-colors ${
                      pathname === link.href 
                        ? "text-emerald-700 border-l-4 border-emerald-700 pl-2" 
                        : "hover:text-emerald-700"
                    }`}
                    href={link.href}
                    key={link.linkName}
                    onClick={handleLinkClick}
                  >
                    {link.linkName}
                  </Link>
                ))}
                <Link
                  href="https://www.marginplus.ng/"
                  className={`bg-[#014F2A] px-6 py-3 rounded-lg text-lg font-bold text-white text-center hover:bg-emerald-800 transition-colors mt-4`}
                  onClick={handleLinkClick}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
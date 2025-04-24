"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const navlinks = [
  { linkName: "Why Us?", href: "#" },
  { linkName: "Invest", href: "#" },
  { linkName: "Raise", href: "#" },
  { linkName: "Stories", href: "#" },
  { linkName: "FAQ", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center">
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="logo"
          priority
        />

        <div className="hidden sm:flex space-x-5 items-center">
          {navlinks.map((link) => (
            <Link
              className="text-sm font-bold hover:text-emerald-700 transition-colors"
              href={link.href}
              key={link.linkName}
            >
              {link.linkName}
            </Link>
          ))}
          <Link
            href="#"
            className="bg-[#014F2A] px-6 py-3 rounded-lg text-sm font-bold text-white hover:bg-emerald-800 transition-colors"
          >
            <button className="cursor-pointer">Get Started</button>
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
                    className="text-lg font-bold hover:text-emerald-700 transition-colors"
                    href={link.href}
                    key={link.linkName}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.linkName}
                  </Link>
                ))}
                <Link
                  href="#"
                  className="bg-[#014F2A] px-6 py-3 rounded-lg text-lg font-bold text-white text-center hover:bg-emerald-800 transition-colors mt-4"
                  onClick={() => setIsMenuOpen(false)}
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
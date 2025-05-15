"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold for background change
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up or at top - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Handle mobile menu link clicks
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`
          fixed top-0 left-0 right-0 z-20 transition-all duration-300
          ${isScrolled ? "shadow-sm bg-white" : ""}
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <nav className="flex justify-between items-center py-4">
            {/* Mobile hamburger menu only visible on small screens */}
            <div className="flex items-center">
              <motion.button
                className="flex flex-col justify-center cursor-pointer sm:hidden mr-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="w-7 h-0.5 bg-[#014F2A] block mb-1.5"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-7 h-0.5 bg-[#014F2A] block mb-1.5"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-7 h-0.5 bg-[#014F2A] block"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={150}
                  height={150}
                  alt="logo"
                  priority
                  className="w-[102px] h-[24px] sm:w-[150px] sm:h-[34px]"
                />
              </Link>
            </div>

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

            {/* Mobile Get Started button only visible on small screens */}
            <Link
              href="https://www.marginplus.ng/"
              className={`sm:hidden bg-[#014F2A] px-6 py-3 rounded-lg text-sm font-bold text-white hover:bg-emerald-800 transition-colors`}
            >
              <span className="cursor-pointer">Get Started</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu - Slides from left side */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            ></motion.div>
            <motion.div
              className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform z-50 sm:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col p-6">
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-600 hover:text-gray-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </motion.button>
                </div>

                <div className="flex flex-col space-y-6">
                  {navlinks.map((link, index) => (
                    <motion.div
                      key={link.linkName}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        className={`text-lg font-medium transition-colors ${
                          pathname === link.href
                            ? "text-emerald-700 border-l-4 border-emerald-700 pl-2"
                            : "hover:text-emerald-700"
                        }`}
                        href={link.href}
                        onClick={handleLinkClick}
                      >
                        {link.linkName}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

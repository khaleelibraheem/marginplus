"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

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

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [lastScrollY, isMenuOpen]);

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
        <div className="max-w-[1400px] mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            {/* Logo moved to the left on mobile */}
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={150}
                height={150}
                alt="logo"
                priority
                className="w-[150px]"
              />
            </Link>

            {/* Hamburger menu moved to the right on mobile */}
            <motion.button
              className="flex flex-col justify-center cursor-pointer lg:hidden"
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

            {/* Desktop navigation links */}
            <div className="hidden lg:flex space-x-8 items-center">
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
              <div className="flex gap-3"><Button
                text={"Log in"}
                bgColor={"transparent"}
                textColor={"#014F2A"}
                bordered
              />
              <Button
                text={"Get Started"}
                bgColor={"#014F2A"}
                textColor={"white"}
              /></div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu - slides from right side */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Enhanced Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform z-50 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col p-6 h-full">
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100"
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

                <div className="flex flex-col space-y-6 flex-1">
                  {navlinks.map((link, index) => (
                    <motion.div
                      key={link.linkName}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        className={`text-lg font-medium transition-colors block py-2 ${
                          pathname === link.href
                            ? "text-emerald-700 border-r-4 border-emerald-700 pr-2"
                            : "hover:text-emerald-700"
                        }`}
                        href={link.href}
                        onClick={handleLinkClick}
                      >
                        {link.linkName}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile buttons with better spacing */}
                  <div className="mt-auto space-y-4 pt-8">
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        text={"Log in"}
                        bgColor={"transparent"}
                        textColor={"#014F2A"}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button
                        text={"Get Started"}
                        bgColor={"#014F2A"}
                        textColor={"white"}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
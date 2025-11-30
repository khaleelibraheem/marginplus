"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

const navlinks = [
  { linkName: "Home", href: "/" },
  { linkName: "About Us", href: "/about-us" },
  { linkName: "Our Model", href: "/our-model" },
  { linkName: "Community", href: "/community" },
];

const resourcesDropdown = [
  { linkName: "Gallery", href: "/resources/gallery" },
  { linkName: "Reports", href: "/resources/reports" },
  { linkName: "FAQ", href: "/resources/faq" },
  { linkName: "Press Release", href: "/resources/press-release" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsResourcesOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [lastScrollY, isMenuOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsResourcesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 150);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsMobileResourcesOpen(false);
  };

  return (
    <>
      <div
        className={`
          fixed top-0 left-0 right-0 z-20 transition-all duration-300 
          ${isScrolled ? "shadow-sm bg-white" : "bg-white"}
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-[1400px] mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
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

              {/* Resources Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer py-2 ${
                    pathname.startsWith("/resources")
                      ? "text-emerald-700"
                      : "hover:text-emerald-700"
                  }`}
                >
                  Resources
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isResourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full right-0 mt-1 w-48 bg-white rounded-[16px] shadow-[2px_6px_14px_rgba(0,0,0,0.10),_7px_24px_25px_rgba(0,0,0,0.09)] border border-gray-100 py-2 z-30"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {resourcesDropdown.map((item) => (
                        <Link
                          key={item.linkName}
                          href={item.href}
                          className={`block px-4 py-2.5 text-sm transition-all ${
                            pathname === item.href
                              ? "text-[#008647] font-bold"
                              : "text-gray-700 hover:text-[#008647] hover:font-bold"
                          }`}
                        >
                          {item.linkName}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button
                text={"Contact Us"}
                bgColor={"transparent"}
                textColor={"#014F2A"}
                bordered
              />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform z-50 lg:hidden overflow-y-auto"
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

                  {/* Mobile Resources Dropdown */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navlinks.length * 0.1 }}
                  >
                    <button
                      className={`text-lg font-medium transition-colors flex items-center justify-between w-full py-2 ${
                        pathname.startsWith("/resources")
                          ? "text-emerald-700"
                          : "hover:text-emerald-700"
                      }`}
                      onClick={() =>
                        setIsMobileResourcesOpen(!isMobileResourcesOpen)
                      }
                    >
                      Resources
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isMobileResourcesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isMobileResourcesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-4 mt-2 space-y-3"
                        >
                          {resourcesDropdown.map((item) => (
                            <Link
                              key={item.linkName}
                              href={item.href}
                              className={`block py-2 text-base transition-colors ${
                                pathname === item.href
                                  ? "text-emerald-700 font-medium"
                                  : "text-gray-600 hover:text-emerald-700"
                              }`}
                              onClick={handleLinkClick}
                            >
                              {item.linkName}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <div className="mt-auto space-y-4 pt-8">
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        text={"Contact Us"}
                        bgColor={"transparent"}
                        textColor={"#014F2A"}
                        bordered
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
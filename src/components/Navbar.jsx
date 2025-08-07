import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "hero", label: "Home" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "certifications", label: "Certifications" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Close on click outside (including excluding the toggle button)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md text-white">
      <div className="h-16 flex items-center justify-between w-full">
        {/* Logo */}
        <motion.div
          initial={false}
          animate={{
            left: isOpen ? "50%" : "1rem",
            transform: isOpen ? "translateX(-50%)" : "translateX(0)",
          }}
          transition={{ duration: 0.4 }}
          className="absolute text-xl font-semibold tracking-wide cursor-pointer"
        >
          aniket
        </motion.div>

        {/* Hamburger Icon */}
        <div
          className="ml-auto mr-4 md:hidden z-50"
          onClick={toggleMenu}
          ref={buttonRef}
        >
          <div className="flex flex-col justify-center items-end gap-[6px] cursor-pointer">
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="w-6 h-0.5 bg-white"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-16 left-0 w-full flex flex-col bg-black rounded-b-lg items-center space-y-6 py-8 
              z-40 backdrop-blur-md"
            >
              {navItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-lg hover:text-cyan-400 transition"
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center ml-auto pr-6">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-cyan-400 transition text-md"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Linkedin, Instagram, Github } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import avatar from "../assets/avatar.jpg"; // Update with correct path
import TextScroll from "./TextScroll";
import { Link } from "react-scroll";
import RotatingText from "../animated-components/RotatingText";

const Footer = () => {
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(scrollRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <footer className="bg-black text-white px-6 sm:px-12 pt-20 pb-10">
      {/* Top Scrolling Text */}
      <div className="overflow-hidden" ref={scrollRef}>
        <TextScroll
          text="Let’s work together • Your idea, brought to life • Let’s Collaborate •"
          default_velocity={2}
          className="text-5xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold uppercase tracking-tighter  mb-20"
        />
      </div>

      {/* Divider */}
      <hr className="my-10 border-neutral-700" />

      {/* Footer Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm sm:text-base">
        <div className= "font-semibold text-lg sm:text-xl">
          <RotatingText
            texts={["Video Games", "Music", "Chess"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-neutral-400 uppercase mb-4">Menu</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={1000}
                offset={-80}
                className="cursor-pointer hover:text-cyan-400 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                offset={-80}
                className="cursor-pointer hover:text-cyan-400 block"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                offset={-80}
                className="cursor-pointer hover:text-cyan-400 block"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="certifications"
                smooth={true}
                duration={1000}
                offset={-80}
                className="cursor-pointer hover:text-cyan-400 block"
              >
                Certifications
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-neutral-400 uppercase mb-4">Socials</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/aniket-nitnaware-4b386b134/"
                target="_blank"
                className="flex items-center gap-2 hover:text-cyan-400"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yng.aniket.xo/"
                target="_blank"
                className="flex items-center gap-2 hover:text-cyan-400"
              >
                <Instagram size={18} /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Aniket-dev-tech"
                target="_blank"
                className="flex items-center gap-2 hover:text-cyan-400"
              >
                <Github size={18} /> GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-neutral-400 uppercase mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:nitnawareaniket7@gmail.com"
                className="hover:text-cyan-400"
              >
                nitnawareaniket7@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+911234567890" className="hover:hover:text-cyan-400">
                +91 8767508296
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Capsule */}
      <div className="mt-12 flex justify-end">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 rounded-full flex items-center justify-between px-4 py-3 w-full sm:w-[350px]">
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt="Aniket"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Aniket Nitnaware</p>
              <p className="text-xs text-gray-600">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

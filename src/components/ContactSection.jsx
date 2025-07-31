// components/ContactSection.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactForm from "./ContactForm";
import Social from "./Social";
import { div } from "framer-motion/client";

function ContactSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen py-20 px-4 bg-black text-white flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: yParallax, opacity, scale }}
        className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-16 leading-tighter"
      >
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-2">
         
            <div className="flex items-center justify-center gap-4 cursor-pointer overflow-visible min-h-[4rem] leading-tight">
              <img
                src="../icons/ig-instagram-icon.png"
                alt="Instagram"
                className="h-12 sm:h-[10vh] object-contain"
              />
              <Social href={"https://www.instagram.com/yng.aniket.xo/"}>
                Insta
              </Social>
            </div>

            <div className="flex items-center justify-center gap-4 cursor-pointer overflow-visible">
              <Social
                href={"https://www.linkedin.com/in/aniket-nitnaware-4b386b134"}
              >
                Linkedin
              </Social>
              <img
                src="../icons/linkedin-app-icon.png"
                alt="LinkedIn"
                className="h-12 sm:h-[10vh] object-contain"
              />
            </div>

            <div className="flex items-center justify-center gap-4 cursor-pointer overflow-visible">
              <img
                src="../icons/github-white-icon.png"
                alt="GitHub"
                className="h-12 sm:h-[10vh] object-contain"
              />
              <Social href={"https://github.com/Aniket-dev-tech"}>
                Github
              </Social>
            </div>
          </div>
        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;

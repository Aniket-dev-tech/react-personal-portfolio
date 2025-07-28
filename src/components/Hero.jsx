import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProfileImage from "./ProfileImage";
import HeroText from "./HeroText";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#skills",
          start: "top center+=100",
          scrub: true,
        },
      })
      .to(el, {
        y: -150,
        scaleX: 0.85,
        scaleY: 0.95,
        ease: "elastic",
      });
  }, []);

  return (
    <section className="w-full bg-black relative overflow-hidden">
      <div
        ref={heroRef}
        className="mx-auto w-full transition-all duration-500 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] rounded-b-xl"
      >
        <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 text-white gap-10 md:flex-row md:gap-20">
          <ProfileImage />
          <HeroText />
        </div>
      </div>
    </section>
  );
}

export default Hero;

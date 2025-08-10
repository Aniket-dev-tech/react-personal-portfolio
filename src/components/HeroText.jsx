import React, { useEffect, useState } from "react";

const phrases = [
  "I can build you a stunning website 💻",
  "I can create your dynamic portfolio 🎨",
  "I turn ideas into digital experiences ✨",
];

const HeroText = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === phrases.length) setIndex(0);

    const timeout = setTimeout(() => {
      setText(phrases[index].substring(0, subIndex));

      if (!deleting && subIndex < phrases[index].length) {
        setSubIndex((prev) => prev + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex((prev) => prev - 1);
      } else if (!deleting && subIndex === phrases[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, deleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="max-w-2xl w-full space-y-6 md:text-left text-center">
      <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight text-white">
        Hi, I’m{" "}
        <span className="relative inline-block bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-shimmer font-bold">
          Aniket
        </span>
      </h1>

      <span className="block text-[clamp(1rem,2vw,1.5rem)] font-mono text-cyan-200 drop-shadow-md">
        {text}
        <span className="text-cyan-400">{blink ? "|" : " "}</span>
      </span>

      <p className="text-base md:text-lg text-blue-300 font-light leading-relaxed drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
        A passionate{" "}
        <span className="text-cyan-300 font-medium">Full Stack Developer</span>{" "}
        who crafts <br />
        <span className="text-purple-300">beautiful</span> and{" "}
        <span className="text-blue-400">intelligent</span> digital experiences
        using modern tools like{" "}
        <span className="text-pink-300">React</span>,{" "}
        <span className="text-yellow-200">Node.js</span>, and{" "}
        <span className="text-emerald-300">AI integrations</span>.
      </p>

      {/* CTA Button */}
      <div className="w-full flex flex-col sm:flex-row sm:gap-5 sm:justify-start justify-center items-center sm:items-start">
  <div className="mt-4">
    <a
      href="/Aniket_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-2 text-sm md:text-base font-semibold rounded-full bg-transparent border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
    >
      📁 Download Resume
    </a>
  </div>
  <div className="mt-4">
    <a
      href="https://www.linkedin.com/in/aniket-nitnaware-4b386b134"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-2 text-sm md:text-base font-semibold rounded-full bg-transparent border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
    >
      🚀 LinkedIn
    </a>
  </div>
</div>

      <hr className="w-45 h-1 bg-cyan-400 border-0 rounded mt-4 shadow-[0_0_10px_rgba(34,211,238,0.6)] mx-auto md:mx-0" />
    </div>
  );
};

export default HeroText;

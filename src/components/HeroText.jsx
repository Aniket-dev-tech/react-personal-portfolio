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

    const timeout = setTimeout(
      () => {
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
      },
      deleting ? 40 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="text-left space-y-4 max-w-2xl">
      <h1 className="text-4xl md:text-6xl font-extrabold text-sky-300 leading-tight tracking-tight">
        Hi, I’m{" "}
        <span className="text-cyan-300 hover:text-cyan-200 transition duration-300">
          Aniket
        </span>
        <br />
      </h1>

      <span className="text-2xl tracking-tight text-blue-200">
        {text}
        <span className="text-cyan-400">{blink ? "|" : " "}</span>
      </span>

      <p className="text-lg md:text-xl text-blue-300 font-light">
        A passionate <span className="text-cyan-400">Full Stack Developer</span>{" "}
        who crafts
        <br />
        beautiful and intelligent digital experiences using modern tools.
      </p>

      <hr className="w-40 h-1 bg-cyan-400 border-0 rounded mt-4" />
    </div>
  );
};

export default HeroText;

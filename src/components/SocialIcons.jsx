// components/SocialIcons.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/your-username",
    color: "hover:text-[#facc15]",
    glow: "hover:shadow-[0_0_10px_#facc15]",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/your-id",
    color: "hover:text-[#0ea5e9]",
    glow: "hover:shadow-[0_0_10px_#0ea5e9]",
  },
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/your-handle",
    color: "hover:text-[#38bdf8]",
    glow: "hover:shadow-[0_0_10px_#38bdf8]",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-5 mt-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl text-white p-3 border border-neutral-700 rounded-full transition duration-300 transform hover:scale-110 ${social.color} ${social.glow}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;

import React from "react";
import profileImg from "../assets/IMG_4074-modified.png"; // Update this path if needed

const ProfileImage = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full group">
      {/* Neon Glow Ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 blur-2xl opacity-60 group-hover:opacity-90 transition duration-500"></div>

      {/* Profile Image */}
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300">
        <img
          src={profileImg}
          alt="Profile"
          className="w-[450px] h-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileImage;

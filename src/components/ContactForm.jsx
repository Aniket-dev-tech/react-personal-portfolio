import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setIsSuccess(true);
      event.target.reset();
      setName(""); // Optional: reset name display after success
    }
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      whileHover={{ scale: 1.01, boxShadow: "0 0 50px #00f0ff22" }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-[0_0_40px_#00f0ff33] space-y-4"
    >
      <h3 className="text-2xl font-bold text-center text-white tracking-wide mb-4">
        Get in Touch{ name && `, ${name}`}
      </h3>

      {/* Input Fields */}
      {["name", "email"].map((field) => (
        <motion.input
          key={field}
          type={field === "email" ? "email" : "text"}
          name={field}
          placeholder={field === "email" ? "you@example.com" : "Your Name"}
          required
          onChange={field === "name" ? (e) => setName(e.target.value) : undefined}
          whileHover={{ scale: 1.02, boxShadow: "0 0 15px #00f0ff44" }}
          transition={{ duration: 0.2 }}
          className="w-full px-4 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/5 placeholder:text-gray-400 transition-all"
        />
      ))}

      {/* Textarea */}
      <motion.textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        whileHover={{ scale: 1.02, boxShadow: "0 0 15px #00f0ff44" }}
        transition={{ duration: 0.2 }}
        className="w-full px-4 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/5 placeholder:text-gray-400 transition-all"
      ></motion.textarea>

      {/* Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.0, boxShadow: "0 0 20px #00f0ff88" }}
        transition={{ duration: 0.25 }}
        className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
      >
        Send Message
      </motion.button>

      {/* Success Message */}
      {isSuccess && (
        <p className="text-center text-green-400 text-sm mt-2">
          ✅ Message sent successfully!
        </p>
      )}
    </motion.form>
  );
}

export default ContactForm;

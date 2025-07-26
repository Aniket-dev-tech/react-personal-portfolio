import React, { useState, useRef } from "react";
import certifications from "../data/certifications";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CertificationsSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="bg-black py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-8 text-center">
        <span className="text-blue-400">Certifications</span>
      </h2>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {certifications.map((cert, index) => (
          <CertItem
            key={cert.id}
            cert={cert}
            index={index}
            onClick={() => setSelected(cert)}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selected && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/80"
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={selected.image}
            alt={selected.title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </motion.div>
      )}
    </section>
  );
};

export default CertificationsSection;

// === New Subcomponent for Animation ===

const CertItem = ({ cert, index, onClick }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.2, // Stagger effect
          ease: "easeOut",
        },
      });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="relative w-full break-inside-avoid cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      onClick={onClick}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-auto rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        loading="lazy"
      />
      <div className="absolute bottom-2 left-2 text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 font-medium pointer-events-none">
        {cert.title}
      </div>
    </motion.div>
  );
};

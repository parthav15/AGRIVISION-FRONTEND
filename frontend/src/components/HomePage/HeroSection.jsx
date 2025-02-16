import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import video from '../../assets/agriculture.mp4';

const HeroSection = () => {
  const texts = [
    "See Crop Yield of Punjab",
    "Introducing our Community Feature",
    "Great Feedback & Contact Features",
    "Classic Authentication System"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Animated Text */}
        <div className="mb-8 h-32 sm:h-40 md:h-48 overflow-hidden">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTextIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
            >
              {texts[currentTextIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-xl"
        >
          Future of <span className="text-green-400">Agri</span>Culture
        </motion.h1>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center"
        >
          Get Started
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.button>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-grid opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
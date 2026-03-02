import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = [
    "Krafters",
    "Cooks",
    "Barbers",
    "Cleaners",
    "Plumbers",
    "Painters",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 md:mt-34.25 flex flex-col items-center justify-center relative overflow-hidden mb-12 md:mb-20 px-4">
      {/* Background decorative boxes SVG */}
      <div className="absolute inset-0 pointer-events-none mt-12">
        <img
          src="/boxes.svg"
          alt=""
          className="w-full h-full object-cover opacity-90 "
        />
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-[54px] leading-tight md:leading-15 text-center font-extrabold font-gerat text-[#000000CC]">
          Find <span className="text-[#0000FF]">Trusted</span>
          <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 1 }}
              className="text-[#FF6600] mr-2 inline-block"
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
          Near you!
        </h1>
      </motion.div>
      <motion.p
        className="text-sm md:text-[16px] text-center relative z-10 mt-4 max-w-2xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Kraftigö connects you with verified Krafters (service providers) like
        electricians, cleaners, plumbers, painters and more. Compare
        prizes, request quotes, and book confidently.
      </motion.p>
      <motion.div
        className="flex items-center gap-3 mt-4 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center">
          <img
            src="/images/1.png"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="/images/2.png"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-white -ml-5"
          />
          <img
            src="/images/3.png"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-white -ml-5"
          />
          <img
            src="/images/4.png"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-white -ml-5"
          />
          <div className="w-10 h-10 rounded-full bg-[#FF6600] flex items-center justify-center text-white font-bold text-sm -ml-5 border-2 border-white">
            5k+
          </div>
        </div>
        <p className="text-[8.29px]">
          Over <span className="text-[#FF6600]">4h people</span> signed up{" "}
          <br /> to beta in <span className="text-[#FF6600]">4 countries</span>
        </p>
      </motion.div>
      <motion.button
        className="text-base md:text-[18.24px] text-white bg-[#FF6600] border-7 border-[#f9f9f9de] rounded-2xl px-8 md:px-[60.69px] py-3 md:py-[18.35px] mt-6 hover:scale-105 transition-transform duration-300 hover:bg-[#ff6600cc] cursor-pointer relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join waitlist
      </motion.button>

      <motion.div
        className="relative z-10 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <img src="/hero.svg" alt="Hero" className="w-full h-auto mt-8 md:mt-16" />
      </motion.div>
    </div>
  );
};

export default Hero;

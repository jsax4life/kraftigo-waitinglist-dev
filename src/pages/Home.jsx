import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import AppFeatures from "../components/AppFeatures";
import FAQ from "../components/FAQ";
import Join from "../components/Join";
import Why from "../components/Why";
import { getWaitlistSignupsCount } from "../lib/api/waitlist";
import Trust from "../components/Trust";
import Location from "../components/Location";

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => {
  const [waitlistCount, setWaitlistCount] = useState(120);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        const count = await getWaitlistSignupsCount();
        setWaitlistCount(count);
      } catch (error) {
        console.error("Failed to fetch waitlist count:", error);
      }
    };

    fetchWaitlistCount();
  }, []);

  return (
    <div>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#FF6600] origin-left z-[9999]"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="">
        {/* ── Hero ── */}
        <div className="mt-8 md:mt-30 flex flex-col items-center justify-center relative overflow-hidden mb-12 md:mb-20 px-0 md:px-4">
          <motion.section
            className="text-center flex flex-col gap-6 justify-center items-center"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={heroItem}
              className="text-[#000000CC] text-[35px] md:text-[60px] font-garet font-bold leading-[35px] md:leading-[60px] tracking-[-2px]"
            >
              Verified local talent,
              <br />{" "}
              <span className="text-[#00000066]">
                as close as your own <br /> neighborhood.
              </span>
            </motion.p>
            <motion.p
              variants={heroItem}
              className="text-[#0B0B0B99] text-[15px] px-7 md:px-0"
            >
              Everyday tasks, handled by verified people from your own area.
            </motion.p>
            <motion.a
              variants={heroItem}
              href="https://www.kraftigo.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[146px] h-[41px] bg-[#FF6600] rounded-xl text-white text-sm hover:bg-[#e55a00] transition-colors flex items-center justify-center"
            >
              Find a krafter
            </motion.a>
          </motion.section>

          {/* Hero image box */}
          <div className=" w-full h-full">
            <img
              src="/hero.svg"
              alt="Hero"
              className="w-full max-w-md md:max-w-5xl h-auto mt-4 md:mt-16 mx-auto"
              width={1322}
              height={772}
              decoding="async"
              loading="lazy"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </div>
        </div>

        {/* ── Neighborhood text + HowItWorks ── */}
        <section className="flex flex-col gap-2 md:gap-[33px]">
          <p className="text-center text-[#0B0B0B66] text-[12px] font-medium tracking-[1.68px]">
            SUPPORTED BY
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-12">
            {/* <img src="/pat1.svg" alt="pat1" className="w-15 h-15 md:w-45 md:h-45 " /> */}
            {/* <img src="/pat2.svg" alt="pat2" className="w-15 h-15 md:w-45 md:h-45 "/> */}
            {/* <img src="/pat3.svg" alt="pat3" className="w-15 h-15 md:w-45 md:h-45 "/> */}
            <img
              src="/pat4.svg"
              alt="pat4"
              className="w-15 h-15 md:w-45 md:h-45 "
            />
            <img
              src="/pat5.svg"
              alt="pat5"
              className="w-15 h-15 md:w-45 md:h-45 "
            />
          </div>
          <Why />
        </section>
        <AppFeatures />
        <HowItWorks />
        <Trust />
        <Location />
        <Join />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

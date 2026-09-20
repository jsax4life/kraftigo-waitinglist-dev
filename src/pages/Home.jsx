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
import { useLang } from "../lib/LanguageContext";

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
  const { t } = useLang();
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
              {t("hero.heading1")}
              <br />{" "}
              <span className="text-[#00000066]">
                {t("hero.heading2a")}<br />{t("hero.heading2b")}
              </span>
            </motion.p>
            <motion.p
              variants={heroItem}
              className="text-[#0B0B0B99] text-[15px] px-7 md:px-0"
            >
              {t("hero.subheading")}
            </motion.p>
            <motion.a
              variants={heroItem}
              href="https://www.kraftigo.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[146px] h-[41px] bg-[#FF6600] rounded-xl text-white text-sm hover:bg-[#e55a00] transition-colors flex items-center justify-center"
            >
              {t("hero.cta")}
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
            {t("supportedBy")}
          </p>
          <motion.div
            className="grid grid-cols-4 md:flex md:flex-wrap md:justify-center gap-4 md:gap-12 max-w-2xl md:max-w-none mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
          >
            {/* First 4 logos — top row on mobile (col-span-1 each = 4 cols) */}
            {[
              { href: "https://season5.law/",          src: "/pat1.svg", alt: "Season 5 Law" },
              { href: "https://www.astagroup.com/",    src: "/pat2.svg", alt: "Asta Group" },
              { href: "https://www.kreis-soest.de/",   src: "/pat3.svg", alt: "Kreis Soest" },
              { href: "https://startbahn25.de/",       src: "/pat4.svg", alt: "Startbahn 25" },
            ].map(({ href, src, alt }) => (
              <motion.a
                key={src}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                variants={{
                  hidden:  { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                <img src={src} alt={alt} className="w-20 h-20 md:w-45 md:h-45" />
              </motion.a>
            ))}

            {/* Last 2 logos — centred below on mobile (col-start-2 = 2nd col, spanning 1 each → centred in 4-col grid) */}
            {[
              { href: "https://expatlaunch.de/",       src: "/pat8.png", alt: "Expat Launch" },
              { href: "https://www.linkedin.com/company/gribs-gr%C3%BCnderzentrum-schweinfurt/", src: "/pat5.svg", alt: "Gribs" },
            ].map(({ href, src, alt }, i) => (
              <motion.a
                key={src}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center ${i === 0 ? "col-start-2" : ""}`}
                variants={{
                  hidden:  { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                <img src={src} alt={alt} className="w-20 h-20 md:w-45 md:h-45" />
              </motion.a>
            ))}
          </motion.div>

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

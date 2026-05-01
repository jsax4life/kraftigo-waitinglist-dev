import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import AppFeatures from "../components/AppFeatures";
import PressReleases from "../components/PressReleases";
import Waitlist from "../components/Waitlist";
import FAQ from "../components/FAQ";
import CtaBanner from "../components/CtaBanner";
import { getWaitlistSignupsCount } from "../lib/api/waitlist";

const Home = () => {
  const [waitlistCount, setWaitlistCount] = useState(120);

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
      <Navbar />
      <main className="mx-4 md:mx-10">
        {/* ── Hero ── */}
        <div className="mt-8 md:mt-34.25 flex flex-col items-center justify-center relative overflow-hidden mb-12 md:mb-20 px-0 md:px-4">
          <section className="flex flex-col md:flex-row items-start gap-6 md:gap-10 justify-between w-full">
            <motion.div
              className="relative z-10 w-full md:w-auto"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-[74px] text-left md:leading-15 font-extrabold font-gerat text-[#000000CC]">
                Find Trusted
                <br />
                Help Near you!
              </h1>
            </motion.div>

            <div className="w-full md:w-auto">
              <motion.p
                className="text-sm md:text-[16px] text-left relative z-10 mt-0 md:mt-4 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Kraftigö connects you with trusted help for cleaning, gardening,{" "}
                <br className="hidden md:block" />
                and more. Compare prices, and book confidently. Whether you{" "}
                <br className="hidden md:block" />
                need a hand or want to earn extra, we've got you covered!
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 ml-0 md:ml-3 mt-4">
                <motion.div
                  className="flex items-center gap-3 relative z-10"
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
                      {waitlistCount}
                    </div>
                  </div>
                  <p className="text-[8.29px]">
                    Over{" "}
                    <span className="text-[#FF6600]">{waitlistCount} people</span>{" "}
                    signed up <br /> to beta in{" "}
                    <span className="text-[#FF6600]">4 cities</span>
                  </p>
                </motion.div>

                <motion.a
                  href="#waitlist"
                  className="text-base md:text-[18.24px] text-white bg-[#FF6600] rounded-2xl px-8 md:px-[60.69px] py-3 md:py-[10.35px] hover:scale-105 transition-transform duration-300 hover:bg-[#ff6600cc] cursor-pointer relative z-10 inline-block text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join waitlist
                </motion.a>
              </div>
            </div>
          </section>

          {/* Hero image box */}
          <section className="relative mt-16 md:mt-40 w-full h-48 md:h-90.5 border border-[#F6F6F6] rounded-2xl bg-linear-to-b from-[#F6F6F6] to-[#FFFFFF]">
            <div className="inset-0 pointer-events-none z-0 overflow-hidden p-2">
              <img
                src="/boxes.svg"
                alt="background"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -top-10 md:-top-25 left-0 w-full h-full">
              <img
                src="/hero.svg"
                alt="Hero"
                className="w-full max-w-xs md:max-w-3xl h-auto mt-4 md:mt-16 mx-auto"
                width={1322}
                height={772}
                decoding="async"
                loading="lazy"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
            </div>
          </section>
        </div>

        {/* ── Feature cards ── */}
        <section className="mb-12 md:mb-20 flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="relative bg-[#FFEEEE] rounded-xl w-full md:w-150 h-60 md:h-70.25 p-3 overflow-hidden">
            <h2 className="font-bold text-xl">Proximity based</h2>
            <p className="text-[#1C1C1CCC]">
              Our proximity-based platform shows verified artisans available in{" "}
              <br className="hidden md:block" />
              your immediate area for faster, more convenient service.
            </p>
            <img
              src="/proximity.svg"
              alt="proximity"
              className="absolute bottom-0 right-0 w-40 md:w-auto"
            />
          </div>

          <div className="relative bg-[#FFEEEE] rounded-xl w-full md:w-100 h-60 md:h-70.25 p-3 overflow-hidden">
            <img
              src="/multi.svg"
              alt="multi"
              className="absolute top-0 left-0"
            />
            <div className="absolute bottom-0">
              <h2 className="font-bold text-xl">Multilingual</h2>
              <p className="text-[#1C1C1CCC] pb-2">
                We multiple languages so you can <br /> communicate easily and
                access <br /> services without language barriers.
              </p>
            </div>
          </div>

          <div className="relative bg-[#0000FF33] rounded-xl w-full md:w-100 h-60 md:h-70.25 p-3 overflow-hidden">
            <img src="/lock.svg" alt="lock" className="absolute top-0 left-4" />
            <div className="absolute bottom-0">
              <h2 className="font-bold text-xl">Verified Professionals</h2>
              <p className="text-[#1C1C1CCC] pb-2">
                Everyone goes through identity <br /> verification so you can
                hire with <br />
                confidence and trust.
              </p>
            </div>
          </div>
        </section>

        {/* ── Neighborhood text + HowItWorks ── */}
        <section>
          <div className="text-center mb-16 md:mb-40 px-4">
            <h2 className="font-bold text-2xl md:text-4xl text-[#000000B2] leading-snug md:leading-15">
              In every neighborhood,{" "}
              <span className="text-[#FF6600]">
                busy people need <br /> everyday help
              </span>{" "}
              but remain disconnected <br className="hidden md:block" /> from
              those ready to assist.
            </h2>
            <p className="text-[#000000B2] text-lg md:text-2xl mt-8 md:mt-12">
              Kraftigo connects them both with a single tap.
            </p>
          </div>
          <HowItWorks />
        </section>

        <AppFeatures />
        <PressReleases />
        <Waitlist />
        <FAQ />
      </main>
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default Home;

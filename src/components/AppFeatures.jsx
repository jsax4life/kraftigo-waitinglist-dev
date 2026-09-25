import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLang } from "../lib/LanguageContext";

// Visual-only config — no text
const cardConfig = [
  { bg: "bg-[#FF66001A]", pic: "/images/feat1.jpg", layout: "bottom-arrow" },
  { bg: "bg-[#0000FF1A]", pic: "/images/feat5.jpg", layout: "top-arrow"    },
  { bg: "bg-[#FFEB99]",   pic: "/images/feat2.jpg", layout: "bottom-arrow" },
  { bg: "bg-[#E6F4EA]",   pic: "/images/feat3.jpg", layout: "top-arrow"    },
  { bg: "bg-[#FFEBEB]",   pic: "/images/feat7.jpg", layout: "bottom-arrow" },
  { type: "more",         bg: "bg-[#FF6600]"                               },
];

const ArrowIcon = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18L18 6M18 6H8M18 6V16" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AppFeatures = () => {
  const { t } = useLang();
  const scrollRef = useRef(null);
  const progressBarRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // card drag state
  const isDraggingCards = useRef(false);
  const cardDragStartX = useRef(0);
  const cardScrollStart = useRef(0);
  const lastDragX = useRef(0);
  const lastDragTime = useRef(0);
  const dragVelocity = useRef(0);

  // progress bar drag state
  const isDraggingBar = useRef(false);

  // Merge visual config with translated text
  const cards = t("features.cards");
  const features = cardConfig.map((config, i) =>
    config.type === "more" ? config : { ...config, ...cards[i] }
  );

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const progress = maxScrollLeft > 0 ? scrollLeft / maxScrollLeft : 0;
      setScrollProgress(progress);
    }
  }, []);

  const scrollCardsToProgress = useCallback((progress, smooth = false) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const target = progress * maxScrollLeft;
      if (smooth) {
        scrollRef.current.scrollTo({ left: target, behavior: "smooth" });
      } else {
        scrollRef.current.scrollLeft = target;
      }
    }
  }, []);

  const getBarProgress = useCallback((clientX) => {
    const bar = progressBarRef.current;
    if (!bar) return 0;
    const { left, width } = bar.getBoundingClientRect();
    const thumbWidth = bar.offsetWidth / 12;
    const trackWidth = width - thumbWidth;
    const clamped = Math.max(0, Math.min(clientX - left - thumbWidth / 2, trackWidth));
    return clamped / trackWidth;
  }, []);

  const onBarMouseDown = useCallback((e) => {
    e.preventDefault();
    isDraggingBar.current = true;
    if (scrollRef.current) scrollRef.current.style.scrollBehavior = "smooth";
    const progress = getBarProgress(e.clientX);
    setScrollProgress(progress);
    scrollCardsToProgress(progress);
  }, [getBarProgress, scrollCardsToProgress]);

  const onBarTouchStart = useCallback((e) => {
    isDraggingBar.current = true;
    if (scrollRef.current) scrollRef.current.style.scrollBehavior = "smooth";
    const progress = getBarProgress(e.touches[0].clientX);
    setScrollProgress(progress);
    scrollCardsToProgress(progress);
  }, [getBarProgress, scrollCardsToProgress]);

  const onCardMouseDown = useCallback((e) => {
    isDraggingCards.current = true;
    cardDragStartX.current = e.pageX;
    cardScrollStart.current = scrollRef.current?.scrollLeft ?? 0;
    lastDragX.current = e.pageX;
    lastDragTime.current = Date.now();
    dragVelocity.current = 0;
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "auto";
      scrollRef.current.style.cursor = "grabbing";
    }
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);

    const onMouseMove = (e) => {
      if (isDraggingBar.current) {
        const progress = getBarProgress(e.clientX);
        setScrollProgress(progress);
        scrollCardsToProgress(progress);
      }
      if (isDraggingCards.current && scrollRef.current) {
        const now = Date.now();
        const dt = now - lastDragTime.current || 1;
        dragVelocity.current = (lastDragX.current - e.pageX) / dt;
        lastDragX.current = e.pageX;
        lastDragTime.current = now;
        const dx = e.pageX - cardDragStartX.current;
        scrollRef.current.scrollLeft = cardScrollStart.current - dx;
      }
    };

    const onTouchMove = (e) => {
      if (isDraggingBar.current) {
        const progress = getBarProgress(e.touches[0].clientX);
        setScrollProgress(progress);
        scrollCardsToProgress(progress);
      }
    };

    const onMouseUp = () => {
      if (isDraggingBar.current) {
        if (scrollRef.current) scrollRef.current.style.scrollBehavior = "auto";
      }
      isDraggingBar.current = false;

      if (isDraggingCards.current && scrollRef.current) {
        const momentum = dragVelocity.current * 120;
        const target = scrollRef.current.scrollLeft + momentum;
        scrollRef.current.scrollTo({ left: target, behavior: "smooth" });
        scrollRef.current.style.cursor = "grab";
      }
      isDraggingCards.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onMouseUp);

    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [handleScroll, getBarProgress, scrollCardsToProgress]);

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col gap-6 md:gap-8 mb-20 max-w-7xl mx-auto w-full">
          <div>
            <div className="w-10 h-10 bg-[#FF6600] rounded-full flex items-center justify-center">
              <ArrowIcon size={20} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-40 items-start justify-between w-full">
            {/* Body text */}
            <div className="md:w-[45%]">
              <p className="text-[#0B0B0B99] text-base md:text-[17px] leading-relaxed">
                {t("features.sectionBody")}
              </p>
            </div>

            {/* Heading */}
            <div className="md:w-[75%]">
              <h2 className="text-4xl md:text-[50px] lg:text-[60px] font-garet font-bold text-[#000000CC] leading-[1.1] tracking-tight">
                {t("features.sectionHeading")}
              </h2>
            </div>
          </div>
        </div>

        {/* SVG clip paths */}
        <svg width="0" height="0" style={{ position: "absolute", overflow: "hidden" }}>
          <defs>
            <clipPath id="feat-img-clip" clipPathUnits="objectBoundingBox">
              <path d="M0 0.822 C0 0.920,0.084 1,0.188 1 L0.812 1 C0.916 1,1 0.920,1 0.822 L1 0.178 C1 0.061,0.883 -0.024,0.764 0.006 L0.139 0.164 C0.057 0.185,0 0.256,0 0.336 Z" />
            </clipPath>
            <clipPath id="feat-img-clip-flip" clipPathUnits="objectBoundingBox">
              <path d="M0 0.178 C0 0.080,0.084 0,0.188 0 L0.812 0 C0.916 0,1 0.080,1 0.178 L1 0.822 C1 0.939,0.883 1.024,0.764 0.994 L0.139 0.836 C0.057 0.815,0 0.744,0 0.664 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Cards Slider */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={onCardMouseDown}
          className="flex gap-6 md:gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4 md:px-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", cursor: "grab", userSelect: "none" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative p-4 rounded-[30px] w-[320px] md:w-[449px] h-[278px] shrink-0 snap-start overflow-hidden ${feature.bg}`}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {feature.type === "more" ? (
                <div className="flex flex-col items-start justify-end h-full p-2">
                  <div className="absolute inset-0 overflow-hidden opacity-20">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: `${8 + (i % 3) * 10}px`,
                          height: `${8 + (i % 3) * 10}px`,
                          top: `${10 + (i * 17) % 80}%`,
                          left: `${5 + (i * 23) % 90}%`,
                          opacity: 0.3 + (i % 4) * 0.15,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-white text-[28px] md:text-[36px] font-garet font-bold leading-tight tracking-tight relative z-10" style={{ whiteSpace: "pre-line" }}>
                    {t("features.moreTitle")}
                  </p>
                  <p className="text-white/60 text-[14px] mt-2 relative z-10">{t("features.moreBody")}</p>
                </div>
              ) : feature.layout === "bottom-arrow" ? (
                <>
                  <div className="w-[55%] relative z-10">
                    <h3 className="text-[19px] font-bold font-garet text-[#000000CC] mb-2 tracking-[-0.38px]">{feature.title}</h3>
                    <p className="text-[#0B0B0B99] text-[15px] leading-relaxed pr-2">{feature.desc}</p>
                  </div>
                  <div className="absolute bottom-2 left-6">
                    <img src="/arrow.svg" alt="icon" className="w-25 h-25 md:w-35 md:h-35" />
                  </div>
                  <div className="absolute right-4 top-4 bottom-4 w-[45%]" style={{ clipPath: "url(#feat-img-clip)" }}>
                    <img src={feature.pic} alt={feature.title} className="w-full h-full object-cover" />
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute top-2 left-4">
                    <img src="/arrow.svg" alt="icon" className="w-25 h-25 md:w-35 md:h-35" />
                  </div>
                  <div className="w-[45%] absolute bottom-3 left-4 z-10">
                    <h3 className="text-[19px] font-bold font-garet text-[#000000CC] mb-2 tracking-[-0.38px]">{feature.title}</h3>
                    <p className="text-[#0B0B0B99] text-[15px] leading-relaxed pr-2">{feature.desc}</p>
                  </div>
                  <div className="absolute right-4 top-4 bottom-4 w-[45%]" style={{ clipPath: "url(#feat-img-clip-flip)" }}>
                    <img src={feature.pic} alt={feature.title} className="w-full h-full object-cover" />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div
          ref={progressBarRef}
          className="max-w-[2000px] mx-auto h-3 bg-[#F0F0F0] rounded-full mt-6 relative overflow-hidden cursor-pointer"
          onMouseDown={onBarMouseDown}
          onTouchStart={onBarTouchStart}
        >
          <motion.div
            className="h-full bg-[#0000FF] rounded-full absolute top-0 w-1/12"
            style={{ left: `${scrollProgress * (100 - 100 / 12)}%` }}
            transition={{ type: "tween", ease: "linear", duration: 0.1 }}
          />
        </div>

      </div>
    </section>
  );
};

export default AppFeatures;

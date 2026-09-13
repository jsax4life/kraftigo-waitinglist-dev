import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Errands",
    desc: "Shop runs, parcel returns, pickups and the small jobs that pile up.",
    bg: "bg-[#FF66001A]",
    pic: "/images/feat1.jpg", 
    layout: "bottom-arrow",
    blob: "140px 24px 24px 40px"
  },
  {
    title: "Gardening",
    desc: "Lawn care, planting, weeding, hedge trimming and seasonal garden work.",
    bg: "bg-[#0000FF1A]",
    pic: "/images/feat5.jpg",
    layout: "top-arrow",
    blob: "24px 24px 40px 140px"
  },
  {
    title: "Moving and transport",
    desc: "Packing, lifting, loading, or getting things from one place to another.",
    bg: "bg-[#FFEB99]",
    pic: "/images/feat2.jpg",
    layout: "bottom-arrow",
    blob: "140px 24px 24px 40px"
  },
  {
    title: "Cleaning",
    desc: "Deep cleaning, regular house keeping, and moving out cleans.",
    bg: "bg-[#E6F4EA]", 
    pic: "/images/feat3.jpg",
    layout: "top-arrow",
    blob: "24px 24px 40px 140px"
  },
  {
    title: "Outdoor",
    desc: "Patio cleaning, gutter clearing, and exterior house maintenance.",
    bg: "bg-[#FFEBEB]", 
    pic: "/images/feat7.jpg",
    layout: "bottom-arrow",
    blob: "140px 24px 24px 40px"
  }
];

const ArrowIcon = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18L18 6M18 6H8M18 6V16" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AppFeatures = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const progress = maxScrollLeft > 0 ? scrollLeft / maxScrollLeft : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:gap-8 mb-20 max-w-7xl mx-auto w-full">
          {/* Top Row: Orange Icon */}
          <div>
            <div className="w-10 h-10 bg-[#FF6600] rounded-full flex items-center justify-center">
              <ArrowIcon size={20} />
            </div>
          </div>

          {/* Bottom Row: Paragraph and Heading */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-40 items-start justify-between w-full">
            {/* Left side: Paragraph */}
            <div className="md:w-[45%]">
              <p className="text-[#0B0B0B99] text-base md:text-[17px] leading-relaxed">
                The everyday things that pile up faster than <br className="hidden lg:block" /> 
                you can get to them. Cleaning, gardening, <br className="hidden lg:block" /> 
                moving, and the rest. Whatever it is, <br className="hidden lg:block" /> 
                someone nearby can probably do it.
              </p>
            </div>

            {/* Right side: Huge Heading */}
            <div className="md:w-[75%]">
              <h2 className="text-4xl md:text-[50px] lg:text-[60px] font-garet font-bold text-[#000000CC] leading-[1.1] tracking-tight">
                What can you get <br className="hidden lg:block" /> help with?
              </h2>
            </div>
          </div>
        </div>

        {/* Hidden SVG with clip path definitions — scales automatically via objectBoundingBox */}
        <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
          <defs>
            {/* Original shape: slant at top, rounded bottom */}
            <clipPath id="feat-img-clip" clipPathUnits="objectBoundingBox">
              <path d="M0 0.822 C0 0.920,0.084 1,0.188 1 L0.812 1 C0.916 1,1 0.920,1 0.822 L1 0.178 C1 0.061,0.883 -0.024,0.764 0.006 L0.139 0.164 C0.057 0.185,0 0.256,0 0.336 Z" />
            </clipPath>
            {/* Flipped shape: rounded top, slant at bottom */}
            <clipPath id="feat-img-clip-flip" clipPathUnits="objectBoundingBox">
              <path d="M0 0.178 C0 0.080,0.084 0,0.188 0 L0.812 0 C0.916 0,1 0.080,1 0.178 L1 0.822 C1 0.939,0.883 1.024,0.764 0.994 L0.139 0.836 C0.057 0.815,0 0.744,0 0.664 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Cards Slider */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 md:gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4 md:px-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
              {feature.layout === "bottom-arrow" ? (
                <>
                  <div className="w-[55%] relative z-10">
                    <h3 className="text-[19px] font-bold font-garet text-[#000000CC ] mb-2 tracking-[-0.38px]">{feature.title}</h3>
                    <p className="text-[#0B0B0B99] text-[15px] leading-relaxed pr-2">{feature.desc}</p>
                  </div>
                  <div className="absolute bottom-2 left-6">
                    <img src="/arrow.svg" alt="icon" className="w-25 h-25 md:w-35 md:h-35" />
                  </div>
                  <div className="absolute right-4 top-4 bottom-4 w-[45%]" style={{ clipPath: 'url(#feat-img-clip)' }}>
                    <img 
                      src={feature.pic} 
                      alt={feature.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute top-2 left-4">
                    <img src="/arrow.svg" alt="icon"  className="w-25 h-25 md:w-35 md:h-35"/>
                  </div>
                  <div className="w-[45%] absolute bottom-3 left-4 z-10">
                    <h3 className="text-[19px] font-bold font-garet text-[#000000CC] mb-2  tracking-[-0.38px]">{feature.title}</h3>
                    <p className="text-[#0B0B0B99] text-[15px] leading-1.4pr-2">{feature.desc}</p>
                  </div>
                  <div className="absolute right-4 top-4 bottom-4 w-[45%]" style={{ clipPath: 'url(#feat-img-clip-flip)' }}>
                    <img 
                      src={feature.pic} 
                      alt={feature.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="max-w-[2000px] mx-auto h-3 bg-[#F0F0F0] rounded-full mt-6 relative overflow-hidden">
          <motion.div 
            className="h-full bg-[#0000FF] rounded-full absolute top-0 w-1/12"
            style={{ left: `${scrollProgress * 75}%` }}
            transition={{ type: "tween", ease: "linear", duration: 0.1 }}
          />
        </div>

      </div>
    </section>
  );
};

export default AppFeatures;

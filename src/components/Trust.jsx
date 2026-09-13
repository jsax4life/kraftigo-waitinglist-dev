import React from 'react';
import { motion } from 'framer-motion';

const Trust = () => {
  const features = [
    {
      title: "Identity verification, every Krafter.",
      desc: "Nobody appears on Kraftigo without completing identity verification first."
    },
    {
      title: "Credentials where the work calls for it.",
      desc: "Qualifications, insurance and business registration are checked and shown where they are relevant."
    },
    {
      title: "Profiles you can actually read.",
      desc: "Skills, languages, service area and completed work, so you know who you are considering before you decide."
    },
    {
      title: "Ratings and feedback.",
      desc: "Reviews come from finished jobs, which keeps reputation tied to real work."
    },
    {
      title: "Agree first, book after.",
      desc: "Talk through the task and settle the details before anything is confirmed."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-10 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 max-w-7xl mx-auto w-full">
        {/* Left Column: Heading & Intro */}
        <div className="md:w-[45%] flex flex-col gap-6 md:sticky md:top-32 h-fit">
          <h2 className="text-4xl md:text-[44px] font-garet font-bold text-[#1C1C1C] leading-[1.1] tracking-tight">
            Trust should not be <br className="hidden lg:block" /> an afterthought.
          </h2>
          <p className="text-[#0B0B0B99] text-base md:text-[17px] leading-relaxed">
            You are letting someone into your home, or handing them something that matters. That deserves more than a listing and a phone number.
          </p>
        </div>

        {/* Right Column: List of Trust Features */}
        <div className="md:w-[55%] flex flex-col">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`py-6 md:py-[22px] border-t border-[#0000001A] ${index === features.length - 1 ? 'border-b' : ''}`}
            >
              <h3 className="text-[20px] font-bold font-garet text-[#1C1C1C] mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#0B0B0B99] text-[15px] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../lib/LanguageContext';

const Trust = () => {
  const { t } = useLang();
  const features = t("trust.features");

  return (
    <section className="py-20 md:py-32 px-4 md:px-10 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 max-w-7xl mx-auto w-full">

        {/* Left: Heading & intro */}
        <div className="md:w-[45%] flex flex-col gap-6 md:sticky md:top-32 h-fit">
          <h2 className="text-4xl md:text-[44px] font-garet font-bold text-[#1C1C1C] leading-[1.1] tracking-tight" style={{ whiteSpace: "pre-line" }}>
            {t("trust.heading")}
          </h2>
          <p className="text-[#0B0B0B99] text-base md:text-[17px] leading-relaxed">
            {t("trust.body")}
          </p>
        </div>

        {/* Right: Feature list */}
        <div className="md:w-[55%] flex flex-col">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`py-6 md:py-[22px] border-t border-[#0000001A] ${index === features.length - 1 ? "border-b" : ""}`}
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
import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../lib/LanguageContext';

const Location = () => {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-32 px-4 md:px-10 max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-10 md:gap-16 max-w-7xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-[44px] font-garet font-bold text-[#1C1C1C] leading-[1.1] tracking-tight">
            {t("location.heading")}
          </h2>
          <p className="text-[#0B0B0B99] text-base md:text-[17px] leading-relaxed">
            {t("location.body")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center w-full mt-4"
        >
          <img
            src="/map.svg"
            alt="Map of Germany showing Soest"
            className="w-full max-w-[850px] h-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Location;
import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../lib/LanguageContext';

const Why = () => {
  const { t } = useLang();

  return (
    <section className="py-20 px-4 md:px-30 max-w-8xl mx-auto">
      {/* Cards Section */}
      <div className="flex flex-col items-center mb-12">
        <p className="text-center text-[#0B0B0B66] text-[12px] font-medium tracking-[1.68px] mb-8 uppercase">
          {t("why.label")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#FDEDE1] p-8 md:p-12 rounded-[16px]"
          >
            <h3 className="font-garet font-bold text-2xl md:text-[25px] leading-tight text-[#000000CC] mb-4">
              {t("why.card1Title")}
            </h3>
            <p className="text-[#0B0B0B99] leading-relaxed text-[16px]" style={{ whiteSpace: "pre-line" }}>
              {t("why.card1Body")}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#EFEAF6] p-8 md:p-12 rounded-[16px]"
          >
            <h3 className="font-garet font-bold text-2xl md:text-[25px] leading-tight text-[#000000CC] mb-4" style={{ whiteSpace: "pre-line" }}>
              {t("why.card2Title")}
            </h3>
            <p className="text-[#0B0B0B99] leading-relaxed text-[16px]" style={{ whiteSpace: "pre-line" }}>
              {t("why.card2Body")}
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F6F6F6] p-8 md:p-12 rounded-[16px]"
          >
            <h3 className="font-garet font-bold text-2xl md:text-[25px] leading-tight text-[#000000CC] mb-4">
              {t("why.card3Title")}
            </h3>
            <p className="text-[#0B0B0B99] leading-relaxed text-[16px]" style={{ whiteSpace: "pre-line" }}>
              {t("why.card3Body")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Two Column Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-12 md:gap-24 my-24 md:my-32"
      >
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-[42px] font-garet font-bold text-[#000000CC] leading-tight tracking-tight pr-0 md:pr-10">
            {t("why.h2")}
          </h2>
        </div>
        <div className="md:w-1/2 flex flex-col gap-6 text-[#0B0B0B99] text-base md:text-[17px] leading-relaxed pt-2">
          <p>{t("why.p1")}</p>
          <p>{t("why.p2")}</p>
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-5xl mx-auto my-24 md:my-32 relative"
      >
        <p className="text-[#0B0B0B66] text-[12px] font-medium tracking-[1.6px] mb-8 uppercase">
          {t("why.label")}
        </p>
        <div className="relative z-20">
          <span className="absolute -top-2 left-6 md:left-12 z-0">
            <img src="/quote.svg" alt="icon" />
          </span>
          <p className="text-2xl md:text-4xl text-[#000000CC] leading-snug relative">
            {t("why.quote")}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Why;
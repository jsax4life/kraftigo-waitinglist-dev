import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../lib/LanguageContext";

const FAQ = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = t("faq.items");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">

        {/* Left: Sticky heading */}
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[44px] font-garet font-bold text-[#000000CC] tracking-tight">
              {t("faq.heading")}
            </h2>
          </motion.div>
        </div>

        {/* Right: Accordion */}
        <div className="md:w-2/3">
          <div className="border-t border-[#EAEAEA]">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-[#EAEAEA]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left py-[22px] group"
                >
                  <span className="font-bold font-garet text-[20px] text-[#000000CC] pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center transition-colors group-hover:bg-[#EAEAEA]">
                    <svg
                      className={`w-4 h-4 text-[#222222] transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 pb-6 pr-12 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

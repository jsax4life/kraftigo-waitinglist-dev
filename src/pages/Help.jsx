import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../lib/LanguageContext";

const Help = () => {
  const { t, lang } = useLang();
  const [activeCatIndex, setActiveCatIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const categories = t("help.categories");
  const faqData = t("help.faqData");
  const activeCategory = categories[activeCatIndex];
  const activeFaqs = faqData[activeCategory] || [];

  // Reset when language changes so the category key always matches faqData
  useEffect(() => {
    setActiveCatIndex(0);
    setOpenFaq(null);
  }, [lang]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-8xl mx-auto pt-16 md:pt-24 pb-20">

        {/* Hero search */}
        <section className="text-center mb-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold font-garet text-black mb-10">
            {t("help.heading")}
          </h1>

          <div className="relative max-w-2xl mx-auto mb-10">
            <input
              type="text"
              placeholder={t("help.searchPlaceholder")}
              className="w-full h-16 pl-8 pr-20 rounded-full bg-[#F6F6F6] border border-[#0000001A] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6600]/20 text-gray-700 text-lg"
            />
            <button className="absolute right-2 top-2 h-12 w-12 rounded-full bg-[#FF6600] flex items-center justify-center text-white hover:bg-[#e65c00] transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#FFF5EE] text-[#FF6600] rounded-xl font-semibold hover:bg-[#FFEBDC] transition-colors cursor-pointer">
              {t("help.sendMail")}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-[#FFF5EE] text-[#FF6600] rounded-xl font-semibold hover:bg-[#FFEBDC] transition-colors cursor-pointer">
              {t("help.call")}
              <img src="/call.svg" alt="Phone Icon" className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-[#E7E7FF] text-[#0000FF] rounded-xl font-semibold hover:bg-[#D5D5FF] transition-colors cursor-pointer">
              {t("help.whatsapp")}
              <img src="/watsap.svg" alt="WhatsApp Icon" className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* FAQ section */}
        <div className="mb-10 pl-5 md:pl-15">
          <p className="flex items-center gap-2 text-sm text-[#000000CC] font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            {t("help.faqLabel")}
          </p>
          <h2 className="text-3xl font-bold text-black">{t("help.faqHeading")}</h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-0 md:flex-row min-h-125 items-stretch">

          {/* Category sidebar */}
          <aside className="w-full md:w-72 shrink-0 self-start">
            <nav className="flex flex-col bg-[#F9F9F9]">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCatIndex(i); setOpenFaq(null); }}
                  className={`px-8 md:px-10 py-6 text-left text-[17px] font-medium transition-all cursor-pointer w-full border-b border-[#0000000D] ${
                    activeCatIndex === i
                      ? "text-[#FF6600] bg-[#FFF5EE]"
                      : "text-[#1C1C1CCC] bg-[#F9F9F9] hover:bg-[#F0F0F0]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </aside>

          {/* FAQ accordion */}
          <div className="flex-1 bg-[#F9F9F9] p-6 md:p-8 md:pl-10">
            <div className="flex flex-col w-full">
              {activeFaqs.map((faq, index) => (
                <div key={index} className="border-b border-[#0000001A] last:border-none w-full">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.question ? null : faq.question)}
                    className="w-full py-5 flex justify-between items-center text-left hover:text-[#FF6600] transition-colors cursor-pointer group"
                  >
                    <span className="font-semibold text-[17px] text-black group-hover:text-[#FF6600] transition-colors">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${openFaq === faq.question ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.question && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-[#000000CC] leading-relaxed max-w-4xl text-[16px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Help;

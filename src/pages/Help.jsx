import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Help = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openFaq, setOpenFaq] = useState(
    "Do I need to speak German to use Kraftigö?",
  );

  const categories = ["General", "Client", "Krafter"];

  const faqData = {
    General: [
      {
        question: "What is Kraftigö?",
        answer:
          "Kraftigö is a platform connecting people with trusted local artisans for various services.",
      },
      {
        question: "What services can I find on Kraftigö?",
        answer:
          "You can find cleaners, gardeners, tutors, hair stylists, and more.",
      },
      {
        question: "Where is Kraftigö available?",
        answer:
          "Currently we are expanding across 4 cities with a focus on local neighborhoods.",
      },
      {
        question: "How does Kraftigö ensure trust and safety?",
        answer:
          "Every professional goes through a verification process and identity check.",
      },
      {
        question: "Do I need to speak German to use Kraftigö?",
        answer:
          "No. The platform supports multiple languages to make it accessible to both customers and artisans from different backgrounds.",
      },
    ],
    Client: [
      {
        question: "How do I book a service?",
        answer: "Choose a service, compare krafters, and click book!",
      },
      {
        question: "How do I pay?",
        answer: "Payments are processed securely through the platform.",
      },
    ],
    Krafter: [
      {
        question: "How do I sign up as a Krafter?",
        answer: "Click 'Become a Krafter' in the nav or footer.",
      },
      {
        question: "When do I get paid?",
        answer: "Payments are released after the service is marked complete.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-8xl mx-auto pt-16 md:pt-24 pb-20">
        {/* Hero Search Section */}
        <section className="text-center mb-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold font-garet text-black mb-10">
            Get Help, Anywhere, Anytime!
          </h1>

          <div className="relative max-w-2xl mx-auto mb-10">
            <input
              type="text"
              placeholder="Search help questions, or topics."
              className="w-full h-16 pl-8 pr-20 rounded-full bg-[#F6F6F6] border border-[#0000001A] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6600]/20 text-gray-700 text-lg"
            />
            <button className="absolute right-2 top-2 h-12 w-12 rounded-full bg-[#FF6600] flex items-center justify-center text-white hover:bg-[#e65c00] transition-colors cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#FFF5EE] text-[#FF6600] rounded-xl font-semibold hover:bg-[#FFEBDC] transition-colors cursor-pointer">
              Send us a mail
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-[#FFF5EE] text-[#FF6600] rounded-xl font-semibold hover:bg-[#FFEBDC] transition-colors cursor-pointer">
              Call
              <img src="/call.svg" alt="Phone Icon" className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-[#E7E7FF] text-[#0000FF] rounded-xl font-semibold hover:bg-[#D5D5FF] transition-colors cursor-pointer">
              Whatsapp
              <img src="/watsap.svg" alt="WhatsApp Icon" className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mb-10 pl-5 md:pl-15">
          <p className="flex items-center gap-2 text-sm text-[#000000CC] font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl font-bold text-black">
            Your Questions, Answered.
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-0 md:flex-row min-h-125 items-stretch">
          {/* Sidebar Categories */}
          <aside className="w-full md:w-72 shrink-0 self-start">
            <nav className="flex flex-col bg-[#F9F9F9]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 md:px-10 py-6 text-left text-[17px] font-medium transition-all cursor-pointer w-full border-b border-[#0000000D] ${
                    activeCategory === cat
                      ? "text-[#FF6600] bg-[#FFF5EE]"
                      : "text-[#1C1C1CCC] bg-[#F9F9F9] hover:bg-[#F0F0F0]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </aside>

          {/* FAQ Accordion List */}
          <div className="flex-1 bg-[#F9F9F9] p-6 md:p-8 md:pl-10">
            <div className="flex flex-col w-full">
              {faqData[activeCategory].map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-[#0000001A] last:border-none w-full"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === faq.question ? null : faq.question)
                    }
                    className="w-full py-5 flex justify-between items-center text-left hover:text-[#FF6600] transition-colors cursor-pointer group"
                  >
                    <span className="font-semibold text-[17px] text-black group-hover:text-[#FF6600] transition-colors">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openFaq === faq.question ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is Kraftigö available now?",
      answer:
        "Kraftigö is currently in beta. Join our waitlist to be among the first to access the platform when we launch.",
    },
    {
      question: "Does it cost anything to join?",
      answer:
        "Joining Kraftigö is completely free. You only pay for the services you book through our platform.",
    },
    {
      question: "Can artisans (Krafter) register early?",
      answer:
        "Yes! Artisans can register early by joining our waitlist. We're actively onboarding verified service providers.",
    },
    {
      question: "Which services will be included?",
      answer:
        "We'll include electricians, plumbers, cleaners, painters, carpenters, and many more skilled service providers.",
    },
    {
      question: "How do you handle trust and scams?",
      answer:
        "All Krafters are verified through our rigorous screening process. We also have a rating system and secure payment protection.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#000000CC] mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Here Are Some Of The Questions We're Asked Most Often. If You Need
          Additional Help
        </p>
      </motion.div>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className=" pb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left py-3 hover:text-[#FF6600] transition-colors"
            >
              <span className="font-semibold text-lg text-[#000000CC]">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
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
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

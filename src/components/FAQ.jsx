import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Kraftigo?",
      answer: "Kraftigö is a platform connecting you with skilled artisans for your tasks.",
    },
    {
      question: "Who is a Krafter?",
      answer: "A Krafter is a skilled and verified artisan or service provider on our platform.",
    },
    {
      question: "How do I know a Krafter is who they say they are?",
      answer: "All Krafters are verified through our rigorous screening process.",
    },
    {
      question: "What does it cost?",
      answer: "Joining Kraftigö is completely free. You only pay for the services you book.",
    },
    {
      question: "Is Kraftigo available where I live?",
      answer: "We are currently expanding our services. Join our waitlist to be notified when we launch in your area.",
    },
    {
      question: "Can I become a Krafter?",
      answer: "Yes! Artisans can register early by joining our waitlist.",
    },
    {
      question: "Do I need to speak German?",
      answer: "Our platform supports multiple languages, and you can communicate with Krafters in your preferred language.",
    },
    {
      question: "Is there an app?",
      answer: "We are working on dedicated mobile apps for iOS and Android.",
    },
    {
      question: "What if my task is not on the list?",
      answer: "You can create a custom task request, and relevant Krafters will be notified.",
    },
    {
      question: "How do I get in touch?",
      answer: "You can reach out to our support team via the contact form on our website.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Left Column */}
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[44px] font-garet font-bold text-[#000000CC] tracking-tight">
              Questions
            </h2>
          </motion.div>
        </div>

        {/* Right Column */}
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
                      className={`w-4 h-4 text-[#222222] transition-transform duration-300 ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 4v16m8-8H4"
                      />
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

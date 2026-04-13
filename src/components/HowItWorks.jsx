import { useState } from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("client");

  const tabContent = {
    client: {
      title: "Get your tasks done in three simple steps",
      steps: [
        { id: "01", title: "Search A Service", description: "Search for any service you need help with." },
        { id: "02", title: "Compare Nearby Krafters", description: "Compare distance, ratings, availability, price range, and trust signals." },
        { id: "03", title: "Request A Quote Or Book", description: "Chat, confirm scope, then book a time slot." },
      ],
      image: "/how.svg",
    },
    krafter: {
      title: "Start earning money on your terms",
      steps: [
        { id: "01", title: "Sign up as a krafter and add your skills", description: "Search for any service you need help with." },
        { id: "02", title: "Find available krafts from marketplace or get booked directly", description: "Compare distance, ratings, availability, price range, and trust signals." },
        { id: "03", title: "Get paid when you fulfill orders", description: "Chat, confirm scope, then book a time slot." },
      ],
      image: "/how2.svg",
    },
  };

  return (
    <section>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Tabs */}
        <div className="flex justify-start gap-4 mb-8 md:mb-12 relative z-20">
          <button
            onClick={() => setActiveTab("client")}
            className={`text-base md:text-lg px-4 py-1.5 rounded-full relative ${
              activeTab === "client" ? "text-white bg-[#FF6600]" : "text-white bg-[#919191]"
            }`}
          >
            Client
          </button>
          <button
            onClick={() => setActiveTab("krafter")}
            className={`text-base md:text-lg px-4 py-1.5 rounded-full relative ${
              activeTab === "krafter" ? "text-white bg-[#0000FF]" : "text-white bg-[#919191]"
            }`}
          >
            Krafter
          </button>
        </div>
      </motion.div>

      {/* On mobile: stacked. On desktop: side-by-side */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-20 relative z-10">
        {/* Left column — title + image */}
        <div className="flex-1 flex flex-col">
          <p className="text-xl md:text-2xl font-bold font-garet text-[#000000CC] mb-4 md:w-100">
            {tabContent[activeTab].title}
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={tabContent[activeTab].image}
              alt=""
              className={
                activeTab === "krafter"
                  ? "w-full max-w-xs md:w-110 object-contain mx-auto md:mx-0 hidden md:block"
                  : "w-full object-contain max-h-64 md:max-h-125 hidden md:block"
              }
            />
          </motion.div>
        </div>

        {/* Right column — steps */}
        <div className="flex-1 space-y-4 md:space-y-10 mt-8 md:mt-0">
          {tabContent[activeTab].steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="rounded-2xl flex items-center gap-4 p-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-[40px] font-bold text-[#000000CC] shrink-0">
                {step.id}.
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-[#000000CC]">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join waitlist button */}
      <div
        className={
          activeTab === "krafter"
            ? "flex justify-center mt-10"
            : "flex justify-center mt-8 md:-mt-30"
        }
      >
        <a
          href="#waitlist"
          className="text-base md:text-[18.24px] text-white bg-[#FF6600] rounded-2xl px-8 md:px-[60.69px] py-3 md:py-[10.35px] hover:scale-105 transition-transform duration-300 hover:bg-[#ff6600cc] cursor-pointer relative z-10"
        >
          Join waitlist
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;

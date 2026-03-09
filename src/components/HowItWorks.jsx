import { useState } from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("client");

  const tabContent = {
    client: {
      steps: [
        {
          id: 1,
          title: "Search A Service",
          description: "Search for any service you need help with.",
          bgColor: "bg-[#FFF0E5]",
        },
        {
          id: 2,
          title: "Compare Nearby Krafters",
          description:
            "Compare distance, ratings, availability, price range, and trust signals.",
          bgColor: "bg-[#FFF0E5]",
        },
        {
          id: 3,
          title: "Request A Quote Or Book",
          description: "Chat, confirm scope, then book a time slot.",
          bgColor: "bg-[#E5E5FF]",
        },
      ],
      image: "/how.svg",
    },
    krafter: {
      steps: [
        {
          id: 1,
          title: "Sign up as a krafter and add your skills ",
          description: "Search for any service you need help with.",
          bgColor: "bg-[#E5E5FF]",
        },
        {
          id: 2,
          title:
            "Find available krafts from marketplace or  get booked directly ",
          description:
            "Compare distance, ratings, availability, price range, and trust signals.",
          bgColor: "bg-[#E5E5FF]",
        },
        {
          id: 3,
          title: "Get paid when you fulfill orders",
          description: "Chat, confirm scope, then book a time slot.",
          bgColor: "bg-[#FFF0E5]",
        },
      ],
      image: "/how2.svg",
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 relative ">
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000CC] mb-3">
          How It Works
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 px-4">
          From "I Need Help" To "Job Done" In Just Three Steps
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 md:gap-8 mb-8 md:mb-12 relative z-20">
          <button
            onClick={() => setActiveTab("client")}
            className={`text-base md:text-lg font-semibold pb-2 transition-colors relative ${
              activeTab === "client"
                ? "text-[#FF6600]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Client
            {activeTab === "client" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6600]"
                layoutId="underline"
              ></motion.div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("krafter")}
            className={`text-base md:text-lg font-semibold pb-2 transition-colors relative ${
              activeTab === "krafter"
                ? "text-[#FF6600]"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Krafter
            {activeTab === "krafter" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6600]"
                layoutId="underline"
              ></motion.div>
            )}
          </button>
        </div>
      </motion.div>

      <div className="flex justify-center items-center relative z-10">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center max-w-5xl w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Side - Steps */}
          <div className="space-y-4">
            {tabContent[activeTab].steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`${step.bgColor} rounded-2xl p-4`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold text-[#000000CC] mb-3">
                  {step.id}
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#000000CC]">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={tabContent[activeTab].image}
              alt=""
              className="w-full max-w-4xl hidden md:block md:-mt-20 object-contain max-h-[500px]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Orange blob decoration at bottom */}
      <div className="absolute -bottom-20 -left-30 hidden md:block">
        <img src="/side.svg" alt="" />
      </div>
    </section>
  );
};

export default HowItWorks;

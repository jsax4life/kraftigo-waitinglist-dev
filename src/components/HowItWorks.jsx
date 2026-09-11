import { useState } from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("client");

  const tabContent = {
    client: {
      steps: [
        { 
          id: "01", 
          title: "Say what you need.", 
          description: "Describe the task and where you are." 
        },
        { 
          id: "02", 
          title: "See who is nearby.", 
          description: "Browse verified Krafters close to you, with their skills, languages, availability and reviews." 
        },
        { 
          id: "03", 
          title: "Talk it through.", 
          description: "Message directly and agree on scope, timing and price before anything is confirmed." 
        },
        { 
          id: "04", 
          title: "Get it done.", 
          description: "Book the slot and get on with your day." 
        },
      ]
    },
    krafter: {
      steps: [
        { 
          id: "01", 
          title: "Sign up and add skills.", 
          description: "Create your profile and let people know what you can do." 
        },
        { 
          id: "02", 
          title: "Find available krafts.", 
          description: "Browse the marketplace or get booked directly by clients." 
        },
        { 
          id: "03", 
          title: "Complete the work.", 
          description: "Show up, do a great job, and build your reputation." 
        },
        { 
          id: "04", 
          title: "Get paid securely.", 
          description: "Receive your earnings directly when you fulfill orders." 
        },
      ]
    },
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-10 max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-12 md:gap-20 max-w-7xl mx-auto w-full">
        
        {/* Header & Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-8"
        >
          <h2 className="text-4xl md:text-[50px] lg:text-[44px] font-garet font-bold text-[#000000CC] tracking-tight">
            How it works
          </h2>
          
          <div className="inline-flex rounded-full border border-[#E5E5E5] p-1">
            <button
              onClick={() => setActiveTab("client")}
              className={`px-8 py-2.5 rounded-full font-medium text-sm md:text-[15px] transition-colors ${
                activeTab === "client" ? "bg-[#1C1C1C] text-white" : "text-[#1C1C1C99] hover:text-[#1C1C1C]"
              }`}
            >
              Client
            </button>
            <button
              onClick={() => setActiveTab("krafter")}
              className={`px-8 py-2.5 rounded-full font-medium text-sm md:text-[15px] transition-colors ${
                activeTab === "krafter" ? "bg-[#1C1C1C] text-white" : "text-[#1C1C1C99] hover:text-[#1C1C1C]"
              }`}
            >
              Krafter
            </button>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {tabContent[activeTab].steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col gap-4 pt-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Border-wipe line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#FF6600] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Remaining gray line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E5E5E5]" style={{ zIndex: -1 }} />
              <span className="text-[#FF6600] font-bold text-lg md:text-[20px]">
                {step.id}
              </span>
              <h3 className="text-[20px] md:text-[22px] font-bold font-garet text-[#1C1C1C] leading-tight">
                {step.title}
              </h3>
              <p className="text-[#0B0B0B99] text-[15px] leading-relaxed">
                {step.description}
              </p>
              
              {/* Show button only under the first step for Client tab on desktop */}
              {activeTab === "client" && index === 0 && (
                <div className="mt-4 md:mt-8 hidden md:block">
                  <a
                    href="https://www.kraftigo.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#FF6600] text-white px-8 py-3.5 rounded-[12px] font-medium text-[15px] hover:bg-[#ff6600cc] transition-colors"
                  >
                    Find a Krafter
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Show button at the bottom on mobile */}
        {activeTab === "client" && (
          <div className="mt-2 flex justify-start md:hidden">
            <a
              href="https://www.kraftigo.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF6600] text-white px-8 py-3.5 rounded-[12px] font-medium text-[15px] hover:bg-[#ff6600cc] transition-colors"
            >
              Find a Krafter
            </a>
          </div>
        )}

      </div>
    </section>
  );
};

export default HowItWorks;

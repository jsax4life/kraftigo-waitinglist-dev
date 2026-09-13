import React from 'react';
import { motion } from 'framer-motion';

const Join = () => {
  const benefits = [
    {
      title: "Work close to home.",
      description: "Requests come from your own area, so travel time does not eat into your day."
    },
    {
      title: "Set your own terms.",
      description: "Your services, your availability, your rates, agreed directly with the client."
    },
    {
      title: "Get found for what you actually do.",
      description: "People search for the specific help they need, and your profile shows them you can do it."
    },
    {
      title: "Build a reputation that stays with you.",
      description: "Verification and completed jobs build a profile that keeps bringing work."
    },
    {
      title: "Work in your own language.",
      description: "Connect with clients from both local and international communities."
    }
  ];

  return (
    <section className="bg-[#EFEAF6] py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Left Column */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <h2 className="text-4xl md:text-5xl lg:text-[44px] font-garet font-bold text-[#000000CC] tracking-tight leading-tight mb-6">
                Turn a skill into<br />steady local work.
              </h2>
              <p className="text-[#0B0B0B99] text-base md:text-[17px] mb-8 leading-relaxed pr-0 md:pr-12">
                Kraftigo is built for people who already have something useful to offer. Students with hours between lectures. People who have recently arrived and are building a footing here. Locals whose weekend skill is better than most people's day job. You decide what you offer, when you are available and how far you are willing to go.
              </p>
              <button className="bg-[#1C1C1C] text-[15px] hover:bg-black text-white font-medium py-3 px-6 rounded-xl transition-colors">
                Become a Krafter
              </button>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <div className="border-t border-[#0000001F]">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="border-b border-[#0000001F] py-[22px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="font-bold font-garet text-[20px] text-[#000000CC] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#0B0B0B99] leading-relaxed text-[15px]">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Join;
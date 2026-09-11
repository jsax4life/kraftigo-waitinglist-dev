import React from 'react';
import { motion } from 'framer-motion';

const Why = () => {
  return (
    <section className="py-20 px-4 md:px-30 max-w-8xl mx-auto">
      {/* Cards Section */}
      <div className="flex flex-col items-center mb-12">
        <p className="text-center text-[#0B0B0B66] text-[12px] font-medium tracking-[1.68px] mb-8 uppercase">
          Why Kraftigo
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
              Close by, by design.
            </h3>
            <p className="text-[#0B0B0B99] leading-relaxed text-[16px]">
              Matching starts at your address <br />
              and works outward. The person <br />
              who shows up is genuinely from <br />
              your area, not just someone <br />
              willing to make the drive.
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
            <h3 className="font-garet font-bold text-2xl md:text-[25px] leading-tight text-[#000000CC] mb-4">
              Verified before you  <br />see them.
            </h3>
            <p className="text-[#0B0B0B99] leading-relaxed text-[16px]">
              Every Krafter completes identity <br />
              verification before their profile <br />
              goes live. Where the work calls <br />
              for it, we also check <br />
              qualifications, insurance and <br />
              business registration.
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
              Speak your language.
            </h3>
            <p className="text-[#0B0B0B99] leading-relaxed text-[16px]">
              Our Krafters come from local and <br />
              international communities, so <br />
              you can often find someone you <br />
              can talk to comfortably. <br />
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
            Finding someone you  <br className='hidden md:block' />can trust should not <br className='hidden md:block' /> take three days and <br className='hidden md:block' /> four phone calls.
          </h2>
        </div>
        <div className="md:w-1/2 flex flex-col gap-6 text-[#0B0B0B99] text-base md:text-[17px] leading-relaxed pt-2">
          <p>
            Right now the options are a search engine full of listings from three towns over, a community group where anyone can claim anything, or asking around and waiting for a friend to get back to you. You end up choosing between a stranger you know nothing about and a delay you did not plan for.
          </p>
          <p>
            Meanwhile, people a few streets away have exactly the skill you need and no straightforward way to reach you.
          </p>
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
          Why Kraftigo
        </p>
        <div className="relative z-20">
          <span className="absolute -top-2 left-6 md:left-12  z-0">
            <img src="/quote.svg" alt="icon" />
          </span>
          <p className="text-2xl md:text-4xl text-[#000000CC] leading-snug relative">
            Kraftigo starts where you are. You see who is nearby, you see what they have been verified for, and you talk to them directly before anything is agreed.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Why;
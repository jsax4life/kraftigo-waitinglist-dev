import { motion } from "framer-motion";

const CtaBanner = () => {
  return (
    <section className="relative w-full mt-16 pt-16">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, #ffffff -5%, #FFB489 0%, #FF6600 50%)",
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-70">
        <motion.div
          className="absolute -top-25 left-75  z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/phone.svg"
            alt="Kraftigo App"
            className="h-95 w-auto object-contain drop-shadow-xl"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center gap-6 pr-10 ml-105"
          style={{ width: "50%" }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-white text-2xl md:text-[32px]  leading-snug">
            Over 400 people have signed <br /> up for beta in four countries
          </h2>

          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {[
                "/images/1.png",
                "/images/2.png",
                "/images/3.png",
                "/images/4.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`User ${i + 1}`}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  style={{ marginLeft: i === 0 ? 0 : "-10px" }}
                />
              ))}
              <div
                className="w-9 h-9 rounded-full bg-[#FF6600] text-white flex items-center justify-center text-xs font-bold border-2 border-white"
                style={{ marginLeft: "-10px" }}
              >
                4h+
              </div>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 border border-white rounded-xl px-4 py-1.5 text-white hover:bg-white hover:text-[#FF6600] transition-colors duration-200 min-w-37.5"
            >
              <img src="/play.svg" alt="play" />
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] uppercase tracking-wide opacity-80">
                  Coming soon on
                </span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 border border-white rounded-xl px-4 py-1.5 text-white hover:bg-white hover:text-[#FF6600] transition-colors duration-200 min-w-37.5"
            >
              <img src="/apple.svg" alt="apple" />
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] uppercase tracking-wide opacity-80">
                  Coming soon on
                </span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;

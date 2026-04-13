import { Toaster } from "sonner";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Ticker = () => {
  return (
    <div className="w-full bg-[#FFD700] text-black overflow-hidden flex whitespace-nowrap py-3">
      <style>
        {`
          @keyframes ticker {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-ticker {
            animation: ticker 30s linear infinite;
          }
        `}
      </style>
      <div className="animate-ticker flex items-center space-x-12 px-10">
        {Array(10)
          .fill("Kraftigö is in beta testing, sign up to join the waitlist")
          .map((text, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              <div className="w-2 h-2 bg-black"></div>
              <span className="font-medium text-[15px] tracking-wide">
                {text}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Ticker />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;

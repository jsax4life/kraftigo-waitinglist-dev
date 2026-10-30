import { Toaster } from "sonner";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
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

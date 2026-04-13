import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-6 md:pt-12 px-4 md:px-0 md:mx-10">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center gap-10">
        <div className="flex gap-15">
          <span className="cursor-pointer hover:text-[#FF6600] transition-colors">
            About us
          </span>
          <span className="cursor-pointer hover:text-[#FF6600] transition-colors">
            Press
          </span>
        </div>
        <img src="/logo.svg" alt="logo" className="ml-20 mr-20 h-10" />
        <div className="flex gap-15">
          <span className="cursor-pointer hover:text-[#FF6600] transition-colors">
            Terms of use
          </span>
          <span className="cursor-pointer hover:text-[#FF6600] transition-colors">
            Help
          </span>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center">
        <img src="/logo.svg" alt="logo" className="h-8" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-700 hover:text-[#FF6600]"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col py-4">
              <span className="px-6 py-3 cursor-pointer hover:bg-gray-100 hover:text-[#FF6600] transition-colors">
                Home
              </span>
              <span className="px-6 py-3 cursor-pointer hover:bg-gray-100 hover:text-[#FF6600] transition-colors">
                About
              </span>
              <span className="px-6 py-3 cursor-pointer hover:bg-gray-100 hover:text-[#FF6600] transition-colors">
                Services
              </span>
              <span className="px-6 py-3 cursor-pointer hover:bg-gray-100 hover:text-[#FF6600] transition-colors">
                Contact
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Helper: returns className string, orange if active, default otherwise
const navClass = ({ isActive }) =>
  `cursor-pointer transition-colors ${isActive ? "text-[#FF6600] font-semibold" : "hover:text-[#FF6600]"}`;

const links = [
  { label: "About us", to: "/about" },
  { label: "Press", to: "/press" },
  { label: "Terms of use", to: "/privacy" },
  { label: "Help", to: "/help" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-6 md:pt-12 px-4 md:px-0 md:mx-10">
      {/* ── Desktop ── */}
      <div className="hidden md:flex justify-between items-center gap-10">
        {/* Left links */}
        <div className="flex gap-15">
          <NavLink to="/about" className={navClass}>About us</NavLink>
          <NavLink to="/press" className={navClass}>Press</NavLink>
        </div>

        {/* Logo → home */}
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" className="ml-20 mr-20 h-10" />
        </NavLink>

        {/* Right links */}
        <div className="flex gap-15">
          <NavLink to="/privacy" className={navClass}>Terms of use</NavLink>
          <NavLink to="/help" className={navClass}>Help</NavLink>
        </div>
      </div>

      {/* ── Mobile header row ── */}
      <div className="md:hidden flex justify-between items-center">
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" className="h-8" />
        </NavLink>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-700 hover:text-[#FF6600]"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {/* Home link */}
              <NavLink
                to="/"
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 transition-colors ${isActive ? "text-[#FF6600] font-semibold bg-orange-50" : "hover:bg-gray-100 hover:text-[#FF6600]"}`
                }
              >
                Home
              </NavLink>

              {links.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-6 py-3 transition-colors ${isActive ? "text-[#FF6600] font-semibold bg-orange-50" : "hover:bg-gray-100 hover:text-[#FF6600]"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

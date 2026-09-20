import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../lib/LanguageContext";

// Helper: returns className string, orange if active, default otherwise
const navClass = ({ isActive }) =>
  `cursor-pointer transition-colors ${isActive ? "text-[#FF6600] font-semibold" : "hover:text-[#FF6600]"}`;

// German flag SVG
const FlagDE = () => (
  <svg viewBox="0 0 512 512" className="w-[22px] h-[22px] rounded-full overflow-hidden shrink-0 mt-0.5">
    <rect width="512" height="170.66" y="0"      fill="#000000" />
    <rect width="512" height="170.66" y="170.66" fill="#DD0000" />
    <rect width="512" height="170.66" y="341.33" fill="#FFCE00" />
  </svg>
);

// UK / English flag SVG
const FlagEN = () => (
  <svg viewBox="0 0 60 30" className="w-[22px] h-[22px] rounded-full overflow-hidden shrink-0 mt-0.5">
    <clipPath id="clip-en">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

const LanguageToggle = ({ className = "" }) => {
  const { lang, toggle, t } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className={`flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity ${className}`}
    >
      {lang === "en" ? <FlagDE /> : <FlagEN />}
      <span className="text-black font-medium text-[16px]">
        {lang === "en" ? "DE" : "EN"}
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLang();

  const links = [
    { label: t("nav.about"),      to: "/about" },
    { label: t("nav.press"),      to: "/press" },
    { label: t("nav.termsOfUse"), to: "/privacy" },
    { label: t("nav.help"),       to: "/help" },
  ];

  return (
    <nav className="pt-6 md:pt-12 px-4 md:px-0 md:mx-10">
      {/* ── Desktop ── */}
      <div className="hidden md:flex justify-between items-center gap-10">
        {/* Left links */}
        <div className="flex gap-15">
          <NavLink to="/" className={navClass}>{t("nav.home")}</NavLink>
          <NavLink to="/about" className={navClass}>{t("nav.about")}</NavLink>
          <NavLink to="/press" className={navClass}>{t("nav.press")}</NavLink>
        </div>

        {/* Logo → home */}
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" className="ml-20 mr-20 h-10" />
        </NavLink>

        {/* Right links */}
        <div className="flex gap-15 items-center">
          <NavLink to="/privacy" className={navClass}>{t("nav.termsOfUse")}</NavLink>

          <div className="flex items-center gap-8 ml-2">
            <LanguageToggle />
            <NavLink to="/help" className={navClass}>{t("nav.help")}</NavLink>
          </div>
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
                {t("nav.home")}
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

              <div className="px-6 py-4 mt-2 border-t border-gray-100 hover:bg-gray-50 transition-colors">
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

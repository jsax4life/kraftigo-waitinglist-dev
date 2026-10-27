import { useLang } from "../lib/LanguageContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-[#F6F6F6] text-black py-8 md:py-12 px-4 md:px-12">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-18 mb-8 md:mb-12">

          {/* Brand */}
          <div>
            <div className="mb-8">
              <img src="/logo.svg" alt="Kraftigö" className="h-12" />
            </div>
            <p className="text-[14.4px] text-[#000000CC]">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Company */}
          <div className="md:ml-18">
            <h3 className="font-bold text-lg mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm text-black">
              <li><a href="/about"   className="hover:text-[#FF6600] transition-colors">{t("footer.about")}</a></li>
              <li><a href="#"        className="hover:text-[#FF6600] transition-colors">{t("footer.career")}</a></li>
              <li><a href="/press"   className="hover:text-[#FF6600] transition-colors">{t("footer.blog")}</a></li>
              <li>
                <a href="https://www.kraftigo.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6600] transition-colors">
                  {t("footer.becomeTasker")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:ml-18">
            <h3 className="font-bold text-lg mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2 text-sm text-black">
              <li><a href="/privacy#customer-terms" className="hover:text-[#FF6600] transition-colors">{t("footer.terms")}</a></li>
              <li><a href="/privacy#privacy-policy" className="hover:text-[#FF6600] transition-colors">{t("footer.privacy")}</a></li>
              <li><a href="/privacy#privacy-policy" className="hover:text-[#FF6600] transition-colors">{t("footer.cookie")}</a></li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex gap-4 mb-15 md:-mt-10">
          <a href="https://www.linkedin.com/company/kraftig%C3%B6/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity hover:scale-110">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/kraftigo.app" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity hover:scale-110">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://vm.tiktok.com/ZS9S7a3kcrbBk-nyxcK/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity hover:scale-110">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

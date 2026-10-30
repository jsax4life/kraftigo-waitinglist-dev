import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../lib/LanguageContext";
import { legalDocuments } from "../data/legalDocuments";

// Helper to make URLs, emails and line-breaks clickable and clean
const FormattedText = ({ text }) => {
  if (!text) return null;
  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, lineIdx) => {
        const regex = /((?:https?:\/\/[^\s,]+)|(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}))/g;
        const parts = line.split(regex);

        return (
          <span key={lineIdx} className={lineIdx > 0 ? "block mt-1.5" : "inline"}>
            {parts.map((part, i) => {
              if (part.startsWith("http://") || part.startsWith("https://")) {
                const cleanUrl = part.replace(/[.,;)]+$/, "");
                const trailing = part.slice(cleanUrl.length);
                return (
                  <span key={i}>
                    <a
                      href={cleanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6600] hover:underline break-all"
                    >
                      {cleanUrl}
                    </a>
                    {trailing}
                  </span>
                );
              }

              if (part.includes("@") && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part.replace(/[.,;)]+$/, ""))) {
                const cleanEmail = part.replace(/[.,;)]+$/, "");
                const trailing = part.slice(cleanEmail.length);
                return (
                  <span key={i}>
                    <a
                      href={`mailto:${cleanEmail}`}
                      className="text-[#FF6600] hover:underline"
                    >
                      {cleanEmail}
                    </a>
                    {trailing}
                  </span>
                );
              }

              return part;
            })}
          </span>
        );
      })}
    </>
  );
};

const SectionBlock = ({ doc }) => {
  return (
    <section id={doc.id} className="scroll-mt-28">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
          {doc.title}
        </h2>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#00000099]">
          {doc.badge && <span>{doc.badge}</span>}
          {doc.badge && doc.lastUpdated && <span>•</span>}
          {doc.lastUpdated && <span>Last updated: {doc.lastUpdated}</span>}
        </div>
      </div>

      {/* Intro */}
      {doc.intro && doc.intro.length > 0 && (
        <div className="space-y-4 mb-8">
          {doc.intro.map((p, idx) => (
            <p key={idx} className="text-[#000000CC] leading-[1.8] text-base md:text-[17px]">
              <FormattedText text={p} />
            </p>
          ))}
        </div>
      )}

      {/* Content sub-sections */}
      <div className="space-y-8">
        {doc.sections.map((section, sIdx) => (
          <article key={sIdx} className="space-y-3">
            <h3 className="text-lg md:text-xl font-bold text-black pt-2">
              {section.title}
            </h3>

            {section.paragraphs && (
              <div className="space-y-3">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[#000000CC] leading-[1.8] text-base md:text-[17px]">
                    <FormattedText text={p} />
                  </p>
                ))}
              </div>
            )}

            {section.bulletList && (
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-[#000000CC] leading-[1.8] text-base md:text-[17px]">
                {section.bulletList.map((item, bIdx) => (
                  <li key={bIdx} className="pl-1">
                    <FormattedText text={item} />
                  </li>
                ))}
              </ul>
            )}

            {section.followUp && (
              <div className="space-y-3 pt-1">
                {section.followUp.map((fp, fpIdx) => (
                  <p key={fpIdx} className="text-[#000000CC] leading-[1.8] text-base md:text-[17px]">
                    <FormattedText text={fp} />
                  </p>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

const Privacy = () => {
  const { t } = useLang();
  const [searchParams, setSearchParams] = useSearchParams();

  // Part 1: "privacy" | Part 2: "terms"
  const [activeMainPart, setActiveMainPart] = useState("privacy");
  // Subcategory within continuous Terms: "main-legal-terms" | "customer-terms" | "krafter-terms"
  const [activeTermsSection, setActiveTermsSection] = useState("main-legal-terms");

  // Navigate to Privacy Policy part
  const showPrivacyPolicy = () => {
    setActiveMainPart("privacy");
    setSearchParams({ tab: "privacy-policy" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigate to Legal Terms part (at top)
  const showLegalTerms = () => {
    setActiveMainPart("terms");
    setActiveTermsSection("main-legal-terms");
    setSearchParams({ tab: "main-legal-terms" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigate to a specific subcategory within continuous Legal Terms
  const scrollToTermsSubSection = (id) => {
    setActiveTermsSection(id);
    setSearchParams({ tab: id });

    if (activeMainPart !== "terms") {
      setActiveMainPart("terms");
      // Wait for DOM to render terms then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -110;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -110;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  // Scroll spy: tracks which subcategory the user is reading within continuous Legal Terms
  useEffect(() => {
    if (activeMainPart !== "terms") return;

    const termsIds = ["main-legal-terms", "customer-terms", "krafter-terms"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = termsIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(termsIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTermsSection(termsIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeMainPart]);

  // Handle URL hash or tab query param on mount or URL change
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const tab = searchParams.get("tab");
    const target = hash || tab;

    if (["customer-terms", "krafter-terms", "main-legal-terms", "legal-terms"].includes(target)) {
      setActiveMainPart("terms");
      const targetSub = target === "legal-terms" ? "main-legal-terms" : target;
      setActiveTermsSection(targetSub);
      setTimeout(() => {
        const el = document.getElementById(targetSub);
        if (el) {
          const yOffset = -110;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
    } else if (target === "privacy-policy") {
      setActiveMainPart("privacy");
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">

          {/* Sidebar using original clean styling with sticky tracking */}
          <aside className="w-full md:w-64 shrink-0 md:sticky md:top-28 self-start">
            <h3 className="font-bold text-black mb-6 text-lg">
              {t("privacy.sidebarTitle") || "On this page"}
            </h3>

            <nav className="flex flex-col gap-4">
              {/* 1. Privacy Policy Part */}
              <button
                onClick={showPrivacyPolicy}
                className={`text-left transition-all cursor-pointer text-[15px] ${
                  activeMainPart === "privacy"
                    ? "text-[#FF6600] font-medium"
                    : "text-black hover:text-[#FF6600]"
                }`}
              >
                Privacy Policy
              </button>

              {/* 2. Legal Terms Part (Continuous Document) */}
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={showLegalTerms}
                  className={`text-left transition-all cursor-pointer text-[15px] ${
                    activeMainPart === "terms"
                      ? "text-[#FF6600] font-medium"
                      : "text-black hover:text-[#FF6600]"
                  }`}
                >
                  Legal Terms
                </button>

                {/* Subcategories (tracked within continuous Legal Terms) */}
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-[#00000010]">
                  <button
                    onClick={() => scrollToTermsSubSection("main-legal-terms")}
                    className={`text-left transition-all cursor-pointer text-[14.5px] ${
                      activeMainPart === "terms" && activeTermsSection === "main-legal-terms"
                        ? "text-[#FF6600] font-medium"
                        : "text-[#00000099] hover:text-[#FF6600]"
                    }`}
                  >
                    Main Legal Terms
                  </button>

                  <button
                    onClick={() => scrollToTermsSubSection("customer-terms")}
                    className={`text-left transition-all cursor-pointer text-[14.5px] ${
                      activeMainPart === "terms" && activeTermsSection === "customer-terms"
                        ? "text-[#FF6600] font-medium"
                        : "text-[#00000099] hover:text-[#FF6600]"
                    }`}
                  >
                    Customer Terms
                  </button>

                  <button
                    onClick={() => scrollToTermsSubSection("krafter-terms")}
                    className={`text-left transition-all cursor-pointer text-[14.5px] ${
                      activeMainPart === "terms" && activeTermsSection === "krafter-terms"
                        ? "text-[#FF6600] font-medium"
                        : "text-[#00000099] hover:text-[#FF6600]"
                    }`}
                  >
                    Krafter Terms
                  </button>
                </div>
              </div>
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 max-w-4xl">
            {activeMainPart === "privacy" ? (
              /* Part 1: Privacy Policy document alone */
              <SectionBlock doc={legalDocuments["privacy-policy"]} />
            ) : (
              /* Part 2: Continuous Legal Terms containing Main Legal Terms, Customer Terms & Krafter Terms */
              <div>
                {/* 1. Main Legal Terms */}
                <SectionBlock doc={legalDocuments["main-legal-terms"]} />

                <hr className="my-16 border-t border-gray-200" />

                {/* 2. Customer Terms */}
                <SectionBlock doc={legalDocuments["customer-terms"]} />

                <hr className="my-16 border-t border-gray-200" />

                {/* 3. Krafter Terms */}
                <SectionBlock doc={legalDocuments["krafter-terms"]} />
              </div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;

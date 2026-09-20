import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../lib/LanguageContext";

const Privacy = () => {
  const { t } = useLang();
  const sections = t("privacy.sections");
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">

          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0 md:mt-20">
            <h3 className="font-bold text-black mb-6 text-lg">{t("privacy.sidebarTitle")}</h3>
            <nav className="flex flex-col gap-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-left transition-all cursor-pointer text-[15px] ${
                    activeSection === section
                      ? "text-[#FF6600] font-medium"
                      : "text-black hover:text-[#FF6600]"
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content — privacy text stays in English as legal copy */}
          <div className="flex-1 max-w-4xl">
            <h1 className="text-3xl md:text-3xl font-bold text-black mb-10">
              {activeSection}
            </h1>

            <div className="prose prose-slate max-w-none">
              <p className="text-[#000000CC] leading-[1.8] text-base md:text-[17px] mb-8">
                {t("privacy.content")[0]}
              </p>
              <p className="text-[#000000CC] leading-[1.8] text-base md:text-[17px] mb-8">
                {t("privacy.content")[1]}
              </p>
              <p className="text-[#000000CC] leading-[1.8] text-base md:text-[17px] mb-8">
                {t("privacy.content")[2]}{" "}
                <a href="https://stripe.com/en-gb/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] hover:underline">
                  https://stripe.com/en-gb/privacy
                </a>
                .
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;

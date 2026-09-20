import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaBanner from "../components/CtaBanner";
import Waitlist from "../components/Waitlist";
import { useLang } from "../lib/LanguageContext";

const About = () => {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 pt-20 pb-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-5/12">
            <h1
              className="text-4xl md:text-[52px] font-bold text-black font-garet leading-[1.1]"
              style={{ whiteSpace: "pre-line" }}
            >
              {t("about.heading")}
            </h1>
          </div>
          <div className="md:w-7/12 space-y-12">
            <p className="text-[#000000CC] text-[17px] leading-relaxed">
              {t("about.intro")}
            </p>

            <div>
              <h3 className="text-[19px] font-bold text-black mb-4">{t("about.section1Title")}</h3>
              <p className="text-[#000000CC] text-[17px] leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                {t("about.section1Body")}
              </p>
            </div>

            <div>
              <h3 className="text-[19px] font-bold text-black mb-4">{t("about.section2Title")}</h3>
              <p className="text-[#000000CC] text-[17px] leading-relaxed">
                {t("about.section2Body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Banner image */}
      <section className="w-full">
        <img
          src="/images/about.jpg"
          alt="Team collaborating"
          className="w-full h-80 md:h-[400px] object-cover object-center bg-gray-100"
        />
      </section>

      {/* 3. Checkmarks */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 pt-20 pb-16">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-5/12 hidden md:block" />
          <div className="md:w-7/12">
            <h3 className="text-[19px] font-bold text-black mb-8">{t("about.checkTitle")}</h3>
            <div className="space-y-6">
              {[t("about.check1"), t("about.check2"), t("about.check3")].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <svg className="w-[22px] h-[22px] text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[#000000CC] text-[17px] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats cards */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FF6600] rounded-xl p-8 md:p-10 text-white flex flex-col min-h-[340px]">
            <div>
              <p className="text-[19px] mb-1 font-medium font-garet">{t("about.stat1Label")}</p>
              <h3 className="text-[48px] md:text-[54px] font-black leading-none tracking-tight font-garet">{t("about.stat1Value")}</h3>
            </div>
            <div className="mt-auto pt-6">
              <p className="text-[16px] text-white/95 leading-relaxed">{t("about.stat1Desc")}</p>
            </div>
          </div>

          <div className="bg-[#FF6600] rounded-xl p-8 md:p-10 text-white flex flex-col min-h-[340px]">
            <div>
              <h3 className="text-[48px] md:text-[54px] font-black leading-none tracking-tight mb-2 font-garet">{t("about.stat2Value")}</h3>
              <p className="text-[17px] font-medium font-garet">{t("about.stat2Label")}</p>
            </div>
            <div className="mt-auto pt-6">
              <p className="text-[16px] text-white/95 leading-relaxed">{t("about.stat2Desc")}</p>
            </div>
          </div>

          <div className="bg-[#FFF5EE] border border-[#FF6600]/40 rounded-xl p-8 md:p-10 flex flex-col min-h-[340px]">
            <div>
              <h3 className="text-[48px] md:text-[54px] font-black leading-none tracking-tight text-[#FF6600] mb-2 font-garet">{t("about.stat3Value")}</h3>
              <p className="text-[17px] font-medium text-[#FF6600] font-garet">{t("about.stat3Label")}</p>
            </div>
            <div className="mt-auto pt-6">
              <p className="text-[16px] text-[#FF6600] leading-relaxed">{t("about.stat3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Join the movement */}
      <section className="text-center px-4 mb-24 max-w-3xl mx-auto">
        <h3 className="text-[19px] font-bold text-black mb-4">{t("about.joinTitle")}</h3>
        <p className="text-[#000000CC] text-[17px] leading-relaxed">{t("about.joinBody")}</p>
      </section>

      <Waitlist />
      <div className="py-15" />
      {/* <CtaBanner /> */}
      <Footer />
    </main>
  );
};

export default About;
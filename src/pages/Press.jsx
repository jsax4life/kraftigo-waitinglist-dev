import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PressModal from "../components/PressModal";
import { useLang } from "../lib/LanguageContext";

const Press = () => {
  const { t } = useLang();
  const [activeCatIndex, setActiveCatIndex] = useState(0);

  const categories = t("press.categories");
  const activeCategory = categories[activeCatIndex];

  const pressDataRaw = t("press.articles");
  const pressData = pressDataRaw.map((article) => ({
    ...article,
    pressType: categories[article.categoryIndex]
  }));

  const filteredData =
    activeCatIndex === 0
      ? pressData
      : pressData.filter((item) => item.pressType === activeCategory);

  return (
    <main>
      <Navbar />
      <section className="mx-4 md:mx-40 my-20 md:my-40">
        <div className="flex gap-7 pb-2 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCatIndex(i)}
              className={`pb-2 transition-all cursor-pointer ${
                activeCatIndex === i
                  ? "text-[#FF6600] border-b-2 border-[#FF6600] font-semibold"
                  : "hover:text-[#FF6600]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="space-y-10">
          {filteredData.length > 0 ? (
            filteredData.map((press, index) => (
              <PressModal
                key={index}
                pressType={press.pressType}
                day={press.date}
                title={press.title}
                desc={press.description}
                pic={press.image}
                readTime={press.readTime}
              />
            ))
          ) : (
            <div className="text-center py-20 text-gray-500">
              {t("press.noArticles")}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Press;

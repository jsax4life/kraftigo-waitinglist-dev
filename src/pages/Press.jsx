import { useState } from "react";
import Navbar from "../components/Navbar";
import PressModal from "../components/PressModal";

const Press = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const pressNav = [
    { title: "All" },
    { title: "Product Updates" },
    { title: "Press Releases" },
    { title: "Marketing" },
    { title: "Blog" },
  ];

  const pressData = [
    {
      title: "Kraftigo Secures 600 registrations on waitlist",
      date: "Feb 28, 2026",
      description:
        "Need ideas for family activities in NYC this fall? Here's a guide to the best Broadway shows and musicals to see this autumn.",
      readTime: "2 min read",
      image: "/images/press1.png",
      pressType: "Product Updates",
    },
    {
      title: "Kraftigo set to Launch in 4 countries",
      date: "Feb 28, 2026",
      description:
        "Need ideas for family activities in NYC this fall? Here's a guide to the best Broadway shows and musicals to see this autumn.",
      readTime: "2 min read",
      image: "/images/press2.jpg",
      pressType: "Product Updates",
    },
    // Add more press data as needed
  ];

  const filteredPressData =
    activeCategory === "All"
      ? pressData
      : pressData.filter((item) => item.pressType === activeCategory);

  return (
    <main>
      <Navbar />
      <section className="mx-4 md:mx-40 my-20 md:my-40">
        <div className="flex gap-7 pb-2 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {pressNav.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(item.title)}
              className={`pb-2 transition-all cursor-pointer ${
                activeCategory === item.title
                  ? "text-[#FF6600] border-b-2 border-[#FF6600] font-semibold"
                  : "hover:text-[#FF6600]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="space-y-10">
          {filteredPressData.length > 0 ? (
            filteredPressData.map((press, index) => (
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
              No articles found in this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Press;

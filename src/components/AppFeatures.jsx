import { useRef } from "react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Cleaning",
    pic: "/images/feat1.jpg",
    tags: [
      "Gardening help",
      "Landscaping help",
      "Lawn Maintainance",
      "Planting Help",
      "Weeding Help",
    ],
  },
  {
    name: "Moving",
    pic: "/images/feat2.jpg",
    tags: [
      "Gardening help",
      "Landscaping help",
      "Lawn Maintainance",
      "Planting Help",
      "Weeding Help",
    ],
  },
  {
    name: "Cooking",
    pic: "/images/feat3.jpg",
    tags: [
      "Gardening help",
      "Landscaping help",
      "Lawn Maintainance",
      "Planting Help",
      "Weeding Help",
    ],
  },
  {
    name: "Nanny",
    pic: "/images/feat4.jpg",
    tags: [
      "Gardening help",
      "Landscaping help",
      "Lawn Maintainance",
      "Planting Help",
      "Weeding Help",
    ],
  },
  {
    name: "Gardening",
    pic: "/images/feat5.jpg",
    tags: [
      "Gardening help",
      "Landscaping help",
      "Lawn Maintainance",
      "Planting Help",
      "Weeding Help",
    ],
  },
  {
    name: "Tutoring",
    pic: "/images/feat6.jpg",
    tags: [
      "Gardening help",
      "Landscaping help",
      "Lawn Maintainance",
      "Planting Help",
      "Weeding Help",
    ],
  },
  {
    name: "Outdoor",
    pic: "/images/feat7.jpg",
    tags: [
      "Gardening help",
      "Landscaping help",
      "Lawn Maintainance",
      "Planting Help",
      "Weeding Help",
    ],
  },
  {
    name: "Hair Styling",
    pic: "/images/feat8.jpg",
    tags: [
      "Gardening help",
      "Landscaping help",
      "Lawn Maintainance",
      "Planting Help",
      "Weeding Help",
    ],
  },
];

const AppFeatures = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 relative mt-40">
      {/* Header row */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-sm flex items-center gap-1 mb-1">
            <span className="w-1 h-1 rounded-full bg-gray-500 inline-block"></span>
            Our Services
          </p>
          <h2 className="text-3xl font-bold font-garet text-[#000000CC]">
            Real Help From People Who Care
          </h2>
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable cards row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="shrink-0 w-65"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            {/* Image */}
            <div className="w-full h-56 rounded-2xl overflow-hidden mb-3">
              <img
                src={feature.pic}
                alt={feature.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Service name */}
            <p className="text-xl text-[#000000CC] mb-2">{feature.name}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {feature.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs border border-[#FF6600] bg-[#FF66001A] text-[#FF6600] rounded-full px-3 py-1 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppFeatures;

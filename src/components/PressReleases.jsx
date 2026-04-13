import { motion } from "framer-motion";

const PressReleases = () => {
  const articles = [
    {
      title: "Why We Started Kraftigo",
      description:
        "Finding a reliable local artisan should be simple, But in many places, it isn’t. We created Kraftigo to connect you with the best local artisans in your area.",
      image: "/images/press2.jpg",
      link: "https://medium.com/@kraftigo2025/why-we-started-kraftig%C3%B6-2df6524f3505",
    },
    {
      title: "Kraftigo  Ready To Secures 600+ Registrations On Waitlist",
      description:
        "We're excited to announce that Kraftigo is now available for pre-registration! Join our waitlist to be among the first to experience the future.",
      image: "/images/press1.png",
      link: "#",
    },
  ];

  return (
    <section className="py-16">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="text-sm flex items-center gap-1 mb-1">
            <span className="w-1 h-1 rounded-full bg-gray-500 inline-block"></span>
            Press Releases
          </p>
          <h2 className="text-3xl font-bold font-garet text-[#000000CC]">
            Kraftigo Through The Eyes Of The Media
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-hidden group cursor-pointer h-80"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
              <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                {article.description}
              </p>
              <a
                href={article.link}
                className="inline-block text-sm font-semibold underline"
                target="_blank"
              >
                Read Article
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PressReleases;

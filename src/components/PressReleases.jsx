import { motion } from "framer-motion";

const PressReleases = () => {
  const articles = [
    {
      title: "Kraftigo Secures 600 Registrations On Waitlist",
      description:
        "Need Ideas For Family Activities In NYC This Fall? Here's A Guide To The Best Broadway Shows And Musicals To See This Autumn.",
      image: "/images/press1.png",
      link: "#",
    },
    {
      title: "Kraftigo Set To Launch In 4 Countries",
      description:
        "Need Ideas For Family Activities In NYC This Fall? Here's A Guide To The Best Broadway Shows And Musicals To See This Autumn.",
      image: "/images/press2.jpg",
      link: "#",
    },
  ];

  return (
    <section className="max-w-8xl mx-auto px-4 md:px-12 py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#000000CC] mb-3">
          Press Releases
        </h2>
        <p className="text-gray-600">Kraftigo Through The Eyes Of The Media</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl overflow-hidden group cursor-pointer h-100"
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

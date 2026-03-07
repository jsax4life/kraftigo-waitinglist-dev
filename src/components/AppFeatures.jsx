import { motion } from "framer-motion";

const features = [
  {
    name: "Cleaning",
    pic: "/images/feat1.jpg",
  },
  {
    name: "Moving",
    pic: "/images/feat2.jpg",
  },
  {
    name: "Cooking",
    pic: "/images/feat3.jpg",
  },
  {
    name: "Nanny",
    pic: "/images/feat4.jpg",
  },
  {
    name: "Gardening",
    pic: "/images/feat5.jpg",
  },
  {
    name: "Tutoring",
    pic: "/images/feat6.jpg",
  },
  {
    name: "Outdoor",
    pic: "/images/feat7.jpg",
  },
  {
    name: "Hair Styling",
    pic: "/images/feat8.jpg",
  },
];

const AppFeatures = () => {
  return (
    <section className="max-w-8xl mx-auto px-7 md:px-12 py-16 relative">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-[#000000CC] mb-3">
          App Features
        </h2>
        <p className="text-gray-600">
          Built For Trust, Proximity, And A Smooth Booking Experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-2xl h-60 relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <img
              src={feature.pic}
              alt={feature.name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#0000FF] to-[#0000FF00] bg-opacity-50 text-white text-center text-lg py-8">
              {feature.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppFeatures;

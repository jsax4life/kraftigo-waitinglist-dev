import { motion } from "framer-motion";

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
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-2xl h-64"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          ></motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppFeatures;

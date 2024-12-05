import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { benefits } from "../data/benefitsData";

export default function Benefits() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="benefits"
      ref={ref}
      className="min-h-[80vh] flex items-center justify-center antialiased py-24 px-4 md:px-12 benefits-gradient"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Why Choose Solar?
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Discover the advantages of switching to clean, renewable solar
            energy.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/10"
              variants={itemVariants}
            >
              <benefit.Icon className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

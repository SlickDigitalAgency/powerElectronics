import { Shield, Users, Award } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
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
      id="about"
      ref={ref}
      className="min-h-[80vh] flex items-center justify-center antialiased py-24 px-4 md:px-12 about-gradient"
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
            Your Trusted Solar Partner
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            With over a decade of experience in renewable energy solutions,
            we're committed to powering a sustainable future for our community.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          {[
            {
              Icon: Shield,
              title: "Expert Guidance",
              text: "Our certified professionals provide personalized solutions tailored to your needs.",
            },
            {
              Icon: Users,
              title: "Customer First",
              text: "We prioritize your satisfaction with transparent advice and ongoing support.",
            },
            {
              Icon: Award,
              title: "Quality Products",
              text: "We partner with leading manufacturers to offer the best solar technology.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/10"
              variants={itemVariants}
            >
              <item.Icon className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

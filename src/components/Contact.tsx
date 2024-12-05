import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-12 contact-gradient"
      ref={sectionRef}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to start your solar journey? Contact us today for a free
            consultation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="input-focus-effect">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-white/10"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="input-focus-effect">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-white/10"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="input-focus-effect">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-white/10"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full group relative overflow-hidden px-6 py-3 rounded-lg text-white font-medium transition-all duration-300
                  ${
                    isSubmitted
                      ? "bg-green-600"
                      : "bg-emerald-600 hover:bg-emerald-700"
                  }`}
              >
                <span
                  className={`flex items-center justify-center transition-all duration-300 
                  ${isSubmitting ? "opacity-0" : "opacity-100"}`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </span>
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <a
                  href="tel:+15551234567"
                  className="flex items-center group hover:text-emerald-600 transition-colors"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Phone className="h-5 w-5 text-emerald-500" />
                  </div>
                  <span className="ml-4 text-gray-300">(555) 123-4567</span>
                </a>
                <a
                  href="mailto:info@powerelectronics.com"
                  className="flex items-center group hover:text-emerald-600 transition-colors"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Mail className="h-5 w-5 text-emerald-500" />
                  </div>
                  <span className="ml-4 text-gray-300">
                    info@powerelectronics.com
                  </span>
                </a>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-emerald-500" />
                  </div>
                  <span className="ml-4 text-gray-300">
                    123 Solar Street, Renewable City, RC 12345
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 overflow-hidden h-64 relative group">
              <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-full h-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-emerald-500 floating" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
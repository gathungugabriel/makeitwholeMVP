"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="bg-emerald-700 py-20 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-6">
          Ready to complete your gear?
        </h2>
        <p className="text-lg mb-8">
          Join early and get exclusive access!
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-xl text-gray-800 w-full sm:w-auto focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-emerald-700 hover:bg-emerald-100 font-semibold px-6 py-3 rounded-xl shadow-md transition"
          >
            Get Early Access
          </button>
        </form>
      </motion.div>
    </section>
  );
}

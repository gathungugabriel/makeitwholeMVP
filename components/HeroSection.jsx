"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-100 to-white py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-6"
      >
        <h1 className="text-5xl font-bold text-emerald-900 mb-6">
          Make It Whole Again{" "}
          <span className="text-emerald-600">Buy, Sell, or Trade Missing Gadget Parts</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Lost a charger, an earbud, or a matching strap? Don’t replace! Complete your gear.  
          Join the marketplace built for second chances.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md transition">
            Get Early Access
          </button>
          <button className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-xl text-lg font-semibold transition">
            List a Missing Item
          </button>
        </div>
      </motion.div>
    </section>
  );
}

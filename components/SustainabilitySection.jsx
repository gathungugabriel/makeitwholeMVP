"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SustainabilitySection() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/Sustainability image.png"
            alt="Sustainability illustration"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-emerald-800 mb-6">
            Make It Whole Again 🌍
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            What if every misplaced earbud, forgotten charger, or unmatched strap
            could find its way back to purpose? <strong>Make It Whole Again</strong> 
            was built on that simple idea,giving perfectly good items a second chance.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We connect people who have what others are missing. Together, we 
            save money, reduce waste, and make sustainability effortless, one match at a time.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you’re completing your favorite gadget or helping someone else 
            finish theirs, every connection brings us closer to a world that values 
            what’s already here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

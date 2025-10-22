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
            Every year, millions of perfectly good gadgets and accessories are
            discarded just because one small part is missing — a lost earbud, a
            missing charger, a single strap.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Make It Whole Again</strong> connects people who have those
            missing pieces. Save money, reduce waste, and help the planet one
            match at a time.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're a buyer looking to complete your item, or a seller
            hoping to give your leftover piece a new life — we make it simple,
            safe, and rewarding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

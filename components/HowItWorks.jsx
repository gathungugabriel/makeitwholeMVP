"use client";
import { motion } from "framer-motion";
import { Camera, Link, Lightbulb } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Camera size={40} className="text-emerald-600" />,
      title: "Post What You’re Missing (or Have to Offer)",
      desc: "Upload a quick photo and describe the part or item you're looking for — or have lying around.",
    },
    {
      icon: <Link size={40} className="text-emerald-600" />,
      title: "We Match You",
      desc: "Our system connects you with people who have the exact match, so you don't have to hunt around.",
    },
    {
      icon: <Lightbulb size={40} className="text-emerald-600" />,
      title: "Complete Your Gear, Affordably",
      desc: "Trade, buy, or swap to finish what you started — no waste, no hassle.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-emerald-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

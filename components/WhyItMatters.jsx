"use client";
import { motion } from "framer-motion";
import { Wrench, Globe, Handshake } from "lucide-react";

export default function WhyItMatters() {
  const reasons = [
    {
      icon: <Wrench size={40} className="text-emerald-600" />,
      title: "Fix and Save",
      desc: "No need to buy new when you can complete what you already have.",
    },
    {
      icon: <Globe size={40} className="text-emerald-600" />,
      title: "Reduce Waste",
      desc: "Join the circular economy and help cut down electronic and accessory waste.",
    },
    {
      icon: <Handshake size={40} className="text-emerald-600" />,
      title: "Trusted Community",
      desc: "Connect with people who understand your needs.",
    },
  ];

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-12">Why It Matters</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

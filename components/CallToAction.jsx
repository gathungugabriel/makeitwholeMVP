"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";

export default function CallToAction() {
  const [state, handleSubmit] = useForm("xzzjlqpb");

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white text-center px-6">
      <AnimatePresence mode="wait">
        {state.succeeded ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">You're In! 🎉</h2>
            <p className="mt-3 text-green-600">
              Thanks for joining. We’ll notify you when Make It Whole Again launches.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to complete your gear?
            </h2>
            <p className="mt-2 text-gray-600">
              Join early and get exclusive access to the Make It Whole Again marketplace.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
            >
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full sm:w-80"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                {state.submitting ? "Submitting..." : "Get Early Access"}
              </button>
            </form>

            {state.errors?.length > 0 && (
              <p className="mt-4 text-red-600 font-medium">
                ⚠️ Something went wrong. Please try again later.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

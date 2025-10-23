"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function CallToAction() {
  const [state, handleSubmit] = useForm("xzzjlqpb");

  if (state.succeeded) {
    return (
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">
          ✅ You’re on the list!
        </h2>
        <p className="mt-2 text-gray-600">
          Thanks for joining Make It Whole Again.  
          We’ll notify you when we launch.
        </p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white text-center px-6">
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
          required
          placeholder="Enter your email"
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full sm:w-80"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-600 text-sm"
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          {state.submitting ? "Sending..." : "Get Early Access"}
        </button>
      </form>

      <p className="mt-4 text-gray-500 text-sm">
        Your email is safe — we’ll only notify you when we launch.
      </p>
    </section>
  );
}

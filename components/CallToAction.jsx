"use client";
import { useState } from "react";

export default function CallToAction() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xzzjlqpb", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

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
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full sm:w-80"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Get Early Access
        </button>
      </form>

      {status === "sending" && (
        <p className="mt-4 text-gray-500 animate-pulse">
          Sending your request...
        </p>
      )}
      {status === "success" && (
        <p className="mt-4 text-green-600 font-medium">
          ✅ Thank you! You’re on the list.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 font-medium">
          ⚠️ Something went wrong. Please try again later.
        </p>
      )}
    </section>
  );
}

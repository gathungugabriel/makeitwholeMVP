"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function EarlyAccessForm() {
  const [state, handleSubmit] = useForm("xzzjlqpb");

  if (state.succeeded) {
    return <p className="text-green-600">Thanks for joining!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-3"
    >
      <label htmlFor="email" className="text-sm text-gray-700">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="border border-gray-300 rounded-md px-3 py-2 w-64"
        placeholder="you@example.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        {state.submitting ? "Submitting..." : "Get Early Access"}
      </button>
    </form>
  );
}

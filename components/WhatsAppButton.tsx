"use client";

import Button from "./Button";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "254710194516"; // use international format
  const prefilledMessage =
    "Hey Gabriel! 👋 I just visited your project and would love to share some feedback or ask a question.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 sm:px-10 lg:px-24 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Got an idea, feedback, or just want to say hi? 💬 I’d love to hear from
        you! You can send me a WhatsApp message directly — it’s quick and easy.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          <Button className="bg-green-500 text-white hover:bg-green-600">
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </Button>
        </a>

        <a
          href="mailto:gabriel@example.com"
          className="inline-flex items-center gap-2"
        >
          <Button className="bg-gray-800 text-white hover:bg-gray-900">
            Send Email
          </Button>
        </a>
      </div>

      <p className="text-sm text-gray-500 mt-8">
        I usually reply within a few hours 😊
      </p>
    </section>
  );
}

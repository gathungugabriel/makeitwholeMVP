"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function WhatsAppButton() {
  const phoneNumber = "254710194516"; // Kenya country code
  const message = encodeURIComponent(
    "Hi Gabriel 👋, I just visited your Make It Whole Again MVP and wanted to share some feedback or ideas!"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-center z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      {isHovered && (
        <div className="mb-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg animate-fade-in">
          Chat with Gabriel 💬
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}

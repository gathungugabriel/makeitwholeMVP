"use client";
import Button from "./Button";

export default function Footer() {
  const whatsappNumber = "254710194516"; // Kenyan number in international format
  const whatsappMessage = encodeURIComponent(
    "Hey Gabriel! 👋 I just checked out Make It Whole Again and had a quick question or feedback..."
  );

  return (
    <footer className="bg-emerald-950 text-gray-200 py-14 text-center">
      <div className="max-w-5xl mx-auto px-6 space-y-8">

        
        {/* Contact options */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <p className="text-gray-400 text-sm">
            Got an idea, feedback, or just want to say hi? 💬 I’d love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 text-white hover:bg-green-700">
                💬 Chat on WhatsApp
              </Button>
            </a>
            <a href="mailto:makeitwholeagain@gmail.com">
              <Button className="bg-emerald-700 text-white hover:bg-emerald-800">
                ✉️ Send Email
              </Button>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 text-sm text-gray-400">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>

        {/* Tagline */}
        <p className="text-xs text-gray-500 mt-6">
          📸 🎵 👽 Built for the fixers, tinkerers, and savers.
        </p>
      </div>
    </footer>
  );
}

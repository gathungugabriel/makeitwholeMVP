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

        {/* Call to action */}
        <h2 className="text-2xl sm:text-3xl font-bold">
          Ready to complete your gear?
        </h2>
        <p className="text-gray-300">
          Join early and get exclusive access to the <span className="font-semibold">Make It Whole Again</span> marketplace.
        </p>

        {/* Email form (Formspree) */}
        <form
          action="https://formspree.io/f/your-form-id" // ← Replace with your actual Formspree endpoint
          method="POST"
          className="flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full sm:w-auto px-5 py-3 rounded-2xl text-gray-900 focus:outline-none"
          />
          <Button
            type="submit"
            className="bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Get Early Access
          </Button>
        </form>

        {/* Divider */}
        <div className="border-t border-emerald-800 my-6"></div>

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

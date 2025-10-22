export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-gray-200 py-10 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
        <p className="text-sm">
          📸 🎵 👽 Built for the fixers, tinkerers, and savers.
        </p>
      </div>
    </footer>
  );
}

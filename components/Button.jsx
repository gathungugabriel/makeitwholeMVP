export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-2xl shadow transition font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

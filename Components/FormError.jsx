export default function FormError({ message }) {
  if (!message || message === "success") return null;

  return (
    <div className="mt-6 p-4 bg-red-900/70 border border-red-500 text-red-100 rounded-lg text-center font-medium text-lg animate-pulse">
      {message}
    </div>
  );
}

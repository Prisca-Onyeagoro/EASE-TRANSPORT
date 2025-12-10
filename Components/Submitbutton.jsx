export default function SubmitButton({ isPending }) {
  return (
    <button
      disabled={isPending}
      className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-70 text-white font-bold py-4 rounded-lg transition shadow-lg hover:shadow-purple-500/50"
    >
      {isPending ? "Booking your ride..." : "Book Your Ride"}
    </button>
  );
}

import { User } from "lucide-react";

export default function SelectedField({ name, label, icon }) {
  return (
    <div>
      <label className="flex  items-center gap-2 text-purple-400 font-semibold mb-3">
        <User className="w-5 h-5" />
        {label}
      </label>
      <select
        name={name}
        className="w-full bg-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
      >
        <option value="">Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        <option value="prefer-not-to-say">Prefer not to say</option>
      </select>
    </div>
  );
}

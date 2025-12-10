import { MapPin, Phone, User, FileText, Group, CardSim } from "lucide-react";

const icons = { MapPin, Phone, User, FileText, Group, CardSim };

export default function InputField({
  name,
  label,
  icon,
  type = "text",
  placeholder,
}) {
  const Icon = icons[icon] || null;
  return (
    <div className="mt-4">
      <label className="flex items-center gap-2 text-purple-400 font-semibold mb-3">
        <Icon className="w-5 h-5" />
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-gray-700/50 text-gray-200 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
      />
    </div>
  );
}

import { FileText } from "lucide-react";

export default function TextareaField({ name, label, icon, placeholder }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-purple-400 font-semibold mb-3">
        <FileText className="w-5 h-5" />
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        rows="4"
        className="w-full bg-gray-700/50 text-gray-200 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
      />
    </div>
  );
}

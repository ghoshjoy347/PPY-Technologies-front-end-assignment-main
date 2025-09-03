"use client";
import { useState } from "react";
import { useDarkMode } from "./DarkModeContext";

const filters = ["3 Days", "7 Days", "10 Days", "30 Days"];

export default function TimeFilter({ onChange }: { onChange: (f: string) => void }) {
  const [active, setActive] = useState("3 Days");
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex gap-2 my-4">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => { setActive(f); onChange(f); }}
          className={`px-3 py-1 rounded transition-colors duration-200 ${
            active === f 
              ? "bg-red-600 text-white" 
              : isDarkMode 
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

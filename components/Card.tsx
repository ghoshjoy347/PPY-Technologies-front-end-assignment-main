"use client";

import { TrendingUp, TrendingDown, ChevronDown } from "lucide-react";
import { useDarkMode } from "./DarkModeContext";

export default function Card({ title, value, change, changeType }: { 
  title: string, 
  value: string, 
  change: string,
  changeType: "positive" | "negative" | "neutral"
}) {
  const { isDarkMode } = useDarkMode();

  const getChangeIcon = () => {
    if (changeType === "positive") return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (changeType === "negative") return <TrendingDown className="w-4 h-4 text-red-500" />;
    return null;
  };

  const getChangeColor = () => {
    if (changeType === "positive") return "text-green-600";
    if (changeType === "negative") return "text-red-600";
    return "text-gray-600";
  };

  return (
    <div className={`p-4 rounded-xl shadow-lg border relative transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      {/* View Report Button - Top Right */}
      <button className={`absolute top-3 right-3 px-3 py-1 border rounded text-sm font-bold transition-colors duration-200 ${
        isDarkMode 
          ? 'bg-gray-700 text-red-400 border-red-400 hover:bg-gray-600' 
          : 'bg-white text-red-600 border-red-600 hover:bg-red-50'
      }`}>
        View Report
      </button>

      {/* Centered Content */}
      <div className="text-center">
        <h3 className={`text-lg font-semibold mb-1 transition-colors duration-200 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>Current</h3>
        <div className="flex items-center justify-center gap-2 mb-2">
          <h4 className={`text-3xl font-semibold transition-colors duration-200 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>{title.split(' ')[1]}</h4>
          <p className={`text-3xl font-bold transition-colors duration-200 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>{value}</p>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          {getChangeIcon()}
          <span className={`text-sm font-medium ${getChangeColor()} transition-colors duration-200`}>
            {change}
          </span>
        </div>
      </div>

      {/* View Trend Button - Bottom Right */}
      <div className="flex justify-end">
        <button className={`px-4 py-2 font-bold rounded-lg border flex items-center gap-2 transition-colors duration-200 ${
          isDarkMode 
            ? 'bg-gray-700 text-green-400 border-green-400 hover:bg-gray-600' 
            : 'bg-white text-green-600 border-green-600 hover:bg-green-50'
        }`}>
          View Trend
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

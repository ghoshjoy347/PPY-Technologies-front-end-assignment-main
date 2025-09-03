"use client";

import { FileText, Download, XCircle, HandCoins, TrendingUp } from "lucide-react";
import { useDarkMode } from "./DarkModeContext";

interface StatCardProps {
  label: string;
  value: string;
  type: "purchases" | "redemptions" | "rejectedTxn" | "sipRejections" | "newSip";
}

const getIcon = (type: string) => {
  switch (type) {
    case "purchases":
      return <FileText className="w-8 h-8 text-blue-600" />;
    case "redemptions":
      return <Download className="w-8 h-8 text-green-600" />;
    case "rejectedTxn":
      return <XCircle className="w-8 h-8 text-red-600" />;
    case "sipRejections":
      return <HandCoins className="w-8 h-8 text-orange-600" />;
    case "newSip":
      return <TrendingUp className="w-8 h-8 text-purple-600" />;
    default:
      return <FileText className="w-8 h-8 text-gray-600" />;
  }
};

export default function StatCard({ label, value, type }: StatCardProps) {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`p-4 rounded-lg shadow border relative transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      {/* View Report Button - Top Right */}
      <button className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium transition-colors duration-200 ${
        isDarkMode 
          ? 'bg-red-500 text-white hover:bg-red-600' 
          : 'bg-red-600 text-white hover:bg-red-700'
      }`}>
        View Report
      </button>
      
      {/* Icon and Content */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          {getIcon(type)}
        </div>
        <div className="flex-1 text-center">
          <p className={`text-sm mb-1 transition-colors duration-200 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>{label}</p>
          <p className={`text-lg font-bold transition-colors duration-200 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>{value}</p>
        </div>
      </div>
    </div>
  );
}

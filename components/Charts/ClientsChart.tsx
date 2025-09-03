"use client";
import { Download } from "lucide-react";
import { useDarkMode } from "../DarkModeContext";

export default function ClientsChart() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`rounded-xl shadow p-6 transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className={`text-lg font-semibold transition-colors duration-200 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>CLIENTS</h3>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download Report
        </button>
      </div>
      
      {/* Custom Overlapping Circles Chart */}
      <div className="h-64 flex items-center justify-center relative">
        {/* Large Red Circle - Active (3824) */}
        <div className="absolute w-32 h-32 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
          3824
        </div>
        
        {/* Large Dark Red Circle - InActive (541) */}
        <div className="absolute w-28 h-28 bg-red-800 rounded-full flex items-center justify-center text-white font-bold text-base z-20 -ml-8 -mt-4">
          541
        </div>
        
        {/* Orange Circle - Online (60) */}
        <div className="absolute w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-30 ml-16 -mt-8">
          60
        </div>
        
        {/* Small Green Circle - New (2) */}
        <div className="absolute w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-40 ml-20 mt-8">
          2
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <span className={`text-sm transition-colors duration-200 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Online</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className={`text-sm transition-colors duration-200 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>New</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span className={`text-sm transition-colors duration-200 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Active</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-800 rounded-full"></div>
          <span className={`text-sm transition-colors duration-200 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>InActive</span>
        </div>
      </div>
    </div>
  );
}

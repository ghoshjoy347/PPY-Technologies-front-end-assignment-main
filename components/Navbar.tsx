"use client";

import { useState } from "react";
import { Search, Bell, Settings, Star, User, Lock, LogOut, HelpCircle, Calendar, MessageSquare, FileText, Globe, Moon, Sun } from "lucide-react";
import { useDarkMode } from "./DarkModeContext";

const menuItems = [
  "HOME", "CRM", "UTILITIES", "INSURANCE", "ASSETS", "MUTUAL", 
  "RESEARCH", "TRANSACT ONLINE", "GOAL GPS", 
  "FINANCIAL PLANNING", "WEALTH REPORT", "OTHER"
];

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow transition-colors duration-200`}>
      {/* Top Header */}
      <div className={`flex justify-between items-center p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-16 flex items-center justify-center">
            <img 
              src="/wealth-elite-logo.png" 
              alt="Wealth Elite Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="ex Live portfolio"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-yellow-400' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button className={`p-2 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <Bell className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <MessageSquare className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <Calendar className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <FileText className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <Globe className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <Settings className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <Star className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <User className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-full transition-colors duration-200 ${
            isDarkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}>
            <Lock className="w-5 h-5" />
          </button>
          <button className={`px-4 py-2 font-medium rounded transition-colors duration-200 ${
            isDarkMode 
              ? 'text-red-400 hover:bg-gray-700' 
              : 'text-red-600 hover:bg-red-50'
          }`}>
            LOGOUT
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-red-600">
        <div className="px-6">
          <ul className="flex gap-6 text-white font-medium py-3 overflow-x-auto">
            {menuItems.map((item) => (
              <li key={item} className="hover:text-red-200 cursor-pointer whitespace-nowrap">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
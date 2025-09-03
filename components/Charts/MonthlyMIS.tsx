"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from "chart.js";
import { useDarkMode } from "../DarkModeContext";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

export default function MonthlyMIS() {
  const { isDarkMode } = useDarkMode();

  const data = {
    labels: ["Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Line 1",
        data: [0.20, -0.20, 0.40, 0.30],
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        tension: 0.4,
        fill: true
      },
      {
        label: "Line 2", 
        data: [0.10, 0.30, 0.60, 0.40],
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        tension: 0.4,
        fill: true
      },
      {
        label: "Line 3",
        data: [0.40, 0.20, 0.30, 0.50],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDarkMode ? '#e5e7eb' : '#374151',
        }
      },
      title: {
        display: true,
        text: 'MONTHLY MIS',
        color: isDarkMode ? '#ffffff' : '#1f2937',
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          color: isDarkMode ? '#374151' : '#e5e7eb',
        },
        ticks: {
          color: isDarkMode ? '#e5e7eb' : '#374151',
        }
      },
      y: {
        beginAtZero: false,
        min: -0.20,
        max: 0.60,
        grid: {
          color: isDarkMode ? '#374151' : '#e5e7eb',
        },
        ticks: {
          stepSize: 0.20,
          color: isDarkMode ? '#e5e7eb' : '#374151',
          callback: function(value: any) {
            return value.toFixed(2) + ' Cr';
          }
        }
      }
    }
  };

  return (
    <div className={`rounded-xl shadow p-6 transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className={`text-lg font-semibold transition-colors duration-200 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>MONTHLY MIS</h3>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
          View Report
        </button>
      </div>
      
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

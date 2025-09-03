"use client";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend, Filler } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useDarkMode } from "../DarkModeContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend, Filler);

export default function SipBusiness() {
  const { isDarkMode } = useDarkMode();

  const data = {
    labels: ["Mar", "Apr", "May", "Jun"],
    datasets: [
      { 
        type: "bar" as const,
        label: "SIP Volume", 
        data: [0.8, 1.2, 1.4, 1.6], 
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
        yAxisID: 'y'
      },
      {
        type: "line" as const,
        label: "Growth %",
        data: [120, 95, 100, 105],
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        yAxisID: 'y1'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDarkMode ? '#e5e7eb' : '#374151',
        }
      },
      title: {
        display: true,
        text: 'SIP BUSINESS CHART',
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
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        beginAtZero: true,
        max: 2.4,
        grid: {
          color: isDarkMode ? '#374151' : '#e5e7eb',
        },
        ticks: {
          stepSize: 0.8,
          color: isDarkMode ? '#e5e7eb' : '#374151',
          callback: function(value: any) {
            return value.toFixed(1);
          }
        }
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        beginAtZero: false,
        min: 90,
        max: 120,
        grid: {
          color: isDarkMode ? '#374151' : '#e5e7eb',
          drawOnChartArea: false,
        },
        ticks: {
          stepSize: 10,
          color: isDarkMode ? '#e5e7eb' : '#374151',
        },
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
        }`}>SIP BUSINESS CHART</h3>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
          View Report
        </button>
      </div>
      
      <div className="h-64">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
}

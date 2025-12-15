
'use client'; // <-- Add this at the very top
import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ProfitCard() {
  const series = [{ name: "Profit", data: [70, 45, 60, 30, 45, 80] }];

  const options = {
    chart: { type: "line", sparkline: { enabled: true } },
    stroke: { curve: "smooth", width: 3 },
    colors: ["#3b82f6"],
    tooltip: { enabled: false },
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-600">Profit</h3>
          <p className="text-xs text-gray-500">Last Month</p>
        </div>
      </div>

      <div className="h-28">
        <Chart options={options} series={series} type="line" height="100%" />
      </div>

      <div className="flex items-end justify-between mt-6">
        <h2 className="text-3xl font-bold text-gray-900">624k</h2>
        <span className="text-sm font-semibold text-green-600 flex items-center gap-1">
          +8.24%
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </div>
  );
}
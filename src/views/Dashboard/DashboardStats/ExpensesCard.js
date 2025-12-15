'use client'; // <-- Add this at the very top
import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ExpensesCard() {
  const options = {
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        hollow: { size: "62%" },
        track: { background: "#e5e7eb", strokeWidth: "90%" },
        dataLabels: {
          show: true,
          name: { show: false },
          value: { fontSize: "28px", fontWeight: 600, color: "#1f2937" },
        },
      },
    },
    colors: ["#fb923c"],
    stroke: { lineCap: "round" },
    labels: [""],
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-gray-900">82.5k</h3>
        <p className="text-sm text-gray-600">Expenses</p>
      </div>

      <div className="relative -mt-8">
        <Chart options={options} series={[78]} type="radialBar" height={200} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        $21k Expenses more than last month
      </p>
    </div>
  );
}
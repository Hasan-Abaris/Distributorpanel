'use client'; // <-- Add this at the very top
import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function LeadsCard() {
  const options = {
    chart: { type: "donut" },
    colors: ["#24b364", "#53d28c", "#7eddab", "#a9e9c5"],
    legend: { show: false },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        donut: {
          size: "68%",
          labels: {
            show: true,
            name: { show: false },
            value: { fontSize: "2rem", fontWeight: 600, color: "#1f2937" },
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              color: "#22c55e",
              fontSize: "0.875rem",
              fontWeight: 600,
              formatter: () => "184",
            },
          },
        },
      },
    },
    tooltip: { enabled: false },
  };

  const series = [45, 58, 30, 50]; // Electronic, Sports, Decor, Fashion

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Generated Leads</h3>
        <p className="text-sm text-gray-600">Monthly Report</p>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">4,350</h2>
          <p className="text-green-600 text-sm font-semibold flex items-center mt-2 gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            15.8%
          </p>
        </div>

        <div className="w-28 h-28 -mr-10 p-2">
            
          <Chart options={options} series={series}  type="donut"  height={160}  />
         
        </div>
      </div>
    </div>
  );
}
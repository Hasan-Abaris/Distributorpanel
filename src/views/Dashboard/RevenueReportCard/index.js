'use client';

import React, { useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function RevenueReportCard() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const years = ["2025", "2024", "2023", "2022"];

  // Main Bar Chart
  const barOptions = {
    chart: { type: "bar", toolbar: { show: false }, stacked: false },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 8,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 6, colors: ["transparent"] },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      labels: { style: { colors: "#8e8e8e", fontSize: "13px" } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: -200,
      max: 300,
      tickAmount: 5,
      labels: { style: { colors: "#8e8e8e", fontSize: "13px" }, formatter: (val) => val.toFixed(0) },
    },
    grid: { show: false },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetY: 4,
      markers: { radius: 12 },
      itemMargin: { horizontal: 10 },
      fontSize: "13px",
    },
    colors: ["#696cff", "#ff9f43"],
    fill: { opacity: 1 },
    tooltip: { y: { formatter: (val) => `$${Math.abs(val)}k` } },
  };

  const barSeries = [
    { name: "Earning", data: [270, 210, 180, 200, 250, 280, 250, 270, 150] },
    { name: "Expense", data: [-140, -160, -180, -150, -100, -60, -80, -100, -180] },
  ];

  // Small Line Chart
  const lineOptions = {
    chart: { type: "line", sparkline: { enabled: true } },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#696cff"],
    tooltip: { enabled: false },
  };

  const lineSeries = [
    { name: "This Month", data: [50, 60, 40, 54, 46, 65, 30, 47, 42, 65, 40] },
  ];

  return (
    <div className="col-span-12 mt-5">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          
          {/* LEFT: MAIN CHART */}
          <div className="flex-1 relative p-6">
            <h5 className="absolute top-6 left-6 text-xl font-semibold text-gray-900 z-10">
              Revenue Report
            </h5>

            <div className="mt-4 h-96">
              <Chart
                options={barOptions}
                series={barSeries}
                type="bar"
                height="100%"
              />
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-72 p-10 border-t lg:border-t-0 lg:border-l border-gray-200">

            {/* YEAR DROPDOWN */}
            <div className="text-center px-18 relative inline-block">
              <select
                className="bg-primary text-white px-2 py-2 rounded-lg cursor-pointer outline-none"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>

            {/* TOTAL REVENUE */}
            <div className="text-center mt-8">
              <h1 className="text-2xl  text-gray-900">$25,825</h1>
              <p className="text-gray-600 mt-2">
                <span className="font-medium">Budget: </span>56,800
              </p>
            </div>

            {/* SMALL LINE CHART */}
            <div className="mt-8">
              <Chart
                options={lineOptions}
                series={lineSeries}
                type="line"
                height={115}
              />
            </div>

            {/* BUTTON */}
            <div className="text-center mt-8">
              <button className="bg-primary px-6 py-3 text-white font-medium rounded-lg hover:shadow-lg transition-shadow">
                Increase Budget
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

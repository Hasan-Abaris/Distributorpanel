'use client';

import React, { useState, useEffect } from "react";

export default function ListYourProductsPage() {
  const [selectedMethod, setSelectedMethod] = useState("search");
  const [productIdsText, setProductIdsText] = useState("");
  const [idCount, setIdCount] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);

  const methods = [
    { id: "search", icon: "🔍", label: "Search" },
    { id: "image", icon: "📷", label: "Product image" },
    { id: "ids", icon: "📊", label: "Product IDs" },
    { id: "url", icon: "🌐", label: "Web URL" },
    { id: "blank", icon: "📄", label: "Blank form" },
    { id: "spreadsheet", icon: "📋", label: "Spreadsheet" },
  ];

  // Count non-empty lines for Product IDs
  useEffect(() => {
    const lines = productIdsText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
    setIdCount(lines.length);
  }, [productIdsText]);

  const isProductIdSubmitEnabled = selectedMethod === "ids" && idCount > 0;
  const isSpreadsheetSubmitEnabled = uploadedFile !== null;

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedFile(file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 px-6">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 left-40 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            List Your Products
            <a href="#" className="ml-4 text-lg text-blue-600 hover:text-blue-800 underline">
              Learn more
            </a>
          </h1>
          <p className="text-xl text-gray-600">Select an option to get started.</p>
        </div>

        {/* Method Selector Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={() => {
                setSelectedMethod(method.id);
                setProductIdsText("");
                setUploadedFile(null);
              }}
              className={`
                relative p-6 rounded-xl border-2 transition-all duration-200
                ${selectedMethod === method.id
                  ? "border-blue-600 bg-blue-50 shadow-lg scale-105"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                }
              `}
            >
              <div className="text-4xl mb-3">{method.icon}</div>
              <div className="text-sm font-medium text-gray-700">{method.label}</div>
              {selectedMethod === method.id && (
                <div className="absolute inset-0 rounded-xl ring-4 ring-blue-200 pointer-events-none"></div>
              )}
            </button>
          ))}
        </div>

        {/* Search Method */}
        {selectedMethod === "search" && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Search your catalogue or Baofeng's catalogue for a listing to sell or copy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <input
                type="text"
                placeholder="Enter product title, description or keywords"
                className="flex-1 px-6 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-600 transition-all"
              />
              <button disabled className="px-12 py-4 bg-gray-300 text-gray-500 rounded-xl font-semibold text-lg cursor-not-allowed">
                Search
              </button>
            </div>
            <p className="text-center mt-8 text-gray-500">
              Listing not found?{" "}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Create a new listing
              </a>
            </p>
          </div>
        )}

        {/* Product IDs Method */}
        {selectedMethod === "ids" && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Find your product in Baofeng's catalogue using one or more product identifiers.
            </p>
            <div className="space-y-4">
              <div className="relative">
                <textarea
                  value={productIdsText}
                  onChange={(e) => setProductIdsText(e.target.value)}
                  placeholder="You can search for up to 1,000 UPC, EAN, ISBN or ASIN ID. For more than 1,000 products, download a blank listing loader template from the Spreadsheet tab."
                  className="w-full h-48 px-6 py-4 text-base border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-600 transition-all"
                  spellCheck={false}
                />
                <div className="absolute bottom-3 right-4 text-sm text-gray-500">
                  ({idCount}/1000)
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  disabled={!isProductIdSubmitEnabled}
                  className={`
                    px-12 py-4 rounded-xl font-semibold text-lg transition-all
                    ${isProductIdSubmitEnabled
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  Submit
                </button>
              </div>
            </div>
            <p className="text-center mt-8 text-gray-500">
              Listing not found?{" "}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Create a new listing
              </a>
            </p>
          </div>
        )}

        {/* Spreadsheet Method */}
        {selectedMethod === "spreadsheet" && (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Upload a catalogue spreadsheet in Baofeng format or your own custom format.
            </h3>

            {/* File Upload Area */}
            <div
              onDrop={handleFileDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-400 transition-colors"
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileSelect}
                accept=".xlsx,.xls,.csv"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-6xl mb-4">📄</div>
                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-lg transition-all">
                  Upload file
                </button>
                <p className="mt-4 text-gray-600">Drag file here to upload</p>
              </label>

              {/* Show uploaded file name */}
              {uploadedFile && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium">Uploaded: {uploadedFile.name}</p>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-8">
              <div className="relative">
                <button
                  disabled={!isSpreadsheetSubmitEnabled}
                  className={`
                    px-12 py-4 rounded-xl font-semibold text-lg transition-all
                    ${isSpreadsheetSubmitEnabled
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  Submit products
                </button>
                {!isSpreadsheetSubmitEnabled && (
                  <div className="absolute -left-48 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                    Select a file to activate
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <a href="#" className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-semibold mb-4 md:mb-0">
                <span className="text-2xl">⬇️</span>
                <b>Download Blank Template</b>
              </a>
              <a href="#" className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-semibold">
                <span className="text-2xl">📤</span>
                <b>Check Upload Status</b>
              </a>
            </div>
          </div>
        )}

        {/* Placeholder for other methods */}
        {["image", "url", "blank"].includes(selectedMethod) && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500">
              {methods.find((m) => m.id === selectedMethod)?.label} feature coming soon...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
import React from 'react';

export default function WhatWeCanDoSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1445px] mx-auto px-6 lg:px-16">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#0F172A] mb-16">
          What we can do?
        </h2>

        {/* Cards Grid - 4 columns on desktop, responsive on smaller screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          
          {/* Card 1: Grow Your Sales */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <img 
                src="/images/logos/Sales.png" 
                alt="Grow Your Sales Icon" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
              Grow Your Sales
            </h3>
            <p className="text-base text-[#213D39] max-w-[280px]">
              We help your products reach thousands of verified buyers.
            </p>
          </div>

          {/* Card 2: Smart Product Listings */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <img 
                src="/images/logos/Product.png" 
                alt="Smart Product Listings Icon" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
              Smart Product Listings
            </h3>
            <p className="text-base text-[#213D39] max-w-[280px]">
              Optimized listing tools for higher visibility and faster sales.
            </p>
          </div>

          {/* Card 3: Easy Logistics */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <img 
                src="/images/logos/Logistics.png" 
                alt="Easy Logistics Icon" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
              Easy Logistics
            </h3>
            <p className="text-base text-[##213D39] max-w-[280px]  ">
              Pan-India delivery with trusted courier partners.
            </p>
          </div>

          {/* Card 4: Fast Payments */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <img 
                src="/images/logos/Payments.png" 
                alt="Fast Payments Icon" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
              Fast Payments
            </h3>
            <p className="text-base text-[#213D39] max-w-[280px]">
              Secure payouts directly to your bank within 48 hours.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
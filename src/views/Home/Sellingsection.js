import React from 'react';

export default function HowSellingWorksSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1445px] mx-auto px-6 lg:px-16">
        
        {/* Title & Subtitle - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A]">
            How selling on our platform works
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-[#475569]">
            A simple process designed for every Distributor—from new startups to established brands.
          </p>
        </div>

        {/* Main Layout: Left = Steps, Right = Ladder Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: 4 Step Cards - Always 1 column on large screens, responsive on mobile */}
          <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 order-2 lg:order-1">
            
            {/* Step 1 - Highlighted with thick blue border */}
            <div className="bg-white rounded-2xl border-2 border-[#0B81CF] p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                  style={{ background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)' }}
                >
                  1
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">
                Create Your Account
              </h3>
              <p className="text-base lg:text-lg text-[#475569] leading-relaxed">
                Register with your GST, PAN, and bank details.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                  style={{ background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)' }}
                >
                  2
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">
                Add Your Products
              </h3>
              <p className="text-base lg:text-lg text-[#475569] leading-relaxed">
                Upload your walkie-talkies, accessories, and gear with easy listing tools.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                  style={{ background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)' }}
                >
                  3
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">
                Receive Orders Automatically
              </h3>
              <p className="text-base lg:text-lg text-[#475569] leading-relaxed">
                Our platform brings buyers directly to your products.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                  style={{ background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)' }}
                >
                  4
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">
                Get Paid Fast
              </h3>
              <p className="text-base lg:text-lg text-[#475569] leading-relaxed">
                Payments reach your bank within 48 hours.
              </p>
            </div>

          </div>

          {/* RIGHT: Ladder Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-center">
            <img
              src="/images/logos/ladder.png"
              alt="Growth Ladder - How selling works"
              className="w-full max-w-[600px] h-auto rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
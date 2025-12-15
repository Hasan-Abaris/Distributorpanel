import React from 'react';

export default function AllInOnePlatformSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 lg:py-32">
      <div className="max-w-[1445px] mx-auto px-6 lg:px-16 relative">
        
        {/* Main Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Your All-in-One Distributor Platform
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-[#475569]">
            Manage products, orders, shipping, support, and payments from one clean,
            powerful dashboard.
          </p>
        </div>

        {/* Layout: Left features stack, Right dashboard image */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side: Feature Cards (stacked on mobile, vertical on desktop) */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-12">
            
            {/* Feature 1: Real-Time Order Tracking */}
            <div className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <img 
                  src="https://static.vecteezy.com/system/resources/thumbnails/069/971/687/small/tracking-line-icon-set-featuringtracking-icons-in-modern-outline-style-minimal-linear-icon-set-for-gps-navigation-parcel-delivery-location-services-shipping-logistics-and-real-time-monitoring-vector.jpg" 
                  alt="Order Tracking Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[#0F172A] mb-2">
                  Real-Time Order Tracking
                </h3>
                <p className="text-base lg:text-lg text-[#475569]">
                  Monitor pending, in-transit, delivered, and returned orders instantly—your entire business status at a glance.
                </p>
              </div>
            </div>

            {/* Feature 2: Smart Sales Analytics */}
            <div className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <img 
                  src="https://www.shutterstock.com/image-vector/data-analytics-dashboard-features-line-260nw-2553639415.jpg" 
                  alt="Sales Analytics Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[#0F172A] mb-2">
                  Smart Sales Analytics
                </h3>
                <p className="text-base lg:text-lg text-[#475569]">
                  Many dashboard publishing packages and web page editors now use for them.
                </p>
              </div>
            </div>

            {/* Feature 3: Manage Inventory Effortlessly */}
            <div className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <img 
                  src="https://media.istockphoto.com/id/1481456963/vector/distribution-warehouse-and-order-fulfillment-thin-line-icons-editable-stroke.jpg?s=170667a&w=is&k=20&c=pN3Kq6r1PBT-40xDjO4aoTmFjx7l6urZlbBOyiTX00Y=" 
                  alt="Inventory Management Icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[#0F172A] mb-2">
                  Manage Inventory Effortlessly
                </h3>
                <p className="text-base lg:text-lg text-[#475569]">
                  Handle replacements, refunds, and stock updates with ease.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side: Dashboard Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/images/logos/dashboard.png"
                alt="Distributor Dashboard Preview"
                className="w-full max-w-[763px] h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
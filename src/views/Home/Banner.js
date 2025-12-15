export default function DistributorHero() {
  return (
    <section className="w-full bg-[#D1EDF5]">
      <div className="max-w-[1445px] mx-auto px-6 sm:px-12 lg:px-16 py-16 lg:py-32">
        
        {/* Use flex column on small screens, row on large */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
          
          {/* ================= RIGHT IMAGE AREA (MOVES TO TOP ON MOBILE) ================= */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end relative">
            
            {/* Vector Decoration */}
          {/* Vector Decoration */}
<img
  src="/images/logos/Vector-23.png"
  alt=""
  className="absolute top-[122px] right-[40px] w-[217px] h-auto z-0 pointer-events-none hidden lg:block"
/>

            {/* Main Image */}
            <div className="w-full max-w-[500px] lg:w-[697px] aspect-[697/682] rounded-3xl overflow-hidden shadow-lg relative z-10">
              <img
                src="/images/logos/distributor.png"
                alt="Distributor"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Box 1 - Revenue */}
            <div className="absolute top-[45%] sm:top-[300px] left-0 sm:left-auto sm:right-[420px]  bg-white rounded-3xl px-6 py-5 shadow-lg w-[180px] sm:w-[200px] z-20 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-xl font-bold">$</span>
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  +48.50%
                </div>
              </div>
              <p className="text-2xl font-bold text-[#0F172A] leading-none">$36,845.00</p>
              <p className="text-sm text-gray-500 mt-1">Total Revenue</p>
            </div>

            {/* Floating Box 2 - Customers */}
            <div className="absolute top-[80px] sm:top-[176px] right-[-10px] sm:right-[-20px] bg-white rounded-3xl px-6 py-5 shadow-lg w-[170px] sm:w-[190px] z-20 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  +3.50%
                </div>
              </div>
              <p className="text-2xl font-bold text-[#0F172A] leading-none">86,590</p>
              <p className="text-sm text-gray-500 mt-1">Total Customers</p>
            </div>
            </div>

          {/* ================= LEFT CONTENT (MOVES BELOW IMAGE ON MOBILE) ================= */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 max-w-[586px] mx-auto lg:mx-0 text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-semibold leading-tight text-[#0F172A]">
              Welcome to the Baofeng <br className="hidden sm:inline" /> Distributor Hub
            </h1>

            <p className="mt-6 text-lg lg:text-[18px] leading-relaxed text-[#475569]">
              Your gateway to selling walkie-talkies, accessories, and communication gear across India
            </p>

            {/* Tick Points */}
            <ul className="mt-6 space-y-3 text-base lg:text-[16px] text-[#475569]">
              <li className="flex items-start gap-3">
                <span className="text-[#0EA5E9] font-bold text-xl">✔</span>
                <span>Your gateway to selling walkie-talkies, accessories, and communication gear across India</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0EA5E9] font-bold text-xl">✔</span>
                <span>Join thousands of businesses scaling faster with our powerful tools and seamless distributor experience.</span>
              </li>
            </ul>

            {/* Stats - Stack vertically on mobile, row on larger screens */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard value="12K+" label="Active Distributors" />
              <StatCard value="1.5M+" label="Monthly Visitors" />
              <StatCard value="2K+" label="Distributor Support Cases Solved" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="bg-white rounded-2xl px-4 py-3 text-center shadow-sm">
      <p className="text-2xl sm:text-[28px] font-semibold text-[#0F172A] leading-none">
        {value}
      </p>
      <p className="mt-2 text-sm sm:text-[16px] font-medium text-[#475569]">
        {label}
      </p>
    </div>
  );
}
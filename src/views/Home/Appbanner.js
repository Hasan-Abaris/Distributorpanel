'use client';

export default function App() {
  return (
    <>
      {/* Full-width Hero Banner - Exact match to your screenshot */}
      <div
        className="relative w-full h-[360px] overflow-hidden px-10 py-10"
        style={{
          background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)',
        }}
      >
        {/* Wave SVG layers to match the curved abstract background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
        >
          <path
            fill="#1E90FF"
            fillOpacity="0.25"
            d="M0,320L48,293.3C96,267,192,213,288,197.3C384,181,480,203,576,208C672,213,768,203,864,186.7C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,500L1392,500C1344,500,1248,500,1152,500C1056,500,960,500,864,500C768,500,672,500,576,500C480,500,384,500,288,500C192,500,96,500,48,500L0,500Z"
          />
          <path
            fill="#60A5FA"
            fillOpacity="0.2"
            d="M0,400L60,373.3C120,347,240,293,360,266.7C480,240,600,240,720,240C840,240,960,240,1080,229.3C1200,219,1320,197,1380,186.7L1440,176L1440,500L1380,500C1320,500,1200,500,1080,500C960,500,840,500,720,500C600,500,480,500,360,500C240,500,120,500,60,500L0,500Z"
          />
        </svg>

        {/* Main Content Container */}
        <div className="relative max-w-[1240px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="text-white max-w-[600px]">
            <h1
              className="text-[36px] font-bold leading-[52px] tracking-normal"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Grow your business faster
              <br />
              with Baofeng Distributor Hub
            </h1>

            <p
              className="mt-6 text-[16px] font-light leading-[24px] opacity-90"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Thousands of distributors trust us to scale their communication gear business.
              <br />
              Be part of India’s fastest-growing marketplace.
            </p>
          </div>

          {/* Right Side - Button */}
          <div>
            <button
              className="px-[48px] py-[16px] text-white text-lg font-medium rounded-full border border-white/30 shadow-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(98.99deg, rgba(217, 217, 217, 0.4) -25.81%, rgba(217, 217, 217, 0.2) 130.94%)',
                borderImageSource: 'linear-gradient(98.51deg, #F4F4F4 -15.21%, rgba(244, 244, 244, 0.3) 126.67%)',
                boxShadow: `
                  0px 1.85px 3.15px 0px #31313106,
                  0px 20px 13px 0px #3131310D,
                  0px 38.52px 25.48px 0px #3131310F,
                  0px 64px 46px 0px #3131310A,
                  0px 100px 80px 0px #31313105
                `,
                backdropFilter: 'blur(10px)',
              }}
            >
              Become Distributor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
'use client';

import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white overflow-hidden">
        
        {/* Left Side - Testimonial Content */}
        <div className=" p-12 flex flex-col justify-center space-y-8">
          <blockquote className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              It was great Growing with Bafeng
            </h2>
            
            {/* Star Rating - 4 filled stars */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Before joining the platform, sales were slow. Now we ship 100+ walkie-talkies monthly. The ads tool works amazingly!
            </p>
            
            {/* Button with exact gradient and dimensions */}
            <button className="w-[190px] h-12 px-8 py-3 text-white font-medium rounded-md bg-gradient-to-br from-[#0B81CF] via-[#0B81CF] to-[#0069AF] hover:from-[#0069AF] hover:to-[#0B81CF] transition-all flex items-center justify-center gap-2">
              Read All Testimonials
            </button>
          </blockquote>
        </div>
        
        {/* Right Side - Image */}
        <div className="bg-gradient-to-b from-blue-100 to-blue-50 flex items-center justify-center py-16 px-8">
          <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/images/logos/person.png"
              alt="Smiling businessman with arms crossed"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
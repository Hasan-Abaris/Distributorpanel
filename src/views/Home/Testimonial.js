'use client';

import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 border-t-8 border-blue-700 rounded-lg shadow-lg overflow-hidden bg-white">
        
        {/* Left Side - Testimonial Content */}
        <div className="bg-gradient-to-b from-blue-50 to-white p-12 flex flex-col justify-center">
          <blockquote className="space-y-8">
            <div className="text-3xl font-bold text-gray-800">
              “It was great Growing with Bafeng
            </div>
            
            {/* Star Rating */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-8 h-8 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              “Before joining the platform, sales were slow. Now we ship 100+ walkie-talkies monthly. The ads tool works amazingly!”
            </p>
            
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition">
              Read All Testimonials
            </button>
          </blockquote>
        </div>
        
        {/* Right Side - Image */}
        <div className="relative bg-gradient-to-b from-blue-100 to-blue-50 flex items-center justify-center p-16">
          <div className="rounded-full overflow-hidden shadow-2xl w-96 h-96 relative">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/048/002/455/large_2x/confident-young-indonesian-businessman-in-professional-suit-smiling-with-arms-crossed-against-light-background-photo.jpg"
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
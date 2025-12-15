import React from 'react'

export default function DigitalProductsSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 lg:py-32">
      <div className="max-w-[1445px] mx-auto px-6 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative">

            {/* Top Customers Card */}
            <div className="bg-white rounded-lg shadow-[0_20px_30px_rgba(0,0,0,0.07)] p-8 max-w-md">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
                Top Customers
              </h3>

              <div className="space-y-4">
                {[
                  ['Darlene Robertson', '£105,483'],
                  ['Jane Cooper', '£78,788'],
                  ['Ronald Richards', ''],
                  ['Esther Howard', ''],
                  ['Cody Fisher', ''],
                  ['Theresa Webb', '£1,004'],
                ].map(([name, amount]) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-dashed" />
                      <span className="font-medium text-[#0F172A]">{name}</span>
                    </div>
                    <span className="text-[#475569] font-medium">{amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Total Invoice Card */}
            <div className="absolute top-[60%] left-[60%] lg:left-[70%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-[0_28px_40px_rgba(0,0,0,0.08)] p-6 w-[300px] border border-gray-100">

              <div className="flex items-end justify-between gap-4">

                {/* LEFT TEXT */}
                <div>
                  <p className="text-sm text-[#475569] font-medium mb-1">
                    Total Invoice
                  </p>

                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-[#0F172A]">
                      520
                    </span>
                    <span className="text-green-600 font-semibold text-lg mb-1">
                      +12%
                    </span>
                  </div>
                </div>

                {/* RIGHT BAR CHART */}
                <div className="flex items-end gap-2 h-[76.7px]">
                  <div className="w-[7.87px] h-full bg-gray-200 rounded-[15.73px]" />
                  <div className="w-[7.87px] h-full bg-gray-200 rounded-[15.73px]" />
                  <Bar fill="100%" />
                  <Bar fill="70%" />
                  <Bar fill="40%" />
                  <Bar fill="20%" />
                </div>

              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="max-w-lg">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
              Managing & selling
              <br />
              digital products is
              <br />
              now easier.
            </h2>

            <p className="mt-8 text-lg text-[#475569] leading-relaxed opacity-90">
              Digital products are where it’s at! There are so many benefits to
              selling digital products. It’s easy to get started and they can be
              extremely profitable with smart entrepreneurs and creatives.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ================= BAR COMPONENT ================= */

function Bar({ fill }) {
  return (
    <div className="w-[7.87px] h-full bg-yellow-100 rounded-[15.73px] overflow-hidden flex items-end">
      <div
        className="w-full bg-yellow-400 rounded-[15.73px]"
        style={{ height: fill }}
      />
    </div>
  )
}

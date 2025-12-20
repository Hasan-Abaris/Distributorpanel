// app/register/page.js

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const steps = [
  'Identity Verification',
  'Personal Details',
  'GST & Business Details',
  'WPC Details',
  'Bank Details',
  'Upload Document',
  'Video KYC'
]

const stepDescriptions = [
  'Confirm your identity to begin the process.',
  'Enter your personal information to continue.',
  'Provide your GST and business information.',
  'Submit your WPC compliance details.',
  'Add your bank information for payments.',
  'Upload the required verification documents.',
  'Complete a quick video verification.'
]

export default function RegistrationForm() {
  const router = useRouter()

  const [activeStep, setActiveStep] = useState(0) // Open Bank Details
  const [gstStatus, setGstStatus] = useState('yes')

  return (
    <div className='min-h-screen bg-gray-50 py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-medium text-black'>Complete your KYC</h1>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* LEFT SIDEBAR — PURPLE BACKGROUND + FIXED SIZE */}
          <div
            className='bg-[#F1F0FB] rounded-3xl shadow-2xl border border-gray-200 overflow-hidden'
            style={{ width: '348px', height: '952px', flexShrink: 0 }}
          >
            {/* LEFT SIDEBAR LOGO */}
            <div className='bg-gradient-to-b from-blue-50 to-white py-10 text-center'>
              <img src='/images/logos/logo.png' alt='Company Logo' className='mx-auto w-48 object-contain' />
            </div>

            <div className='p-6 space-y-4'>
              {steps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-5 rounded-3xl cursor-pointer transition-all duration-300 border-2 ${
                    activeStep === index
                      ? ' text-black border-blue-600 shadow-lg'
                      : 'bg-white/90 text-gray-600 border-transparent hover:bg-white'
                  }`}
                >
                  <div className='flex gap-4'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                        activeStep === index ? 'bg-white text-blue-900' : 'text-white'
                      }`}
                      style={{
                        background:
                          activeStep === index
                            ? '#FFFFFF'
                            : 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className='font-semibold text-base'>{step}</p>
                      <p className='text-xs opacity-80 mt-1 leading-tight'>{stepDescriptions[index]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-auto bg-white/90 p-6 text-center border-t border-gray-200'>
              <p className='text-sm text-gray-600 font-medium'>Need a help?</p>
              <p className='text-xs text-gray-500 mt-1'>chat with live support</p>
              <button className='mt-4 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-xl hover:bg-blue-700 transition'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-7 w-7'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT — WHITE BACKGROUND */}
          <div className='flex-1'>
            <div className='bg-white rounded-3xl shadow-2xl border border-gray-200 p-10'>
              <h2 className='text-3xl font-bold text-gray-900 mb-10'>{steps[activeStep]}</h2>

              {/* STEP 1: Identity Verification */}
              {activeStep === 0 && (
                <div className='space-y-10'>
                  <div>
                    <label className='block text-base font-medium text-gray-700 mb-3'>Enter PAN Number</label>
                    <input
                      type='text'
                      placeholder='Enter your PAN'
                      className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                    />
                  </div>
                  <div>
                    <label className='block text-base font-medium text-gray-700 mb-3'>Upload PAN Document</label>
                    <div className='flex gap-4'>
                      <input
                        type='text'
                        placeholder='Upload'
                        readOnly
                        className='flex-1 px-6 py-5 border border-gray-300 rounded-3xl bg-gray-50 text-gray-500'
                      />
                      <button
                        className='w-[150px] h-[48px] flex items-center justify-center
             text-white rounded-2xl font-semibold shadow-lg transition'
                        style={{
                          background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                        }}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className='block text-base font-medium text-gray-700 mb-3'>Enter Aadhaar Number</label>
                    <input
                      type='text'
                      placeholder='Enter your Aadhaar'
                      className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                    />
                  </div>
                  <div>
                    <label className='block text-base font-medium text-gray-700 mb-3'>Upload Aadhaar Document</label>
                    <div className='flex gap-4'>
                      <input
                        type='text'
                        placeholder='Upload'
                        readOnly
                        className='flex-1 px-6 py-5 border border-gray-300 rounded-3xl bg-gray-50 text-gray-500'
                      />
                      <button
                        className='w-[150px] h-[48px] flex items-center justify-center
             text-white rounded-2xl font-semibold shadow-lg transition'
                        style={{
                          background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                        }}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                  <div className='text-center pt-8'>
                    <button
                      onClick={() => setActiveStep(1)}
                      className='w-[150px] h-[48px] items- items-center justify-center
             text-white rounded-2xl font-semibold shadow-lg transition'
                      style={{
                        background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Personal Details */}
              {activeStep === 1 && (
                <div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Name</label>
                      <input
                        type='text'
                        placeholder='Enter Name'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Mobile</label>
                      <input
                        type='text'
                        placeholder='Enter Mobile'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Alternate Mobile</label>
                      <input
                        type='text'
                        placeholder='Enter Alternate Mobile'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Present Address</label>
                      <input
                        type='text'
                        placeholder='Enter Present Address'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Select Country</label>
                      <select className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition bg-white'>
                        <option>-- Select Country --</option>
                        <option>India</option>
                        <option>USA</option>
                      </select>
                    </div>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Pin Code</label>
                      <input
                        type='text'
                        placeholder='Enter Pin'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>State</label>
                      <input
                        type='text'
                        placeholder='Enter State'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Education Qualification</label>
                      <input
                        type='text'
                        placeholder='Enter Education Qualification'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                  </div>

                  <div className='flex justify-center gap-6 mt-12'>
                    {/* Back Button */}
                    <button
                      onClick={() => setActiveStep(0)}
                      className='w-[150px] h-[48px] flex items-center justify-center
               border-2 border-gray-300 text-gray-700 rounded-2xl
               font-medium hover:bg-gray-50 transition'
                    >
                      Back
                    </button>

                    {/* Continue Button */}
                    <button
                      onClick={() => setActiveStep(2)}
                      className='w-[150px] h-[48px] items- items-center justify-center
             text-white rounded-2xl font-semibold shadow-lg transition'
                      style={{
                        background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: GST & Business Details */}
              {activeStep === 2 && (
                <div className='space-y-10'>
                  <div>
                    <p className='text-base font-medium text-gray-700 mb-4'>GST Status:</p>
                    <div className='flex items-center gap-8'>
                      <label className='flex items-center gap-3 cursor-pointer'>
                        <input
                          type='radio'
                          name='gst'
                          value='yes'
                          checked={gstStatus === 'yes'}
                          onChange={e => setGstStatus(e.target.value)}
                          className='w-5 h-5 text-blue-600 focus:ring-blue-500'
                        />
                        <span className='text-gray-700'>Yes (Registered with GST)</span>
                      </label>
                      <label className='flex items-center gap-3 cursor-pointer'>
                        <input
                          type='radio'
                          name='gst'
                          value='no'
                          checked={gstStatus === 'no'}
                          onChange={e => setGstStatus(e.target.value)}
                          className='w-5 h-5 text-blue-600 focus:ring-blue-500'
                        />
                        <span className='text-gray-700'>No (Not Registered)</span>
                      </label>
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Enter Pincode</label>
                      <input
                        type='text'
                        placeholder='Enter Pincode'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Enter City</label>
                      <input
                        type='text'
                        placeholder='Enter City'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Area</label>
                      <input
                        type='text'
                        placeholder='Area'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Enter Address</label>
                      <input
                        type='text'
                        placeholder='Enter Address'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div className='md:col-span-2'>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Enter Shop Name</label>
                      <input
                        type='text'
                        placeholder='Enter Shop Name'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                    <div className='md:col-span-2'>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Distribution Type</label>
                      <input
                        type='text'
                        placeholder='Enter Distribution Type'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>
                  </div>

                  <div className='flex justify-center gap-6 mt-12'>
                    {/* Back Button */}
                    <button
                      onClick={() => setActiveStep(1)}
                      className='w-[150px] h-[48px] flex items-center justify-center
               border-2 border-gray-300 text-gray-700 rounded-2xl
               font-medium hover:bg-gray-50 transition'
                    >
                      Back
                    </button>

                    {/* Continue Button */}
                    <button
                      onClick={() => setActiveStep(3)}
                      className='w-[150px] h-[48px] items- items-center justify-center
             text-white rounded-2xl font-semibold shadow-lg transition'
                      style={{
                        background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: WPC Details */}
              {activeStep === 3 && (
                <div className='space-y-10'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-8'>WPC Licence</h3>

                  <div>
                    <label className='block text-base font-medium text-gray-700 mb-3'>DPL Licence</label>
                    <input
                      type='text'
                      placeholder='Enter DPL No'
                      className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                    />
                  </div>

                  <div>
                    <label className='block text-base font-medium text-gray-700 mb-3'>Upload DPL Document</label>
                    <div className='flex gap-4'>
                      <input
                        type='text'
                        placeholder='Upload'
                        readOnly
                        className='flex-1 px-6 py-5 border border-gray-300 rounded-3xl bg-gray-50 text-gray-500'
                      />
                      <button
                        className='w-[150px] h-[48px] flex items-center justify-center
             text-white rounded-2xl font-semibold shadow-lg transition'
                        style={{
                          background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                        }}
                      >
                        Upload
                      </button>
                    </div>
                  </div>

                  <div className='flex justify-center gap-6 mt-12'>
                    <button
                      onClick={() => setActiveStep(0)}
                      className='w-[150px] h-[48px] flex items-center justify-center
               border-2 border-gray-300 text-gray-700 rounded-2xl
               font-medium hover:bg-gray-50 transition'
                    >
                      Back
                    </button>

                    {/* Continue Button */}
                    <button
                      onClick={() => setActiveStep(2)}
                      className='w-[150px] h-[48px] items- items-center justify-center
             text-white rounded-2xl font-semibold shadow-lg transition'
                      style={{
                        background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5: Bank Details */}
              {activeStep === 4 && (
                <div className='space-y-10'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-8'>Add Your Bank Account</h3>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Name</label>
                      <input
                        type='text'
                        placeholder='Enter Name'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>

                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Select Bank</label>
                      <select className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition bg-white'>
                        <option>-- Select Bank --</option>
                        <option>SBI</option>
                        <option>HDFC</option>
                        <option>ICICI</option>
                        <option>Axis</option>
                      </select>
                    </div>

                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>IFSC</label>
                      <input
                        type='text'
                        placeholder='Enter IFSC'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>

                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Mobile Number</label>
                      <input
                        type='text'
                        placeholder='Enter Mobile Number'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>

                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Account Number</label>
                      <input
                        type='text'
                        placeholder='Enter Account Number'
                        className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition'
                      />
                    </div>

                    <div>
                      <label className='block text-base font-medium text-gray-700 mb-3'>Select Account Type</label>
                      <select className='w-full px-6 py-5 border border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600 text-lg transition bg-white'>
                        <option>-- Select Account Type --</option>
                        <option>Savings</option>
                        <option>Current</option>
                      </select>
                    </div>
                  </div>

                  <div className='flex justify-center gap-6 mt-12'>
                    <button
                      onClick={() => setActiveStep(0)}
                      className='w-[150px] h-[48px] flex items-center justify-center
               border-2 border-gray-300 text-gray-700 rounded-2xl
               font-medium hover:bg-gray-50 transition'
                    >
                      Back
                    </button>

                    {/* Continue Button */}
                    <button
                      onClick={() => setActiveStep(2)}
                      className='w-[150px] h-[48px] items- items-center justify-center
             text-white rounded-2xl font-semibold shadow-lg transition'
                      style={{
                        background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 6: Upload Document — EXACTLY LIKE YOUR SCREENSHOT */}
              {activeStep === 5 && (
                <div className='space-y-16'>
                  <div className='bg-gray-50/70 rounded-3xl p-16 text-center border-2 border-dashed border-blue-300'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-8'>Other related Documents (optional)</h3>
                    <button className='inline-flex items-center gap-3 bg-white text-gray-700 px-12 py-5 rounded-2xl font-medium shadow-lg hover:shadow-xl hover:bg-gray-50 transition border border-gray-300'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-7 w-7'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
                        />
                      </svg>
                      Upload Document
                    </button>
                  </div>

                  <div className='flex justify-center gap-6'>
                    <button
                      onClick={() => setActiveStep(0)}
                      className='w-[150px] h-[48px] flex items-center justify-center
               border-2 border-gray-300 text-gray-700 rounded-2xl
               font-medium hover:bg-gray-50 transition'
                    >
                      Back
                    </button>

                    {/* Continue Button */}
                    <button
                      onClick={() => setActiveStep(2)}
                      className='w-[150px] h-[48px] items- items-center justify-center
             text-white rounded-2xl font-semibold shadow-lg transition'
                      style={{
                        background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 6 && (
                <div className='max-w-3xl mx-auto'>
                  <h3 className='text-2xl font-bold text-center text-gray-900 mb-12'>Your Office / Shop Video KYC</h3>

                  <div className='bg-black rounded-3xl w-full h-96 mb-12 flex items-center justify-center'>
                    <p className='text-gray-500 text-xl'>Camera Preview</p>
                  </div>

                  <div className='flex justify-center gap-6 mt-12'>
                    {/* Start Recording */}
                    <button
                      className='w-[150px] h-[48px] items- items-center justify-center
             text-white rounded-2xl font-semibold shadow-lg transition'
                      style={{
                        background: 'linear-gradient(160.41deg, #0B81CF -5.15%, #0069AF 87.35%)'
                      }}
                    >
                      Starting Recording
                    </button>

                    {/* FINAL SUBMIT (Redirect to Dashboard/Sales) */}
                    <button
                      onClick={() => router.push('/Dashboard/Sales')}
                      className='px-5 py-2 bg-green-600 text-white rounded-full text-xl font-bold hover:bg-green-700 transition '
                    >
                      Finish & Go to Dashboard
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        
        </div>
        hi
      </div>
    </div>
  )
}



'use client'

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full bg-black text-white font-poppins text-[12px] leading-[1.8]'>
      <div className='max-w-[1458px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-5 gap-8'>
       
     {/* Brand & Description */}
<div className='md:col-span-2'>
  <div className='flex items-center mb-4'> 
    <img src='/images/logos/logo.png' alt='Baofeng Logo' className='h-[24px] w-auto' />
  </div>
  <p className='mb-4'>
    We are a dedicated marketplace built to empower distributors and help them reach verified buyers across
    India. With seamless tools, transparent systems, and reliable support, we make selling simple, fast, and
    growth-focused.
  </p>
  <div className='flex gap-4 mt-2 text-white text-lg'>
    <Link href='#' aria-label='Twitter'>
      <FaTwitter />
    </Link>
    <Link href='#' aria-label='Facebook'>
      <FaFacebookF />
    </Link>
    <Link href='#' aria-label='LinkedIn'>
      <FaLinkedinIn />
    </Link>
    <Link href='#' aria-label='YouTube'>
      <FaYoutube />
    </Link>
  </div>
</div>


        {/* Navigate */}
        <div>
          <h2 className='font-semibold mb-4'>Navigate</h2>
          <ul className='space-y-2 list-none'>
            {['Home', 'About', 'Product', 'Feature', 'Pricing'].map(item => (
              <li key={item}>
                <Link href='#' className='hover:text-blue-600 transition'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className='font-semibold mb-4 '>Support</h2>
          <ul className='space-y-2 list-none'>
            {['FAQ’s', 'Contact Us', 'Support Center', 'Security'].map(item => (
              <li key={item}>
                <Link href='#' className='hover:text-blue-600 transition'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className='font-semibold mb-4'>Resources</h2>
          <ul className='space-y-2 list-none'>
            {['Community', 'Contact', 'Terms of Service'].map(item => (
              <li key={item}>
                <Link href='#' className='hover:text-blue-600 transition'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className='font-semibold mb-4'>Contact Us</h2>
          <p className='mb-2'>info@baofeng.com</p>
          <p className='mb-4 font-bold text-lg'>+91-80-65652545</p>
          <Link
            href='#'
            className='inline-block bg-[#F0F8A6] text-black font-semibold px-6 py-2 rounded-md hover:opacity-90 transition'
          >
            Help Center
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-500 mt-8 py-4 text-[10px] flex flex-col md:flex-row justify-between items-center px-8'>
        <p>© 2026 Baofeng. All rights reserved</p>
        <p className='mt-2 md:mt-0'>
          <Link href='#' className='hover:text-blue-600 transition'>
            Terms & Conditions
          </Link>{' '}
          ,
          <Link href='#' className='hover:text-blue-600 transition'>
            {' '}
            Privacy Policy
          </Link>{' '}
          ,
          <Link href='#' className='hover:text-blue-600 transition'>
            {' '}
            Cookies Policy
          </Link>{' '}
          ,
          <Link href='#' className='hover:text-blue-600 transition'>
            {' '}
            Sitemap
          </Link>
        </p>
      </div>
    </footer>
  )
}

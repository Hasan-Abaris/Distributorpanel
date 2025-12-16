import React from 'react'
import DistributorHero from './Banner'
import WhatWeCanDoSection from './Whatwedo'
import AllInOnePlatformSection from './Allinone'
import DigitalProductsSection from './Digitalsection'
import HowSellingWorksSection from './Sellingsection'
import App from './Appbanner'
import TestimonialSection from './Testimonial'

function Homemainpage() {
  return (
    <div>
            <DistributorHero />
            <WhatWeCanDoSection />
            <AllInOnePlatformSection/>
            <DigitalProductsSection/>
            <HowSellingWorksSection/>
            <App/>
            <TestimonialSection/>
    </div>
  )
}

export default Homemainpage

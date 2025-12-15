import React from 'react'
import DistributorHero from './Banner'
import WhatWeCanDoSection from './Whatwedo'
import AllInOnePlatformSection from './Allinone'
import DigitalProductsSection from './Digitalsection'
import HowSellingWorksSection from './Sellingsection'

function Homemainpage() {
  return (
    <div>
            <DistributorHero />
            <WhatWeCanDoSection />
            <AllInOnePlatformSection/>
            <DigitalProductsSection/>
            <HowSellingWorksSection/>
    </div>
  )
}

export default Homemainpage

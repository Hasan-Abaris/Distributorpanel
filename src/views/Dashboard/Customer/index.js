import React from 'react'
import CustomerOverviewPage from './customer'
import CustomerStats from '@/components/card-statistics/CustomerStats'
import VisitorStats from './Customerstats'

function Customerpage() {
  return (
    <div>
      <CustomerOverviewPage/>
      <VisitorStats/>
    </div>
  )
}

export default Customerpage

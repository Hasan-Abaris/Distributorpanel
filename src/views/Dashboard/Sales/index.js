import React from 'react'
import DashboardStats from './saledash'
import DashboardStatics from '../DashboardStats'
import RevenueReportCard from '../RevenueReportCard'

function Salemainpage() {
  return (
    <div>
      <DashboardStats/>
      <DashboardStatics/>
      <RevenueReportCard/>
    </div>
  )
}

export default Salemainpage

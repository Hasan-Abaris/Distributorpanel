// // Dashboard/layout.js
import DashboardLayout from "@/views/Dashboard/DashboardLayout";
import React from "react";

export default function DashboardAppLayout({ children }) {
  return <DashboardLayout>
    {children}
   </DashboardLayout>
}

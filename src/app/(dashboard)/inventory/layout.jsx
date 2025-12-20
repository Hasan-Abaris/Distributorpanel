import InventoryTabs from "@/views/inventory/InventoryTabs";

export default function InventoryLayout({ children }) {
  return (
    <>
      <InventoryTabs />
      {children}
    </>
  )
}

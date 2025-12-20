'use client'

// Next Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'
import Box from '@mui/material/Box'

const tabs = [
  { label: 'Item Master', value: 'item-master', href: '/inventory/item-master' },
  { label: 'Inventory Approvals', value: 'approvals', href: '/inventory/InventoryApproval' },
  { label: 'Stock Movement', value: 'stock-movement', href: '/inventory/Stock' },
  { label: 'Barcode', value: 'barcode', href: '/inventory/Barcode' }
]

const InventoryTabs = () => {
  const pathname = usePathname()

  // ✅ ALWAYS return a valid value
  const activeTab =
    tabs.find(tab => pathname.startsWith(tab.href))?.value || tabs[1].value

  return (
    <TabContext value={activeTab}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList aria-label="Inventory Tabs">
          {tabs.map(tab => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
              component={Link}
              href={tab.href}
            />
          ))}
        </TabList>
      </Box>
    </TabContext>
  )
}

export default InventoryTabs

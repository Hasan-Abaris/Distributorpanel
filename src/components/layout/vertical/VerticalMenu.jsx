// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className="tabler-chevron-right" />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }) => {
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()

  const { isBreakpointReached, transitionDuration } = verticalNavOptions
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => (
          <RenderExpandIcon open={open} transitionDuration={transitionDuration} />
        )}
        renderExpandedMenuItemIcon={{ icon: <i className="tabler-circle text-xs" /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        {/* Normal Menu Items */}
        <MenuItem href="/Dashboard" icon={<i className="tabler-dashboard" />}>
          Dashboard
        </MenuItem>

        <MenuItem href="/add-product" icon={<i className="tabler-square-plus" />}>
          Add a Product
        </MenuItem>

        {/* Inventory Dropdown */}
        <SubMenu label="Inventory" icon={<i className="tabler-box" />}>
          <MenuItem href="/inventory/item-master">
            Item Master
          </MenuItem>

          <MenuItem href="/inventory/InventoryApproval">
            Inventory Approval
          </MenuItem>

          <MenuItem href="/inventory/Stock">
            Stock
          </MenuItem>
          <MenuItem href="/inventory/Barcode">
            Barcode
          </MenuItem>
        </SubMenu>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu

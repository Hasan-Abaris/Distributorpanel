'use client'

import React from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Divider from '@mui/material/Divider'


const StatCard = ({ title, value, titleColor }) => (
  <Card
    className='white-bg card-border pointer icon-style'
    sx={{ flex: 1, p: 3, display: 'flex', justifyContent: 'space-between' }}
  >
    <Typography className='font-theme font-theme-semibold' sx={{ color: titleColor }}>
      {title}
    </Typography>

    <Box display='flex' alignItems='center'>
      <Typography className='font-theme pr-3'>{value}</Typography>
      <i className='tabler-filter text-gray-400' />
    </Box>
  </Card>
)

const ItemMasterHeaderWithStats = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [openAddModal, setOpenAddModal] = React.useState(false)

  return (
    <>
      <Box
        className='page-header-height'
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2, pl: 3, pr: 6 }}
      >
        <Box display='flex' alignItems='center' gap={1.5}>
          <Typography className='font-theme' fontSize={20} fontWeight={600} color='black'>
            Item Master
          </Typography>
          <IconButton size='small'>
            <i className='tabler-info-circle' />
          </IconButton>
        </Box>

        <Box display='flex' gap={2}>
          <Button
            variant='outlined'
            startIcon={<i className='tabler-settings' />}
            endIcon={<i className='tabler-chevron-down' />}
            onClick={e => setAnchorEl(e.currentTarget)}
          >
            Actions
          </Button>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            <MenuItem>Import Items</MenuItem>
            <MenuItem>Export Items</MenuItem>
          </Menu>

          {/* ADD BUTTON */}
          <Button variant='contained' startIcon={<i className='tabler-plus' />} onClick={() => setOpenAddModal(true)}>
            Add Single Item
          </Button>
        </Box>
      </Box>

      {/* STATS */}
      <Box className='gray-bg-50' sx={{ display: 'flex', gap: 2, p: 2 }}>
        <StatCard title='Negative Stock' value={0} titleColor='#ab2a2a' />
        <StatCard title='Low Stock' value={0} titleColor='#ac8b46' />
        <StatCard title='Excess Stock' value={0} titleColor='#074c5e' />

        <Card
          className='green-bg-10 card-border pointer hover-style'
          sx={{ flex: 1, p: 3, display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography className='font-theme font-theme-semibold'>View Inventory Dashboard</Typography>
          <i className='tabler-layout-grid text-emerald-700' />
        </Card>
      </Box>

    <Dialog
  open={openAddModal}
  onClose={() => setOpenAddModal(false)}
  maxWidth='sm'
  PaperProps={{
    sx: {
      width: 700,       
      borderRadius: 2
    }
  }}
>
        <DialogTitle>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            <Typography fontWeight={600}>Add Item</Typography>
            <IconButton onClick={() => setOpenAddModal(false)}>
              <i className='tabler-x' />
            </IconButton>
          </Box>
        </DialogTitle>

        <Divider />

        <DialogContent>
          <Box mt={2} display='grid' gridTemplateColumns='repeat(2, 1fr)' gap={3}>
            <TextField label='Item Id' size='small' InputLabelProps={{ shrink: true }} />
            <TextField label='Item Name' size='small' InputLabelProps={{ shrink: true }} />

            <Autocomplete
              options={['Product', 'Service']}
              size='small'
              renderInput={params => (
                <TextField {...params} label='Product / Service' InputLabelProps={{ shrink: true }} />
              )}
            />

            <Autocomplete
              options={['Buy', 'Sell', 'Both']}
              size='small'
              renderInput={params => (
                <TextField {...params} label='Buy / Sell / Both' InputLabelProps={{ shrink: true }} />
              )}
            />

            <TextField label='Unit of Measurement (UoM)' size='small' InputLabelProps={{ shrink: true }} />
            <TextField label='Item Category' size='small' InputLabelProps={{ shrink: true }} />

            <TextField label='Current Stock' type='number' size='small' InputLabelProps={{ shrink: true }} />
            <TextField label='Default Price' type='number' size='small' InputLabelProps={{ shrink: true }} />

            <TextField label='HSN Code' size='small' InputLabelProps={{ shrink: true }} />
            <TextField label='Tax' size='small' InputLabelProps={{ shrink: true }} />

            <TextField label='Minimum Stock Level' type='number' size='small' InputLabelProps={{ shrink: true }} />
            <TextField label='Maximum Stock Level' type='number' size='small' InputLabelProps={{ shrink: true }} />
          </Box>
        </DialogContent>
        <Divider />

        <DialogActions sx={{ p: 2 }}>
          <Button variant='outlined' onClick={() => setOpenAddModal(false)}>
            Cancel
          </Button>
          <Button variant='contained'>Save</Button>
          <Button variant='contained'>Save & Add New</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ItemMasterHeaderWithStats

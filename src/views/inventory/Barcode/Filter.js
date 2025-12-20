'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

const fixedColumns = [
  'Barcode Number',
  'Approval Document Number',
  'Quantity In',
  'Quantity Consumed'
]

// These columns are optional – user can show/hide them using checkbox
const optionalColumns = [
  'Item ID',
  'Item Name',
  'Quantity Out',
  'Balance Quantity',
  'Return Quantity',
  'Created By',
  'Creation Date',
  'Manufacturing Date',
  'Expiry Date',
  'Info 1',
  'Info 2',
  'From Store',
  'To Store',
  'Last Modified By',
  'Last Modified Date'
]

export default function BarcodePage() {
 
  const [selectedOptionalColumns, setSelectedOptionalColumns] = React.useState([])

  const handleColumnChange = (event) => {
    const value = event.target.value
    setSelectedOptionalColumns(
      typeof value === 'string' ? value.split(',') : value
    )
  }

  
  const renderValue = (selected) => {
    return selected.length === 0 
      ? 'No extra columns' 
      : `${selected.length} columns selected`
  }

  const visibleColumns = [...fixedColumns, ...selectedOptionalColumns]

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: 3,
          pl: 4,
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#fff'
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          Barcode
        </Typography>
        <IconButton size="small" sx={{ ml: 1 }}>
          <i className="tabler-info-circle" />
        </IconButton>
      </Box>

      <Box sx={{ p: 3, backgroundColor: '#fff', borderBottom: '1px solid #e0e0e0' }}>
        <Box display="flex" gap={4} alignItems="flex-end" flexWrap="wrap">
          {/* Status Filter */}
          <TextField
            select
            label="Status"
            defaultValue="All"
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </TextField>

          <TextField
            select
            label="Show/Hide Columns"
            value={selectedOptionalColumns}
            onChange={handleColumnChange}
            SelectProps={{
              multiple: true,
              renderValue: renderValue
            }}
            sx={{ minWidth: 280 }}
          >
            {optionalColumns.map((column) => (
              <MenuItem key={column} value={column}>
                <Checkbox checked={selectedOptionalColumns.includes(column)} />
                <ListItemText primary={column} />
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>

      <Box sx={{ bgcolor: '#e3f2fd', overflowX: 'auto' }}>
        <Box sx={{ minWidth: '1600px', display: 'flex', py: 2, px: 3 }}>
          <Box
            sx={{
              flex: '0 0 200px',
              mr: 2,
              position: 'sticky',
              left: 0,
              bgcolor: '#e3f2fd',
              zIndex: 10,
              borderRight: '1px solid #bbdefb'
            }}
          >
            <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
              Barcode Number ↑↓
            </Typography>
            <TextField
              placeholder="Search"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                )
              }}
              sx={{ bgcolor: 'white' }}
            />
          </Box>

          {visibleColumns.slice(1).map((column) => (
            <Box key={column} sx={{ flex: '0 0 px', mr: 2 }}>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                {column} ↑↓
              </Typography>
              <TextField
                placeholder="Search"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                  </InputAdornment>
                )
              }}
              sx={{ bgcolor: 'white' }}
            />
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#fafbfc'
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            bgcolor: '#e3f2fd',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.7,
            mb: 2
          }}
        >
          <Typography fontSize={50}>📄</Typography>
        </Box>
        <Typography variant="h6" color="text.secondary">
          No data found
        </Typography>
      </Box>

      <Box sx={{ position: 'fixed', bottom: 24, right: 24 }}>
        <IconButton
          sx={{
            bgcolor: '#00a86b',
            color: 'white',
            width: 56,
            height: 56,
            '&:hover': { bgcolor: '#008f5a' }
          }}
        >
          <Typography fontSize={24} fontWeight="bold">?</Typography>
        </IconButton>
      </Box>
    </Box>
  )
}
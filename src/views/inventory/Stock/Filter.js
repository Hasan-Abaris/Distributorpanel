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

// THESE 3 COLUMNS ARE ALWAYS VISIBLE (Fixed & Permanent)
const fixedColumns = [
  'Document Number',
  'From Store',
  'Date'
]

// THESE 5 COLUMNS ARE OPTIONAL (User can show/hide via checkbox)
const optionalColumns = [
  'To Store',
  'Number of Items',
  'User',
  'Movement Type',
  'Status'
]

export default function StockMovement() {
  // Remember which optional columns are selected
  // Start with 2 selected by default so it shows "5 columns selected" initially (3 fixed + 2 optional)
  const [selectedOptionalColumns, setSelectedOptionalColumns] = React.useState([
    'To Store',
    'Number of Items'
  ])

  // Movement Type filter – pre-selected as in your original screenshot
  const [movementType, setMovementType] = React.useState('Physical Stock Reconciliation')

  // Status filter
  const [statusFilter, setStatusFilter] = React.useState('All')

  // Handle checkbox changes in "Show/Hide Columns"
  const handleColumnChange = (event) => {
    const value = event.target.value
    setSelectedOptionalColumns(
      typeof value === 'string' ? value.split(',') : value
    )
  }

  // Show correct text like "5 columns selected"
  const renderColumnText = (selected) => {
    return `${selected.length} columns selected`
  }

  // Full visible columns: fixed first, then selected optional
  const visibleColumns = [...fixedColumns, ...selectedOptionalColumns]

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Page Header */}
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
          Stock Movement
        </Typography>
        <IconButton size="small" sx={{ ml: 1 }}>
          <i className="tabler-info-circle" />
        </IconButton>
      </Box>

      {/* Filters Row */}
      <Box sx={{ p: 3, backgroundColor: '#fff', borderBottom: '1px solid #e0e0e0' }}>
        <Box display="flex" gap={4} flexWrap="wrap" alignItems="flex-end">
          {/* Movement Type Dropdown */}
          <TextField
            select
            label="Movement Type"
            value={movementType}
            onChange={(e) => setMovementType(e.target.value)}
            sx={{ minWidth: 260 }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Physical Stock Reconciliation">
              Physical Stock Reconciliation
            </MenuItem>
            <MenuItem value="Stock Transfer">Stock Transfer</MenuItem>
            <MenuItem value="Manual Adjustment">Manual Adjustment</MenuItem>
          </TextField>

          {/* Status Dropdown */}
          <TextField
            select
            label="Status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            sx={{ minWidth: 180 }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </TextField>

          {/* Show/Hide Columns – Only shows the 5 optional columns */}
          <TextField
            select
            label="Show/Hide Columns"
            value={selectedOptionalColumns}
            onChange={handleColumnChange}
            SelectProps={{
              multiple: true,
              renderValue: renderColumnText
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

      {/* Table Header – Sky Blue + Horizontal Scroll */}
      <Box sx={{ bgcolor: '#e3f2fd', overflowX: 'auto' }}>
        <Box sx={{ minWidth: '1400px', display: 'flex', py: 2, px: 3 }}>
          {/* 1. Document Number – Always first and STICKY (fixed on left) */}
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
              Document Number ↑↓
            </Typography>
            <TextField
              placeholder="Search"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment>
              }}
              sx={{ bgcolor: 'white' }}
            />
          </Box>

          {/* 2. From Store & Date – Always visible (fixed) */}
          {fixedColumns.slice(1).map((column) => (
            <Box key={column} sx={{ flex: '0 0 180px', mr: 2 }}>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                {column} ↑↓
              </Typography>
              <TextField
                placeholder="Search"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment>
                }}
                sx={{ bgcolor: 'white' }}
              />
            </Box>
          ))}

          {/* 3. Optional columns selected by user */}
          {selectedOptionalColumns.map((column) => (
            <Box key={column} sx={{ flex: '0 0 180px', mr: 2 }}>
              <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                {column} {column !== 'Number of Items' && '↑↓'}
              </Typography>
              <TextField
                placeholder="Search"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment>
                }}
                sx={{ bgcolor: 'white' }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* No Data Found Area */}
      <Box
        sx={{
          minHeight: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#fafbfc',
          gap: 3
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
            opacity: 0.7
          }}
        >
          <Typography fontSize={50}>📄</Typography>
        </Box>
        <Typography variant="h6" color="text.secondary">
          No data found
        </Typography>
      </Box>

      {/* Floating Help Button */}
      <Box sx={{ position: 'fixed', bottom: 24, right: 24 }}>
        <IconButton
          sx={{
            bgcolor: '#00a86b',
            color: 'white',
            width: 56,
            height: 56,
            '&:hover': { bgcolor: '#008f5a' },
            boxShadow: 3
          }}
        >
          <Typography fontSize={24} fontWeight="bold">?</Typography>
        </IconButton>
      </Box>
    </Box>
  )
}
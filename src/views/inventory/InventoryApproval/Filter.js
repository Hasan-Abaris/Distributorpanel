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
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'

// THESE 3 COLUMNS ARE ALWAYS VISIBLE (Fixed forever)
const fixedColumns = [
  'Approval Id',
  'Document Type',
  'Date'
]

// THESE 7 COLUMNS ARE OPTIONAL (User can show/hide with checkbox)
const optionalColumns = [
  'Document Number',
  'Document Action',
  'Approval Status',
  'Created By',
  'Action By',
  'Action Date',
  'Barcode Added'
]

export default function InventoryApprovals() {
  // Remember which optional columns the user has selected
  // Start with all 7 selected so it shows "7 columns selected" by default
  const [selectedOptionalColumns, setSelectedOptionalColumns] = React.useState(optionalColumns)

  // Approval Status filter – starts as "Rejected" like in your screenshot
  const [approvalStatus, setApprovalStatus] = React.useState('Rejected')

  // When user checks or unchecks columns in the dropdown
  const handleColumnChange = (event) => {
    const value = event.target.value
    setSelectedOptionalColumns(
      typeof value === 'string' ? value.split(',') : value
    )
  }

  // Show text like "7 columns selected" or "3 columns selected"
  const renderColumnText = (selected) => {
    return `${selected.length} columns selected`
  }

  // Full list: always show fixed columns + selected optional ones
  const visibleColumns = [...fixedColumns, ...selectedOptionalColumns]

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Page Title */}
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
          Inventory Approvals
        </Typography>
        <IconButton size="small" sx={{ ml: 1 }}>
          <i className="tabler-info-circle" />
        </IconButton>
      </Box>

      {/* Filters Section */}
      <Box sx={{ p: 3, backgroundColor: '#fff', borderBottom: '1px solid #e0e0e0' }}>
        <Box display="flex" gap={4} alignItems="flex-end" flexWrap="wrap">
          {/* Approval Status Dropdown */}
          <TextField
            select
            label="Approval Status"
            value={approvalStatus}
            onChange={(e) => setApprovalStatus(e.target.value)}
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </TextField>

          {/* Show/Hide Columns – ONLY shows the 7 optional columns */}
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
        <Box sx={{ minWidth: '1600px', display: 'flex', py: 2, px: 3 }}>
          {/* 1. Approval Id – Always first and STICKY (fixed on left) */}
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
              Approval Id ↑↓
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

          {/* 2. Document Type & Date – Always visible (fixed) */}
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

          {/* 3. Optional columns – only if user checked them */}
          {selectedOptionalColumns.map((column) => (
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
        </Box>
      </Box>

      {/* No Data Found */}
      <Box
        sx={{
          minHeight: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafbfc',
          gap: 3
        }}
      >
        <InsertDriveFileOutlinedIcon sx={{ fontSize: 70, color: 'text.secondary', opacity: 0.6 }} />
        <Typography variant="h6" color="text.secondary">
          No data found
        </Typography>
      </Box>
    </Box>
  )
}
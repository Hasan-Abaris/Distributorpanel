'use client'

import React from 'react'

// MUI imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Autocomplete from '@mui/material/Autocomplete'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'

// Icons
import FilterListIcon from '@mui/icons-material/FilterList'
import ClearIcon from '@mui/icons-material/Clear'

const FilterWithTable = () => {
  return (
    <>
      {/* ================= FILTER TAB ================= */}
      <Box className="white-bg" sx={{ p: 2 }}>
        <Box display="flex" gap={4} flexWrap="wrap">

          <TextField
            select
            label="Products / Services"
            defaultValue="Products"
            sx={{ minWidth: 180 }}
          >
            <MenuItem value="Products">Products</MenuItem>
            <MenuItem value="Services">Services</MenuItem>
          </TextField>

          <Autocomplete
            multiple
            options={['Store A', 'Store B', 'Store C']}
            renderInput={params => (
              <TextField {...params} label="Stores" placeholder="Select" />
            )}
            sx={{ minWidth: 180 }}
          />

          <TextField
            select
            label="Status"
            defaultValue="Negative Stock"
            sx={{ minWidth: 180 }}
          >
            <MenuItem value="Negative Stock">Negative Stock</MenuItem>
            <MenuItem value="Low Stock">Low Stock</MenuItem>
            <MenuItem value="Excess Stock">Excess Stock</MenuItem>
          </TextField>

          <Autocomplete
            multiple
            options={['SKU', 'Price', 'Quantity', 'Category']}
            renderInput={params => (
              <TextField {...params} label="Show / Hide Columns" placeholder="Select" />
            )}
            sx={{ minWidth: 220 }}
          />

        </Box>
      </Box>

      {/* ================= TABLE ================= */}
      <Paper className="white-bg" sx={{ mt: 2 }}>
        <Table stickyHeader>

          {/* TABLE HEADER */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: 225 }}>
                <TableSortLabel>Item Id</TableSortLabel>
              </TableCell>
              <TableCell sx={{ minWidth: 320 }}>
                <TableSortLabel>Item Name</TableSortLabel>
              </TableCell>
              <TableCell sx={{ minWidth: 140 }}>
                <TableSortLabel>Unit</TableSortLabel>
              </TableCell>
            </TableRow>

            {/* FILTER ROW */}
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <TextField size="small" placeholder="Search" fullWidth />
                  <IconButton size="small">
                    <FilterListIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>

              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <TextField size="small" placeholder="Search" fullWidth />
                  <IconButton size="small">
                    <FilterListIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>

              <TableCell />
            </TableRow>
          </TableHead>

         

        </Table>
      </Paper>
    </>
  )
}

export default FilterWithTable

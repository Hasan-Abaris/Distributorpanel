'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

const columnsDef = [
  {
    field: 'approvalId',
    headerName: 'Approval Id',
    width: 216,
    sortable: true,
    pinnable: true
  },
  {
    field: 'documentType',
    headerName: 'Document Type',
    width: 189
  },
  {
    field: 'documentNumber',
    headerName: 'Document Number',
    width: 216
  },
  {
    field: 'documentAction',
    headerName: 'Document Action',
    width: 168
  },
  {
    field: 'approvalStatus',
    headerName: 'Approval Status',
    width: 178
  },
  {
    field: 'createdBy',
    headerName: 'Created By',
    width: 223
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 214
  },
  {
    field: 'actionDate',
    headerName: 'Action Date',
    width: 162
  },
  {
    field: 'barcodeAdded',
    headerName: 'Barcode Added',
    width: 162,
    sortable: false
  },
  {
    field: 'actionBy',
    headerName: 'Action By',
    width: 223
  }
]

const rows = [
  {
    id: 1,
    approvalId: 'APR-001',
    documentType: 'Invoice',
    documentNumber: 'INV-9001',
    documentAction: 'Create',
    approvalStatus: 'Approved',
    createdBy: 'Admin',
    date: '2024-01-10',
    actionDate: '2024-01-11',
    barcodeAdded: 'Yes',
    actionBy: 'Manager'
  }
]

export default function InventoryApproval() {
  return (
    <Box sx={{ p: 2 }}>
  
      <Box sx={{ height: 'calc(100vh - 132px)', backgroundColor: '' }}>
        <DataGrid
          rows={rows}
          columns={columnsDef}
          disableRowSelectionOnClick
          pageSizeOptions={[10, 25, 50]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 }
            },
            pinnedColumns: {
              left: ['approvalId']
            }
          }}
        />
      </Box>
    </Box>
  )
}

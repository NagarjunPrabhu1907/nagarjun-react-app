import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import './App.css';
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const details = [
    { id: 1, name: "Rajesh", age: 33, location: "Banglore" },
    { id: 2, name: "Nagarjun", age: 23, location: "Mysore" },
    { id: 3, name: "Girish", age: 25, location: "Mandya" },
    { id: 4, name: "Ramanath", age: 24, location: "Honnavara" },
    { id: 5, name: "Vinay", age: 23, location: "Udupi" }
  ];


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 120 },
    { field: 'location', headerName: 'Location', width: 180 },
    { 
      field: 'view', 
      headerName: 'View', 
      width: 150,
      renderCell: (i) => (
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => handleViewClick(i.row)}
        >
          View
        </Button>
      ),
    },
  ];

  const handleViewClick = (row) => {
        
  };
 

  return (
    <div style={{ height: 400, width: '100%' }}>
     
      <DataGrid rows={details} columns={columns} pageSize={5} />

    </div>
  );
}

export default App;

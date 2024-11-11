import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import data from './Data.json'; 

function App() {

  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

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

  const handleViewClick = (x) => {
    setSelectedRow(x);  
    setOpen(true);         
  };

  const handleClose = () => {
    setOpen(false);        
    setSelectedRow(null);  
  };
 

  return (
    <div style={{ height: 400, width: '100%' }}>
     
      <DataGrid rows={data} columns={columns} />
      <Dialog open={open} onClose={handleClose}>
  <DialogTitle>Details</DialogTitle>
  <DialogContent>
    {selectedRow && (
      <div>
        <p> <strong>Name:</strong> {selectedRow.name}</p>
        <p><strong>Age:</strong> {selectedRow.age}</p>
        <p><strong>Location:</strong> {selectedRow.location}</p>
      </div>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>

    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Button} from '@mui/material';
import './App.css';
import data from './Data.json';
import DatagridComponent from './DatagridComponent';
import PopupComponent from './PopupComponent'; 

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
     
      <DatagridComponent 
      rows={data} 
      columns={columns} 
      onViewClick={handleViewClick}
      />

  <PopupComponent 
        open={open} 
        onClose={handleClose} 
        selectedRow={selectedRow} 
      />
     
    </div>
  );
}

export default App;

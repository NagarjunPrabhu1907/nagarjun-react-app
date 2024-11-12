import React, { useState } from 'react';
import { Button} from '@mui/material';
import './App.css';
import data from './Data.json';
import NewComponent from './NewComponent';
import CustomTabPanel from './TabComponent'
function App() {

  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [textValue,setTextValue]=useState('');

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
  
  const handleTextValueChange=(e)=>{
    setTextValue(e.target.value)
  }

  console.log("textValue in AppComponent",textValue)
  
  return (
    <div style={{ height: 400, width: '100%' }}>
     <NewComponent
      rows={data} 
      columns={columns} 
      onViewClick={handleViewClick}
      open={open} 
      onClose={handleClose} 
      selectedRow={selectedRow} 
      textValue={textValue}
      onTextValueChange={handleTextValueChange}
      />
      <CustomTabPanel
      textValue={textValue}
      />
    </div>
  );
}

export default App;

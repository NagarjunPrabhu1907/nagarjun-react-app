
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DatagridComponent = ({ rows, columns, onViewClick }) => {
  return (
    <div style={{ height: 400, width: 650 }}>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        pageSize={5} 
        onRowClick={(params) => onViewClick(params.row)} 
      />
    </div>
  );
};

export default DatagridComponent;

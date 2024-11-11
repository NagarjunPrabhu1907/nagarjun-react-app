import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const PopupComponent = ({ open, onClose, selectedRow }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Details</DialogTitle>
      <DialogContent>
        {selectedRow && (
          <div>
            <p><strong>Name:</strong> {selectedRow.name}</p>
            <p><strong>Age:</strong> {selectedRow.age}</p>
            <p><strong>Location:</strong> {selectedRow.location}</p>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupComponent;

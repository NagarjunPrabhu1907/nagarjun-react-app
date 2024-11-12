import React from 'react'
import DatagridComponent from './DatagridComponent'
import PopupComponent from './PopupComponent'

function NewComponent({ rows, columns, onViewClick, open, onClose, selectedRow,textValue,onTextValueChange }){
    console.log("textValue in NewComponent",textValue)
    return (
      <div>
        <DatagridComponent 
          rows={rows} 
          columns={columns} 
          onViewClick={onViewClick}
        />
        <PopupComponent 
          open={open} 
          onClose={onClose} 
          selectedRow={selectedRow}
          textValue={textValue}
          onTextValueChange={onTextValueChange}
        />
        </div>
  )
}

export default NewComponent

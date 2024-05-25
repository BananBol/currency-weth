import React from 'react'
import { Button } from '@mui/material'

const MaterialButton = (props) => {

  const {
    value,
    onClick
  } = props

  return (
    <div>
      <Button 
       variant="contained"
       onClick={onClick}
       >
        {value}
      </Button>
      
    </div>
    
  )
}

export default MaterialButton
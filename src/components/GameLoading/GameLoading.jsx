import React from 'react'
import { CircularProgress } from '@mui/material'

const GameLoading = () => {

  
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100dvh'
  }

  return (
    <div styles={styles}>
        <CircularProgress color="success" />
    </div>
    
  )
}

export default GameLoading
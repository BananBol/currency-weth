import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const loading = () => {


  const styles = {
    
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100dvh',
    marginTop: '220px'
  }

  return (
    <div>
        <Box styles={styles}>
            <CircularProgress color="secondary" />
        </Box>
    </div>
  )
}

export default loading
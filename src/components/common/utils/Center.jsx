import Box from '@mui/material/Box'
import React from 'react'

const Center = ({children}) => {
  return (
    <Box sx={{
      height: "100%",
      width: "100%",
      //margin: "auto",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center"
    }}>{children}</Box>
  )
}

export default Center

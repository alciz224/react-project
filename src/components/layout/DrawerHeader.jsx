import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DrawerHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        MyApp
      </Typography>
    </Box>
  );
};

export default DrawerHeader;

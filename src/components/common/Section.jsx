import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const Section = ({ title, subtitle, children }) => {
  return (
    <Box
      component="section"
      sx={{
        py: 4,
        px: { xs: 2, sm: 4 },
        backgroundColor: 'background.default',
        borderRadius: 2,
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          color="text.primary"
          fontWeight="bold"
          gutterBottom
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography 
          textAlign="center"
          variant="subtitle1" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Box>

      {/* Content */}
      <Box color="green" sx={{ mt: 3 }}>{children}</Box>
    </Box>
  );
};

export default Section;

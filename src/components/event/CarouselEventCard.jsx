import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function EventCard({ evnt }) {
  const { name:title, photo:image, start_date:date, place:location } = evnt;

  return (
    <Card
      sx={{
        width: 300,
        margin: 1,
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Event Image */}
      <CardMedia
        component="img"
        height="150"
        image={image || 'https://via.placeholder.com/300x150?text=Event+Image'}
        alt={title}
      />

      {/* Event Content */}
      <CardContent sx={{ flex: 1, padding: 2 }}>
        {/* Title */}
        <Typography
          variant="h6"
          color="text.primary"
          sx={{ fontWeight: 'bold', marginBottom: 1 }}
        >
          {title || 'Event Title'}
        </Typography>

        {/* Date */}
        <Box display="flex" alignItems="center" mb={1}>
          <EventIcon fontSize="small" color="primary" sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {date || 'Date Not Available'}
          </Typography>
        </Box>

        {/* Location */}
        <Box display="flex" alignItems="center">
          <LocationOnIcon fontSize="small" color="error" sx={{ mr: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {location || 'Location Not Available'}
          </Typography>
        </Box>
      </CardContent>

      {/* Footer */}
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Button variant="contained" size="small" color="primary" fullWidth>
          Learn More
        </Button>
      </Box>
    </Card>
  );
}

import React from 'react';
import Slider from 'react-slick';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ title, subtitle, items, Component, slickParameters }) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 3000,
    ...slickParameters, // Override default settings with custom slick parameters
  };

  return (
    <Box sx={{ margin: 'auto', maxWidth: 1200, padding: 4 }}>
      {/* Carousel Header */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" color="text.primary" gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle1" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Box>

      {/* Carousel Slider */}
      <Slider {...defaultSettings} wi>
        {items.map((item, index) => (
          <div key={index}>
            <Component evnt= {item} />
          </div>
        ))}
      </Slider>
    </Box>
  );
}

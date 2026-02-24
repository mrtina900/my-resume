import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

// This component takes a list (array) of experience items
const ExperienceSection = ({ experiences }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ borderBottom: '2px solid #2c3e50', mb: 2 }}>
        EXPERIENCE / PROJECTS
      </Typography>
      
      {experiences.map((item, index) => (
        <Card key={index} variant="outlined" sx={{ mb: 1.5, border: 'none', bgcolor: '#f8f9fa' }}>
          <CardContent sx={{ p: '16px !important' }}>
            <Typography variant="subtitle2" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
              {item.year}
            </Typography>
            <Typography variant="body2">
              {item.desc}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ExperienceSection;
import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

function ExperienceSection({ experiences, color }) {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ 
        color: color, 
        fontWeight: 'bold', 
        mb: 2, 
        borderBottom: `2px solid ${color}`, 
        pb: 1 
      }}>
        WORK EXPERIENCE
      </Typography>
      
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {exp.company}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
            {exp.role}
          </Typography>
          <Typography variant="caption" display="block" sx={{ mb: 2, color: '#666' }}>
            {exp.period}
          </Typography>
          <List dense>
            {exp.responsibilities.map((resp, i) => (
              <ListItem key={i} sx={{ py: 0.5 }}>
                <ListItemText primary={`• ${resp}`} sx={{ fontSize: '0.9rem' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}

export default ExperienceSection;
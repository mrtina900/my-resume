import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

// This component takes a list of skills
const SkillSection = ({ skills }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ borderBottom: '2px solid #2c3e50', mb: 2 }}>
        TECHNICAL SKILLS
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map((skill, index) => (
          <Chip 
            key={index} 
            label={skill} 
            color="primary" 
            variant="outlined" 
            size="small" 
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillSection;
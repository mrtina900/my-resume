import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  Stack 
} from '@mui/material';

function AcademicProjectSection({ projects, color }) {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ 
        color: color, 
        fontWeight: 'bold', 
        mb: 2, 
        borderBottom: `2px solid ${color}`, 
        pb: 1 
      }}>
        ACADEMIC PROJECTS ({projects.length})
      </Typography>
      
      <Stack spacing={2}>
        {projects.map((project) => (
          <Card 
            key={project.id}
            elevation={2} 
            sx={{ 
              border: '1px solid #e0e0e0',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.02)', boxShadow: 3 },
              backgroundColor: 'white'
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Chip 
                  label={project.tech} 
                  size="small" 
                  sx={{ backgroundColor: color, color: 'white', fontSize: '0.7rem', fontWeight: 'bold' }} 
                />
                <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#666', backgroundColor: '#f0f0f0', px: 1, py: 0.5, borderRadius: 1 }}>
                  {project.year}
                </Typography>
              </Stack>

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: color }}>
                {project.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default AcademicProjectSection;
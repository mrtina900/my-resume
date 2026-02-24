import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';

function SkillSection({ skills, color }) {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ 
        color: color, 
        fontWeight: 'bold', 
        mb: 2, 
        borderBottom: `2px solid ${color}`, 
        pb: 1 
      }}>
        SKILLS & COMPETENCIES
      </Typography>
      
      {skills.programming && (
        <>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
            Technical Skills
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1, mb: 3 }}>
            {skills.programming.map((skill) => (
              <Chip key={skill.name} label={skill.name} size="small" sx={{ backgroundColor: `${color}18`, color: color }} />
            ))}
          </Stack>
        </>
      )}

      {skills.tools && (
        <>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
            Tools & Technologies
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1, mb: 3 }}>
            {skills.tools.map(s => (
              <Chip key={s} label={s} size="small" sx={{ backgroundColor: `${color}20`, color: color }} />
            ))}
          </Stack>
        </>
      )}

      {skills.soft && (
        <>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
            Soft Skills
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
            {skills.soft.map(s => (
              <Chip key={s} label={s} size="small" sx={{ backgroundColor: '#fff3e0' }} />
            ))}
          </Stack>
        </>
      )}

      {skills.ml && (
        <>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
            Machine Learning & Data
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1, mb: 3 }}>
            {skills.ml.map(s => (
              <Chip key={s} label={s} size="small" sx={{ backgroundColor: `${color}20`, color: color }} />
            ))}
          </Stack>
        </>
      )}

      {skills.web && (
        <>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mt: 2, mb: 1 }}>
            Web Development
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
            {skills.web.map(s => (
              <Chip key={s} label={s} size="small" sx={{ backgroundColor: `${color}20`, color: color }} />
            ))}
          </Stack>
        </>
      )}
    </Box>
  );
}

export default SkillSection;
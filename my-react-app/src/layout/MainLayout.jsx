import React from 'react';
import { Box } from '@mui/material';

function MainLayout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', py: 6 }}>
      <Box sx={{ maxWidth: '1400px', margin: '0 auto', backgroundColor: 'transparent', px: 3 }}>
        <Box sx={{ background: 'rgba(255,255,255,0.9)', borderRadius: 2, boxShadow: '0 8px 24px rgba(31,45,61,0.06)', p: 4 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;
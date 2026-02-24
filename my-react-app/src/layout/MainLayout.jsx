import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ bgcolor: '#f0f2f5', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Main Content Area */}
      {/* This is where your ResumePage content (the side-by-side grids) will appear */}
      <Box sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* 2. The Shared Footer */}
      <Box sx={{ p: 4, bgcolor: 'white', mt: 'auto', borderTop: '1px solid #ddd' }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            REFERENCE
          </Typography>
          <Divider sx={{ my: 1, width: '50px', mx: 'auto' }} />
          <Typography variant="body2" color="text.secondary">
            Dr. Liew Siaw Hong | Senior Lecturer, UNIMAS | siawhong.liew@gmail.com
          </Typography>
        </Container>
      </Box>
      
    </Box>
  );
};

export default MainLayout;
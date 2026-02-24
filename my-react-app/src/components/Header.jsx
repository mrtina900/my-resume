import React from 'react';
import { Avatar, Typography, Box, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// This component waits for you to tell it what 'name', 'role', etc. to display
const Header = ({ name, role, email, phone, profilePic }) => {
  return (
    <Box sx={{ textAlign: 'center', mb: 3, p: 2, borderBottom: '1px solid #eee' }}>
      <Avatar 
        src={profilePic} 
        sx={{ width: 120, height: 120, margin: '0 auto', mb: 2, border: '4px solid #2c3e50' }} 
      />
      <Typography variant="h5" fontWeight="bold" textTransform="uppercase">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="primary" gutterBottom>
        {role}
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mt: 1 }}>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <EmailIcon fontSize="small" /> {email}
        </Typography>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <PhoneIcon fontSize="small" /> {phone}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
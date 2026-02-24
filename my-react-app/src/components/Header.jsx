import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header({ name, title, email, phone, image, color, linkedin }) {
  // map known colors to soft backgrounds for a light theme
  const bgMap = {
    '#1976d2': { bg: '#eaf4ff', accent: '#1976d2' },
    '#2e7d32': { bg: '#eef9ee', accent: '#2e7d32' },
    '#7c4dff': { bg: '#f5f3ff', accent: '#7c4dff' },
    '#ff6fa3': { bg: '#fff3f8', accent: '#ff6fa3' }
  };
  const palette = bgMap[color] || { bg: '#f4f7fb', accent: color || '#1976d2' };

  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email || '')}`;
  const telHref = phone ? `tel:${(phone || '').replace(/[^+\d]/g, '')}` : '';

  return (
    <Box sx={{ 
      backgroundColor: palette.bg,
      color: '#102333',
      p: 3,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderLeft: `6px solid ${palette.accent}`
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src={image} sx={{ width: 80, height: 80, border: '2px solid rgba(16,35,51,0.06)' }} />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: '700' }}>{name}</Typography>
          <Typography variant="body1" sx={{ color: '#314452' }}>{title}</Typography>
          <Typography variant="body2" sx={{ color: palette.accent, mt: 1 }}>
            <a href={gmailHref} target="_blank" rel="noopener noreferrer" style={{ color: palette.accent, textDecoration: 'none' }}>{email}</a>
          </Typography>
          <Typography variant="body2" sx={{ color: palette.accent }}>
            <a href={telHref} style={{ color: palette.accent, textDecoration: 'none' }}>{phone}</a>
          </Typography>
          {linkedin && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', gap: 6, alignItems: 'center', color: palette.accent, textDecoration: 'none' }}>
                <LinkedInIcon fontSize="small" sx={{ color: palette.accent }} />
                <span style={{ color: palette.accent }}>LinkedIn</span>
              </a>
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
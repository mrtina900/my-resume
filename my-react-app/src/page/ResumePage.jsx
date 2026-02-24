import React from 'react';
import { Container, Grid, Paper, Box, Typography } from '@mui/material';
import Header from '../components/Header';
import ExperienceSection from '../components/ExperienceSection';
import SkillSection from '../components/SkillSection';
import MainLayout from '../Layout/MainLayout'; // Assuming you have this from previous steps

const ResumePage = () => {
  
  // --- DATA FOR MARTINA ---
  const martinaData = {
    name: "MARTINA ANAK STEPHEN TANANG",
    role: "Software Engineering Student",
    email: "martinastephen18@gmail.com",
    phone: "+6017230940",
    pic: "/assets/profile.jpg", // Make sure this image exists
    experiences: [
      { title: "Awareness App (Java Swing)", year: "2025", desc: "Developed an interactive learning quiz application." },
      { title: "Health App UI/UX", year: "2025", desc: "Designed high-fidelity mobile tracking prototypes in Figma." },
      { title: "SafeDrive Vehicle System", year: "2024", desc: "Architected database for customers and vehicles." }
    ],
    skills: ["Java", "Python", "C++", "Dart", "SQL", "React", "Flutter", "Figma"]
  };

  // --- DATA FOR GEORGIA ---
  const georgiaData = {
    name: "GEORGIA JULIAN",
    role: "Computational Science Student",
    email: "juliangeorgia@gmail.com",
    phone: "+60-102884981",
    pic: "/assets/mypic.jpg", // Make sure this image exists
    experiences: [
      { title: "UGlobal Solutions (Internship)", year: "Feb 2026 - Aug 2026", desc: "System development and database management." },
      { title: "Sarawak Energy (ICT Internship)", year: "Feb 2026", desc: "Hardware maintenance and laptop distribution." },
      { title: "Flood Prediction Model", year: "Academic", desc: "Machine Learning model using historical data." }
    ],
    skills: ["Python", "Java", "C++", "PHP", "JavaScript", "Data Modeling", "MySQL"]
  };

  return (
    <MainLayout>
      <Box sx={{ p: 4, bgcolor: '#f0f2f5', minHeight: '100vh' }}>
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ mb: 4, color: '#2c3e50' }}>
          Team Profile
        </Typography>

        {/* This Grid puts them Side-by-Side */}
        <Grid container spacing={4}>
          
          {/* LEFT SIDE: MARTINA */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Header 
                name={martinaData.name}
                role={martinaData.role}
                email={martinaData.email}
                phone={martinaData.phone}
                profilePic={martinaData.pic}
              />
              <ExperienceSection experiences={martinaData.experiences} />
              <SkillSection skills={martinaData.skills} />
            </Paper>
          </Grid>

          {/* RIGHT SIDE: GEORGIA */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Header 
                name={georgiaData.name}
                role={georgiaData.role}
                email={georgiaData.email}
                phone={georgiaData.phone}
                profilePic={georgiaData.pic}
              />
              <ExperienceSection experiences={georgiaData.experiences} />
              <SkillSection skills={georgiaData.skills} />
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </MainLayout>
  );
};

export default ResumePage;
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import MainLayout from '../layout/MainLayout.jsx';
import ResumeCard from '../components/ResumeCard.jsx';
import martinaPic from '../assets/profile.jpg.jpg'; 
import georgiaPic from '../assets/mypic.jpg';
import projectData from '../assets/AcademicProject.json';

function ResumePage() {
  // Martina's Data
  const martina = {
    name: "MARTINA STEPHEN",
    title: "Software Engineering Student",
    email: "martinastephen18@gmail.com",
    phone: "+60 17-2310 940",
    image: martinaPic,
    linkedin: 'https://www.linkedin.com/in/martina-stephen-6132242aa/',
    experiences: [
      {
        company: "UGlobal Solutions Sdn Bhd",
        role: "Internship",
        period: "Feb 2026 - Aug 2026",
        responsibilities: [
          "Hardware maintenance and troubleshooting for 50+ workstations",
          "Provided technical support to 100+ employees",
          "Monitored and maintained network infrastructure",
          "Assisted in system upgrades and software installations"
        ]
      }
    ],
    skills: {
      programming: [
        { name: "Java", level: 85 },
        { name: "React", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "C", level: 70 }
      ],
      tools: ["Figma", "Git", "VS Code", "Adobe XD"],
      soft: ["Agile", "Project Management", "Team Collaboration", "Problem Solving"]
    }
  };

  // Georgia's Data
  const georgia = {
    name: "GEORGIA JULIAN",
    title: "Computational Science Student",
    email: "juliangeorgia@gmail.com",
    phone: "+60 10-288 4981",
    image: georgiaPic,
    linkedin: 'https://www.linkedin.com/in/georgia-julian/',
    experiences: [
      {
        company: "UGlobal Solutions Sdn Bhd",
        role: "Internship",
        period: "Feb 2026 - Aug 2026",
        responsibilities: [
          "Developed and tested web applications using PHP and MySQL",
          "Designed and optimized database schemas",
          "Created technical documentation for system architecture"
        ]
      }
    ],
    skills: {
      programming: [
        { name: "Python", level: 90 },
        { name: "PHP", level: 85 },
        { name: "C++", level: 75 },
        { name: "JavaScript", level: 80 }
      ],
      ml: ["Machine Learning", "Data Analysis", "MLP", "Pandas", "NumPy"],
      web: ["HTML/CSS", "MySQL", "PHP", "REST APIs"]
    }
  };

  const martinaProjects = projectData.filter(project => project.owner === 'Martina');
  const georgiaProjects = projectData.filter(project => project.owner === 'Georgia');

  return (
    <MainLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, color: '#2d3e50', fontWeight: 'bold' }}>
          INTERNSHIP APPLICANT RESUMES
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center', color: '#666', mb: 4 }}>
          
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Button variant="contained" startIcon={<PrintIcon />} onClick={() => window.print()}>
            Print / Save as PDF
          </Button>
        </Box>

        <Box className="printable resume-wrapper" sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'stretch' }}>
          {/* Martina's Resume Card */}
          <Box className="resume-card" sx={{ flex: '1 1 48%', minWidth: 320 }}>
            <ResumeCard 
              person={martina}
              projects={martinaProjects}
              color="#7c4dff"
            />
          </Box>

          {/* Georgia's Resume Card */}
          <Box className="resume-card" sx={{ flex: '1 1 48%', minWidth: 320 }}>
            <ResumeCard 
              person={georgia}
              projects={georgiaProjects}
              color="#ff6fa3"
            />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default ResumePage;
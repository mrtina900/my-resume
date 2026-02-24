import React, { useRef } from 'react';
import { Paper, Divider } from '@mui/material';
import Header from './Header.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import SkillSection from './SkillSection.jsx';
import AcademicProjectSection from './AcademicProjectSection.jsx';

function ResumeCard({ person, projects, color }) {
  const audioCtxRef = useRef(null);
  const lastPlayRef = useRef(0);

  function playHoverSound() {
    // throttle to avoid rapid retriggers
    const now = Date.now();
    if (now - lastPlayRef.current < 150) return;
    lastPlayRef.current = now;

    try {
      if (!audioCtxRef.current) {
        // create AudioContext lazily
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      // resume context if suspended (required on some browsers)
      if (ctx.state === 'suspended') ctx.resume();

      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = 880; // A5 tone
      g.gain.value = 0.06;
      o.connect(g);
      g.connect(ctx.destination);
      const t = ctx.currentTime;
      o.start(t);
      g.gain.setValueAtTime(0.06, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      o.stop(t + 0.09);
    } catch (e) {
      // ignore audio errors silently
    }
  }

  return (
    <Paper 
      elevation={3} 
      onMouseEnter={playHoverSound}
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        border: '1px solid rgba(31,45,61,0.06)',
        background: 'linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)',
        '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(31,45,61,0.08)' }
      }}
    >
      <Header 
        name={person.name}
        title={person.title}
        email={person.email}
        phone={person.phone}
        linkedin={person.linkedin}
        image={person.image}
        color={color}
      />
      
      <ExperienceSection 
        experiences={person.experiences}
        color={color}
      />
      
      <Divider />
      
      <AcademicProjectSection 
        projects={projects}
        color={color}
      />
      
      <Divider />
      
      <SkillSection 
        skills={person.skills}
        color={color}
      />
    </Paper>
  );
}

export default ResumeCard;
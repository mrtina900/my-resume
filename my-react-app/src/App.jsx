import { useState } from 'react'
import './App.css'
import profileImg from './assets/profile.jpg.jpg' // Ensure this path is correct

// Simple SVG Icons component to avoid external dependencies
const Icon = ({ name }) => {
  const icons = {
    phone: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
    mail: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    map: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
    link: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>,
    print: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
  };
  return icons[name] || null;
};

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page-container">
      
      {/* Floating Action Button */}
      <button onClick={handlePrint} className="print-btn">
        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <Icon name="print" /> Save as PDF
        </div>
      </button>

      <div className="resume-paper">
        
        {/* Header Section */}
        <header className="header-section">
          <img 
            src={profileImg} 
            alt="Martina Anak Stephen Tanang" 
            className="profile-img"
          />
          <div className="header-content">
            <h1>MARTINA ANAK STEPHEN TANANG</h1>
            <p className="header-role">Software Engineering Student</p>
            
            <div className="contact-grid">
              <div className="contact-item">
                <Icon name="phone" /> +6017230940
              </div>
              <div className="contact-item">
                <Icon name="mail" /> 
                <a href="mailto:martinastephen18@gmail.com">martinastephen18@gmail.com</a>
              </div>
              <div className="contact-item">
                <Icon name="map" /> Kapit, Sarawak
              </div>
              <div className="contact-item">
                <Icon name="link" /> 
                <a href="https://linkedin.com/in/martina-stephen-6132242aa" target="_blank" rel="noreferrer">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </header>

        <div className="resume-body">
          
          {/* LEFT SIDEBAR */}
          <aside className="sidebar">
            <section style={{marginBottom: '30px'}}>
              <h2>Education</h2>
              
              <div className="edu-item">
                <span className="date-badge">Sep 2023 - Present</span>
                <h3>UNIMAS</h3>
                <div className="subtitle">Bachelor of Software Engineering</div>
                <div className="desc-text">Current CGPA: 3.02</div>
                <p className="desc-text" style={{fontStyle:'italic', marginTop:'10px'}}>
                  Coursework: System Analysis & Design, Data Structures, OOP, Project Management
                </p>
              </div>

              <div className="edu-item">
                <span className="date-badge">2022 - 2023</span>
                <h3>Kolej Matrikulasi Sarawak</h3>
                <div className="subtitle">Module 3 (Comp Sci)</div>
                <div className="desc-text">PNGK: 3.33 | MUET: Band 4</div>
              </div>

              <div className="edu-item">
                <span className="date-badge">2017 - 2022</span>
                <h3>SMK Song</h3>
                <div className="desc-text">SPM: 3A 1B 5C</div>
              </div>
            </section>

            <section style={{marginBottom: '30px'}}>
              <h2>Technical Skills</h2>
              <div className="subtitle">Languages</div>
              <div className="skills-container">
                {['Java', 'Python', 'C++', 'Dart', 'SQL', 'HTML/CSS', 'JavaScript'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
              
              <div className="subtitle">Tools & Frameworks</div>
              <div className="skills-container">
                {['React', 'Flutter', 'Java Swing', 'Figma', 'MySQL', 'Git/GitHub', 'Android Studio'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </section>

            <section>
              <h2>Languages</h2>
              <ul className="bullet-list">
                <li>English (Proficient)</li>
                <li>Malay (Native)</li>
                <li>Iban (Native)</li>
              </ul>
            </section>
          </aside>

          {/* RIGHT MAIN CONTENT */}
          <main className="main-content">
            
            <section style={{ marginBottom: '40px' }}>
              <h2>Professional Summary</h2>
              <p className="desc-text" style={{ fontSize: '1rem' }}>
                A motivated Bachelor of Software Engineering student seeking an internship placement for 
                <strong> 14 weeks (23rd Feb - 7th Aug 2026)</strong>. Eager to apply skills in full-stack development, 
                database management, and UI/UX design to contribute to real-world software solutions.
              </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
              <h2>Project Experience</h2>
              
              {[
                { 
                  title: "Awareness App", 
                  tech: "Java Swing", 
                  year: "2025", 
                  desc: ["Developed an interactive learning/quiz desktop application.", "Designed GUI using Java Swing assets.", "Collaborated in an Agile team using Git."] 
                },
                { 
                  title: "Health App UI/UX", 
                  tech: "Figma", 
                  year: "2025", 
                  desc: ["Designed high-fidelity mobile health tracking prototypes.", "Applied UI/UX principles for optimal user flow."] 
                },
                { 
                  title: "Software Estimation Project", 
                  tech: "Project Management", 
                  year: "2025", 
                  desc: ["Conducted cost/effort estimation using Agile Story Points, UCP, and COCOMO.", "Produced comprehensive budget and timeline reports."] 
                },
                { 
                  title: "SafeDrive Vehicle System", 
                  tech: "C & MySQL", 
                  year: "2024", 
                  desc: ["Architected database for customers, vehicles, and payments.", "Implemented rigorous data integrity checks."] 
                },
                { 
                  title: "Claim Adjuster System", 
                  tech: "Python", 
                  year: "2024", 
                  desc: ["Built claim submission system using OOP concepts.", "Implemented validation and exception handling."] 
                }
              ].map((project, index) => (
                <div key={index} className="exp-item">
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                    <h3>{project.title}</h3>
                    <span style={{fontSize:'0.85rem', color:'#888'}}>{project.year}</span>
                  </div>
                  <div className="subtitle" style={{fontSize:'0.85rem'}}>{project.tech}</div>
                  <ul className="bullet-list">
                    {project.desc.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <h2>Leadership & Extracurricular</h2>
              <ul className="bullet-list">
                <li><strong>President</strong>, Dahlia and Allamanda College (2024-2025)</li>
                <li><strong>Head of Media Unit</strong>, Student Council (2025)</li>
                <li><strong>Competition Unit Committee</strong>, Kesumas (2024 & 2025)</li>
              </ul>
            </section>

          </main>
        </div>

        {/* Footer */}
        <footer className="resume-footer">
          <strong>REFERENCE:</strong> Dr. Liew Siaw Hong | Senior Lecturer, UNIMAS | siawhong.liew@gmail.com
        </footer>

      </div>
    </div>
  );
}

export default App;
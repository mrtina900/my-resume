import GeorgiaHeader from './components/GHeader';
import './GApp.module.css'; 

function GApp() {
  return (
    <div className="georgia-wrapper"> {/* Unique wrapper */}
      <GeorgiaHeader />
      
      <div className="georgia-content"> {/* Renamed from 'container' */}
        
        {/* ABOUT ME SECTION */}
        <section className="georgia-section">
          <h2>ABOUT ME</h2>
          <p>As a computational science student, I specialize in data modeling, system and web development, database management. I am currently an intern at UGlobal Solutions Sdn Bhd.</p>
        </section>

        <hr className="georgia-divider" />

        {/* ACADEMIC SECTION */}
        <section className="georgia-section">
          <h2>EDUCATION</h2>
          <p><strong>University Malaysia Sarawak </strong> | 2023 - Present</p>
          <p>Bachelor's Degree of Computer Science (Computational Science)</p>
          <br />
          <p><strong>Universiti Teknologi Mara </strong> | 2020 - 2023</p>
          <p> Diploma in Computer Science</p>
        </section>

        <hr className="georgia-divider" />

        {/* ACADEMIC PROJECTS SECTION */}
        <section className="georgia-section">
          <h2>ACADEMIC PROJECTS</h2>
        <p><strong>Flood Prediction Model (Machine Learning)</strong></p>
        <p>- Explored the development of a flood prediction model using a Multilayer Perceptron(MLP) 
          trained on historical metereological and hydrological data.</p>
        <p>- Refined the code logic and retrained the model to improve prediction accuracy.</p>
        <br></br>
        <p><strong>Flood Management System (Python)</strong></p>
        <p>- Developed a Python program to automate the allocation of relief resources to flood-affected divisions.</p>
        <p>- Designed algorithms to prioritize aid distribution based on severity and available stock.</p>
        <br></br>
        <p><strong>Environment Awareness Game (JAVA Application)</strong></p>
        <p>- Developed an educational desktop application using Java Swing and Object-Oriented programmig (OOP) Principles.</p>
        <br></br>
        <p><strong>SafeDrive Insurance (Web Development)</strong></p>
        <p>- Designed and built a car insurance platform using JavaScript, CSS, MySQL, PHP, and HTML.</p>
        <p>- Structured relational databases to manage user ploicies and claim processing.</p>
        <br></br>
        <p><strong>CS PlayHub (Web Development)</strong></p>
        <p>- Built a website for game purchases using JavaScript, CSS, PHP, and HTML.</p>
        <p>- Designed a database to store games information.</p>
      </section>


        <hr className="georgia-divider" />

        {/* EXPERIENCE SECTION */}
        <section className="georgia-section">
          <h2>EXPERIENCE</h2>
      <p><strong>UGlobal Solutions Sdn Bhd - Internship</strong> (Februrary 2026 - August 2026)</p>
      <p>- Develop system...</p>
      <p>- Database ...</p>
      <br></br>
      <p><strong>Sarawak Energy Berhad - ICT Internship</strong> (Februrary 2026 - August 2026)</p>
      <p>- Replaced faulty components such as laptop batteries and keyboards.</p>
      <p>- Prepared and packed laptops for distribution to other districts, ensuring accurate labeling and tracking for delivery.</p>
      <p>- Helped set up new laptops for staff as part of a laptopp replacement project.</p>
      <p>- Checked and approved user requests for new laptops before issuing them.</p>
      </section>


        <hr className="georgia-divider" />

        {/* SKILLS SECTION */}
        <section className="georgia-section">
          <h2>SKILLS</h2>
          <p><strong>- Languages: </strong> Python, Java, C++, PHP, JavaScript</p>
          <p><strong>- Soft Skills: </strong> Technical Problem Solving, Team Collaboration.</p>
        </section>

        <hr className="georgia-divider" />

        {/* LANGUAGE SECTION */}
        <section className="georgia-section">
          <h2>LANGUAGE</h2>
          <p><strong>Malay</strong> - Native | <strong>English</strong> - Fluent</p>
        </section>   
        
      </div>
    </div>
  );
}

export default GApp;
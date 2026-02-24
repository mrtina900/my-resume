import styles from './styles/GHeader.module.css';
import profileImg from './assets/mypic.jpg';

function GeorgiaHeader() {
  const userInfo = {
    name: "GEORGIA JULIAN",
    email: "juliangeorgia@gmail.com",
    phone: "+60-102884981",
  };

  return (
    <header className={styles.headerContainer}>
      <img 
        src={profileImg}
        alt="Profile" 
        className={styles.profileImg} 
      />
      
      <h1 className={styles.title}>{userInfo.name}</h1>
      
      <div className={styles.contactInfo}>
        <span> {userInfo.email}</span> | <span> {userInfo.phone}</span> | <span> LinkedIn: <a href="https://www.linkedin.com/in/georgia-julian/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>Georgia Julian</a></span>
      </div>

      <p className={styles.about}>
        {userInfo.about}
      </p>
    </header>
  );
}

export default GeorgiaHeader;
import React from 'react';

//image
import myFoto from "../image/Jamal_Shamsi.jpg";
//CSS
import styles from "../components/AboutUs.module.css";
//Icons
import github from "../assets/Icons/github.svg";
import linkedin from "../assets/Icons/linkedin.svg";


const githubLink="https://github.com/jamalshamsi1988";
const linkedinLink="https://www.linkedin.com/in/jamal-shamsi-86553a225/";

const AboutUs = () => {
  return (
    <div className={styles.container}>
     <img  src={myFoto} alt="my foto"/>

     <div className={styles.information}>
      <h1>Jamal Shamsi</h1>
     
     <h3>Interested in Web development, especially enjoys working with teams.
        wants to learn new things about Web and it's around. Always have an energetic personality in work.
        </h3> 
</div>
        <div className={styles.icons} >
          <a href={githubLink}><img className={styles.icon} src={github} alt="github" /></a>
          <a href={linkedinLink}><img className={styles.icon}src={linkedin} alt="linkedin"/></a>
          </div> 
        
    </div>
  )
}

export default AboutUs;

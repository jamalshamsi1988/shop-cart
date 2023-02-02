import React from 'react';

//image
import myFoto from "../image/Jamal_Shamsi.jpg";
//CSS
import styles from "../components/AboutUs.module.css";


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
    </div>
  )
}

export default AboutUs;

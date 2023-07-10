import React from 'react';
import styles from '../styles/About.module.scss';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1>About Me</h1>
            <p>
                I am a Full-Stack Developer with proficiency in languages like JavaScript, Python, etc.
                I love building new, challenging projects and have a knack for problem-solving.
            </p>
            <div className={styles.skillsContainer}>
                <h2>Skills</h2>
                <div className={styles.skill}>
                    <p>JavaScript</p>
                    <div className={styles.skillLevel}>
                        <div className={styles.progress} style={{ width: "90%" }}></div>
                    </div>
                </div>
                <div className={styles.skill}>
                    <p>Python</p>
                    <div className={styles.skillLevel}>
                        <div className={styles.progress} style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className={styles.skill}>
                    <p>React</p>
                    <div className={styles.skillLevel}>
                        <div className={styles.progress} style={{ width: "75%" }}></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;

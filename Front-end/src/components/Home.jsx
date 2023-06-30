import React from 'react';
import styles from '../styles/Home.module.scss'

const Home = () => {
    return (
        <section className={styles.homeContainer}>
            <img src={'https://i1.sndcdn.com/avatars-Dk7shJfJ8AlBgbzm-sM1kTw-t500x500.jpg'} alt="Your Name" className={styles.profile_img} />
            <h1>Hello, I'm King Of Manele</h1>
            <p>I'm a full-Talent web Manelist</p>
            <a href="#contact" className={styles.cta_button}>Atinge Regele</a>
        </section>
    );
};

export default Home;

import React from 'react';
import styles from '../styles/Home.module.scss'
import Button from './Button';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import SignIn from './SignIn';
import LandingPage from './LandingPage';
import ProjectModal from './ProjectModal';

const Home = () => {
    const buttons = [
        { text: 'Call Regele!', link: '#contact' },
        { text: 'See The Kings!', link: '#projects' },
        { text: 'Break Matrix!', link: '#signIn' },
    ];

    return (
        <div className={styles.homeContainer}>
            <LandingPage />
            <About />
            {/* //<ProjectModal/> */}
            <Projects />
            <Contact />
            <SignIn />
            <div className={styles.buttonsWrapper}>
                {buttons.map((button, index) => (
                    <Button key={index} buttonText={button.text} href={button.link} customStyle={button.style} />
                ))}
            </div>
        </div>
    );
};

export default Home;

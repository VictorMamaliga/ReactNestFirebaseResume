import React from 'react';
import styles from '../styles/Home.module.scss'
import Button from './Button';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import SignIn from './SignIn';
import LandingPage from './LandingPage';

const Home = () => {
    const buttons = [
        { text: 'Call Regele!', link: '#contact', style: { position: 'absolute', top: '0%', left: '80%' } },
        { text: 'See The Kings!', link: '#projects', style: { position: 'absolute', top: '40%', left: '10%' } },
        { text: 'Break Matrix!', link: '#signIn', style: { position: 'absolute', top: '70%', left: '60%' } },
    ];

    return (
        <div className={styles.homeContainer}>
            <LandingPage />
            <About />
            <Projects />
            <Contact />
            <SignIn />
            {buttons.map((button, index) => (
                <Button key={index} buttonText={button.text} href={button.link} customStyle={button.style} />
            ))}
        </div>
    );
};

export default Home;

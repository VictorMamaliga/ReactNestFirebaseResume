import React from 'react';
import styles from '../styles/Home.module.scss'
import Button from './Button';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import SignIn from './SignIn';

const Home = () => {
    const buttons = [
        { text: 'Call Regele!', link: '#contact', style: { position: 'absolute', top: '80%', left: '10%' } },
        { text: 'See The Kings!', link: '#projects', style: { position: 'absolute', top: '40%', left: '10%' } },
        { text: 'Break Matrix!', link: '#signIn', style: { position: 'absolute', top: '70%', left: '60%' } },
        // Add more buttons here with random positions
    ];

    return (
       <>
       <div className={styles.homeContainer}>
            <div className={styles.leftSide}>
                <img src={'https://i1.sndcdn.com/avatars-Dk7shJfJ8AlBgbzm-sM1kTw-t500x500.jpg'} alt="Your Name" className={styles.profile_img} />
                <h1>Hello, I'm King Of Manele</h1>
            </div>
            <div className={styles.rightSide}>
                <p>I'm a full-Talent web Manelist</p>
                <div className={styles.buttonsContainer}>
                    {buttons.map((button, index) => (
                        <Button 
                            key={index} 
                            buttonText={button.text} 
                            href={button.link} 
                            style={button.style}
                        />
                    ))}
                </div>
            </div>
        </div>
        <About/>
        <Projects/>
        <Contact/>
        <SignIn/>
        </> 
    );
};


export default Home;

import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ onLinkClick }) => {
    const [scroll, setScroll] = useState(0);
    const [currentUnblurIndex, setCurrentUnblurIndex] = useState(-1);
    const [hasStartedScrolling, setHasStartedScrolling] = useState(false);
    const linkRefs = useRef([]);

    const links = [
        { to: '/Home', text: 'Victor Home' },
        { to: '/Home', text: 'About' },
        { to: '/Home', text: 'Projects' },
        { to: '/Home', text: 'Contact' },
        { to: '/Home', text: 'SignIn' },
    ];

    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = totalScroll / windowHeight;

        setScroll(scrollPercent);

        if (totalScroll > 0 && !hasStartedScrolling) {
            setHasStartedScrolling(true);
        }

        const unblurIndex = Math.floor(totalScroll / 800);

        if (unblurIndex >= 0 && unblurIndex < linkRefs.current.length) {
            setCurrentUnblurIndex(unblurIndex);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={styles.progressBar} style={{ width: `${scroll * 100}%` }}></div>
            <div className={styles.backgroundBlur} style={{ filter: `blur(${(1 + scroll) * -20}px)` }} />
            <div className={styles.backgroundUnblur} style={{ opacity: scroll }} />
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index} ref={el => linkRefs.current[index] = el}
                            className={hasStartedScrolling ? (index === currentUnblurIndex ? styles.unblur : styles.blur) : ''}>
                            <a href="#" onClick={() => onLinkClick(link.text.toLowerCase())}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;

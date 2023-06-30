import styles from '../styles/Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                {/* <li>
                    <Link to="/">Home</Link>
                </li> */}
                <li>
                    <Link to="/Home">Victor Home</Link>
                </li>

                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/SignIn">SignIn</Link>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;

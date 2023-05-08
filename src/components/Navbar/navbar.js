import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import { FaHome, FaEnvelope, FaUser, FaCog } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from "../../assets/searh.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={styles.navbarContainer}>
                {isMobile ? (
                    <>
                        <img src={logo} alt="logo-icon" className={styles.logoFirst}/>
                        <button className={styles.menuButton} onClick={handleMenuClick}>
                            <GiHamburgerMenu />
                        </button>
                        {menuOpen && (
                            <div className={styles.menuContainer}>
                                <ul className={styles.menuList}>
                                    <li className={styles.menuLink}>
                                        <a href="#"><FaHome className={styles.menuLinkIcon} /></a>
                                    </li>
                                    <li className={styles.menuLink}>
                                        <a href="#"><FaEnvelope className={styles.menuLinkIcon} /></a>
                                    </li>
                                    <li className={styles.menuLink}>
                                        <a href="#"><FaUser className={styles.menuLinkIcon} /></a>
                                    </li>
                                    <li className={styles.menuLink}>
                                        <a href="#"><FaCog className={styles.menuLinkIcon} /></a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </>
                ) : (
                    <div className={styles.menuContainer}>
                        <img src={logo} alt="logo-icon" className={styles.logoFirst}/>
                        <ul className={styles.menuList}>
                            <li className={styles.menuLink}>
                                <FaHome className={styles.menuLinkIcon} />
                                <span>Home</span>
                            </li>
                            <li className={styles.menuLink}>
                                <FaEnvelope className={styles.menuLinkIcon} />
                                <span>Messages</span>
                            </li>
                            <li className={styles.menuLink}>
                                <FaUser className={styles.menuLinkIcon} />
                                <span>Profile</span>
                            </li>
                            <li className={styles.menuLink}>
                                <FaCog className={styles.menuLinkIcon} />
                                <span>Settings</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;

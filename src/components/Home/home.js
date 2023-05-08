import React from 'react';
import styles from './home.module.css';
import {BsSearch} from "react-icons/bs";
import {MdOutlineNotificationsActive} from "react-icons/md";
import photo from "../../assets/photo.jpeg"
const Home = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.description}>
                    <div className={styles.name}>
                        <h2>Welcome: <span>Armando</span>  </h2>
                    </div>
                    <div className={styles.date}>
                        <span>Tue,09 July 2023</span>
                    </div>
                </div>
                <div className={styles.right}>
                    <BsSearch className={styles.iconStyle} />
                    <input type="search" placeholder="Search" className={styles.search}/>
                    <MdOutlineNotificationsActive className={styles.iconStyle}/>
                    <img src={photo} alt="photo" className={styles.photo}/>
                </div>
            </div>
        </>
    );
};

export default Home;

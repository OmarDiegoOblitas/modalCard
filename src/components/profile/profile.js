import React from 'react';
import styles from './profile.module.css';
import chip from"../../assets/chip.png"
import logo from "../../assets/mnp.png"
import logo2 from "../../assets/dinner.png"
import Modal from "../Modal/modal";

const Profile = () => {
    return (
        <>
            <div className={styles.content}>
                <article>
                    <h3>Your card</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus </span>
                    <div className={styles.artFirst}>
                        <div className={styles.cardContainer}>
                            <div className={styles.card_init}>
                                <div className={styles.card}>
                                    <div className={styles.description}>
                                        <p>Debito</p>
                                        <div className={styles.sizeImg}>
                                            <img src={logo} alt="icon" className={styles.img} />
                                        </div>
                                    </div>
                                    <img src={chip} alt="chipIcon" className={styles.chip} />
                                    <div className={styles.reference}>
                                        <h3>Elias</h3>
                                        <span>2423 - 2423 - 5234 - 2312</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className={styles.btnCardBtn}>
                                + Add New Card
                            </button>
                        </div>
                    </div>
                </article>
                <article>
                    <h3>Card for team members</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus </span>
                    <div className={styles.cardMore}>
                        <div className={styles.card_init}>
                            <div className={styles.card}>
                                <div className={styles.description}>
                                    <p>Debito</p>
                                    <div className={styles.sizeImg}>
                                        <img src={logo2} alt="icon" className={styles.img} />
                                    </div>
                                </div>
                                <img src={chip} alt="chipIcon" className={styles.chip} />
                                <div className={styles.reference}>
                                    <h3>Elias</h3>
                                    <span>2423 - 2423 - 5234 - 2312</span>
                                </div>
                            </div>
                        </div>
                        <Modal/>
                    </div>
                </article>
            </div>
        </>
    );
};

export default Profile;

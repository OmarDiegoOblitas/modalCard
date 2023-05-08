import styles from "./modal.module.css";
import {data} from "../data";
import {useState} from "react";
export default function Modal() {
    const [showProfile,setShowProfile] = useState(false)
  function  handleButtonClick() {
    setShowProfile(!showProfile)
  }
  return (
      <>
          <div className={styles.cards}>
              <button onClick={handleButtonClick} className={styles.btnCardSec}>+ View Cards</button>
              {showProfile && (
                  <div className={`${styles.info} ${showProfile ? styles.visible : ""}`}>
                      <div className={styles.cardContainer}>
                          {data.map(({ id, name, position, insights, icon, chip }) => (
                              <div key={id} className={styles.card_init}>
                                  <div className={styles.card}>
                                      <div className={styles.description}>
                                          <p>{position}</p>
                                          <div className={styles.sizeImg}>
                                              <img src={icon} alt="icon" className={styles.img} />
                                          </div>
                                      </div>
                                      <img src={chip} alt="" className={styles.chip} />
                                      <div className={styles.reference}>
                                          <h3>{name}</h3>
                                          <span>{insights}</span>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              )}
          </div>
      </>
  );
}

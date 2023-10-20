import React from "react";
import resumesvg from '../../assets/resume.svg';
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <p className={styles.heading}>
        A <span>Resume</span> that makes an Impact!
      </p>
      <p className={styles.heading}>
      Design Your Winning Resume! <span>It's Free</span>
      </p>
      </div>
      <div className={styles.right}>
        <img src={resumesvg} alt='Resume' />
      </div>
    </div>
  );
}

export default Header;

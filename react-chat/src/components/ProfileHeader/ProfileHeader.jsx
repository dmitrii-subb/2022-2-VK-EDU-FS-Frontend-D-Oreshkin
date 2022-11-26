import React from "react";
import styles from "./ProfileHeader.module.scss";

function ProfileHeader() {
  return (
    <header className={styles.header}>
      <span className={styles.userName}>Edit Profile</span>
      <button className={styles.doneButton} type="">
        <span className="material-icons">done</span>
      </button>
    </header>
  );
}

export { ProfileHeader };

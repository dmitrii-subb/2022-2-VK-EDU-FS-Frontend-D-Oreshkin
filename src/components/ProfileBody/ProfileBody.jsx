import React from "react";
import styles from "./ProfileBody.module.scss";

function ProfileBody() {
  return (
    <section className={styles.profileBody}>
      <img
        className={styles.userPicture}
        src="https://via.placeholder.com/100"
        alt="profile_pic"
      />
      <div className={`${styles.fullName} ${styles.graybackground}`}>
        <span>Full name</span>
        <input className={styles.graybackground} type="text" />
      </div>
      <div className={`${styles.username} ${styles.graybackground}`}>
        <span>Username</span>
        <input className={styles.graybackground} type="text" />
      </div>
      <div className={`${styles.bio} ${styles.graybackground}`}>
        <span>Bio</span>
        <textarea
          className={styles.graybackground}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </section>
  );
}

export { ProfileBody };

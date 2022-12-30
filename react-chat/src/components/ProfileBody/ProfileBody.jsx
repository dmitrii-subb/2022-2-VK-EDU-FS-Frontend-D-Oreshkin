import React from "react";
import styles from "./ProfileBody.module.scss";
import { useState, useEffect } from "react";

function ProfileBody() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/api/v1/users/user/2/get_user_info/`)
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

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
        <input
          className={styles.graybackground}
          type="text"
          value={user.username}
        />
      </div>
      <div className={`${styles.bio} ${styles.graybackground}`}>
        <span>Bio</span>
        <textarea
          className={styles.graybackground}
          name=""
          id=""
          cols="30"
          rows="10"
          value={user.description}
        ></textarea>
      </div>
    </section>
  );
}

export { ProfileBody };

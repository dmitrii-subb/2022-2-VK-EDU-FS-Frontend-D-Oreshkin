import React from "react";
import styles from "./ChatHeader.module.scss";

const showNotification = () => {
  if (window.Notification && Notification.permission !== "denied") {
    Notification.requestPermission(function (status) {
      new Notification("Уведомление", {
        body: "Текст уведомления",
        // icon: "/path/to/icon.png",
      });
    });
  }
};

function ChatHeader({ name }) {
  return (
    <header className={styles.header}>
      <section className={styles.companion}>
        <img
          className={styles.companionPicture}
          src="https://via.placeholder.com/50"
          alt="profile_pic"
        />
        <div className={styles.companionMeta}>
          <span className={styles.companionName}>{name}</span>
          <span className={styles.companionLastOnline}>was 1 hour ago</span>
        </div>
      </section>
      <button className={styles.button} type="">
        <span className="material-icons">search</span>
      </button>
      <button className={styles.button} type="" onClick={showNotification}>
        <span className="material-icons">more_vert</span>
      </button>
    </header>
  );
}

export { ChatHeader };

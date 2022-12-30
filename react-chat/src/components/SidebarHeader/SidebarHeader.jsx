import React from "react";
import styles from "./SidebarHeader.module.scss";

function SidebarHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.applicationName}>Messenger</div>
    </header>
  );
}

export { SidebarHeader };

import React from "react";
import styles from "./SidebarSearchField.module.scss";

function SidebarSearchField() {
  return (
    <div className={styles.container}>
      <input className={styles.searchField} placeholder="Поиск" type="text" />
    </div>
  );
}

export { SidebarSearchField };

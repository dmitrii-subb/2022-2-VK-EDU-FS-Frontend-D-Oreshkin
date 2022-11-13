import React from "react";
import styles from "./SidebarHeader.module.scss";
import { Link } from "react-router-dom";

const linkStyle = {
  alignSelf: "center",
};

function SidebarHeader() {
  return (
    <header>
      <Link style={linkStyle} to="/profile">
        <button className={styles.burgerButton} type="">
          <span className="material-icons">menu</span>
        </button>
      </Link>
      <div className={styles.applicationName}>
        <span>Messenger</span>
      </div>
      <button className={styles.searchButton} type="">
        <span className="material-icons">search</span>
      </button>
    </header>
  );
}

export { SidebarHeader };

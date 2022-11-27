import React from "react";
import styles from "./NavButtons.module.scss";
import { Link } from "react-router-dom";

function NavButtons() {
  return (
    <div className={styles.ButtonsContainer}>
      <div className={styles.button}>
        <Link to="/profile">
          <button className={styles.button}>
            <span className="material-icons">account_circle</span>
          </button>
        </Link>
      </div>

      <div className={styles.button}>
        <Link to="/">
          <button className={styles.button}>
            <span className="material-icons">chat_bubble_outline</span>
          </button>
        </Link>
      </div>

      <button className={styles.button}>
        <span className="material-icons">create</span>
      </button>
    </div>
  );
}

export { NavButtons };

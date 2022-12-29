import React from "react";
import styles from "./Input.module.css";

class Input extends React.Component {
  render() {
    return (
      <section className={styles.container}>
        <input type="textfield" />
      </section>
    );
  }
}

export default Input;

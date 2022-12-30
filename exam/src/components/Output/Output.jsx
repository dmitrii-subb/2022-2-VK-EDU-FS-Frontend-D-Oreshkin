import React from "react";
import styles from "./Output.module.css";
import { connect } from "react-redux";
import { mapDispatch, mapState } from "./utils";

class Output extends React.Component {
  render() {
    return (
      <section className={styles.container}>
        {this.props.translated_text}
      </section>
    );
  }
}

export default connect(mapState, mapDispatch)(Output);

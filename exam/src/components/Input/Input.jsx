import React from "react";
import styles from "./Input.module.css";
import { connect } from "react-redux";
import { translate } from "./utils";
import { mapDispatch, mapState } from "./utils";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <section className={styles.container}>
        <textarea
          onChange={(e) => this.setState({ text: e.target.value })}
          placeholder={this.props.from_lang}
          style={{ width: "100%" }}
        ></textarea>
        <button onClick={() => translate(this)}>{"translate -> "}</button>
      </section>
    );
  }
}

export default connect(mapState, mapDispatch)(Input);

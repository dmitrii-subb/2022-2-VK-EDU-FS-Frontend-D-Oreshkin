import React from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDicionary } from "./utils";
import { mapState, mapDispatch } from "./utils";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dictionary: [] };
  }

  setFromlanguage = (e) => {
    this.props.setFromlanguage(e.target.value);
  };

  setTolanguage = (e) => {
    this.props.setTolanguage(e.target.value);
  };

  componentDidMount() {
    getDicionary(this);
  }

  render() {
    return (
      <>
        <section className={styles.container}>
          <div className={styles.dropdown}>
            <Link to="/history">History</Link>
          </div>
          <div className={styles.dropdown}>
            <select onChange={(e) => this.setTolanguage(e)} name="to" id="to">
              {this.state.dictionary}
            </select>
          </div>
        </section>
      </>
    );
  }
}

export default connect(mapState, mapDispatch)(Header);

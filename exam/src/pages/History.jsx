import React from "react";
import { Link } from "react-router-dom";
import { getHistory } from "./utils";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }

  componentDidMount() {
    let history = getHistory();
    this.setState({ history: history });
  }

  render() {
    return (
      <>
        <Link to="/">Back</Link>
        {this.state.history}
      </>
    );
  }
}

export default History;

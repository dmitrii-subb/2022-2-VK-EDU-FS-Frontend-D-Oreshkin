import React from "react";
import Input from "../components/Input/Input";
import Output from "../components/Output/Output";
import Header from "../components/Header/Header";

const styles = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "aqua",
  height: "350px",
};

class Translate extends React.Component {
  render() {
    return (
      <>
        <main>
          <Header />
          <div style={styles}>
            <Input />
            <Output />
          </div>
        </main>
      </>
    );
  }
}

export default Translate;

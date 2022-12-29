import styles from "./App.module.css";
import React from "react";
import Input from "./components/Input/Input";
import Output from "./components/Output/Output";
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <main className={styles.container2}>
          <Header />
          <div className={styles.container}>
            <Input />
            <Output />
          </div>
        </main>
      </>
    );
  }
}

export default App;

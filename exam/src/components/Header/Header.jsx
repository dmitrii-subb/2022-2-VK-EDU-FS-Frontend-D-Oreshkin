import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dictionary: [], from_lang: "ru", to_lang: "en" };
  }

  setFromlanguage = (e) => {
    this.setState({ from_lang: e.target.value });
  };

  setTolanguage = (e) => {
    this.setState({ from_lang: e.target.value });
  };

  makeDictionary(responce) {
    const languages = [];
    for (let language in responce.dictionary) {
      languages.push(
        <option value={language}>{responce.dictionary[language].name}</option>
      );
    }
    this.setState({ dictionary: languages });
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        "x-rapidapi-ua": "RapidAPI-Playground",
      },
    };

    fetch(
      "https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        this.makeDictionary(response);
        console.log(this.state.dictionary);
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <section className={styles.container}>
        <div className={styles.dropdown}>
          <select
            onChange={(e) => this.setFromlanguage(e)}
            name="from"
            id="from"
          >
            {this.state.dictionary}
          </select>
        </div>

        <div className={styles.dropdown}>
          <select onChange={(e) => this.setTolanguage(e)} name="to" id="to">
            {this.state.dictionary}
          </select>
        </div>
      </section>
    );
  }
}

export default Header;

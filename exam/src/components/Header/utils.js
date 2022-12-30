export function makeDictionary(response) {
  const languages = [];
  let key = 0;
  for (let language in response.dictionary) {
    key++;
    if (language === "ru") {
      languages.push(
        <option selected key={key} value={language}>
          {response.dictionary[language].name}
        </option>
      );
      continue;
    }

    languages.push(
      <option key={key} value={language}>
        {response.dictionary[language].name}
      </option>
    );
  }
  return languages;
}

export function getDicionary(external_this) {
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
      let dict = makeDictionary(response);
      external_this.setState({ dictionary: dict });
    })
    .catch((err) => console.error(err));
}

export function mapState(state) {
  return { from_lang: state.from_lang, to_lang: state.to_lang };
}

export function mapDispatch(dispatch) {
  return {
    setTolanguage(lang) {
      dispatch({ type: "SET_TO_LANG", payload: lang });
    },
    setFromlanguage(lang) {
      dispatch({ type: "SET_FROM_LANG", payload: lang });
    },
  };
}

export function save_translate(response, external_this) {
  let translated_text = response[0].translations[0].text;
  const from = external_this.props.from_lang;
  const to = external_this.props.to_lang;

  external_this.props.setTraslatedText(translated_text);
  localStorage.setItem(
    `${localStorage.length + 1}: ${from} | ${external_this.state.text}`,
    `${to} | ${translated_text}`
  );
}

export function translate(external_this) {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a",
      "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
    },
    body: JSON.stringify([{ Text: external_this.state.text }]),
  };

  fetch(
    `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${external_this.props.to_lang}&api-version=3.0&profanityAction=NoAction&textType=plain`,
    options
  )
    .then((response) => response.json())
    .then((response) => save_translate(response, external_this))
    .catch((err) => console.error(err));
}

export function mapState(state) {
  return {
    from_lang: state.from_lang,
    to_lang: state.to_lang,
    translated_text: state.translated_text,
  };
}

export function mapDispatch(dispatch) {
  return {
    setTraslatedText(text) {
      dispatch({ type: "SET_TRANSLATED_TEXT", payload: text });
    },
  };
}

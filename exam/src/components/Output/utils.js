export function mapState(state) {
  return {
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

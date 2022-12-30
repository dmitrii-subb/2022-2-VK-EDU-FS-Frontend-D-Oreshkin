export function getHistory() {
  let translates = Object.keys(localStorage);
  let key = 0;

  let history = [];

  for (let translate of translates) {
    key++;
    history.push(
      <div key={key}>
        <span>{translate}</span>
        <span>{" -> "}</span>
        <span>{localStorage.getItem(translate)}</span>
      </div>
    );
  }
  return history;
}

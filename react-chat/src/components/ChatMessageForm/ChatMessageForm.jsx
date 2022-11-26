import React from "react";
import { useState } from "react";
import styles from "./ChatMessageForm.module.scss";

function ChatMessageForm({ sendMessage, chat }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (value === "") {
      return;
    }

    let message = {
      text: value,
      chat_id: chat.id,
      // date: `${time.getHours()}:${time.getMinutes()}`, // время отправки будет назначатся на сервере
      author_id: 2, // когда сделаю авторизацию, это поле можно будет убрать
      author: "Dmitrii Oreshkin",
    };

    sendMessage(message);
    setValue("");
  }

  return (
    <form className={styles.form} action="/" onSubmit={handleSubmit}>
      <input
        className={styles.formInput}
        name="message-text"
        placeholder="Cообщение"
        type="textarea"
        value={value}
        onChange={handleChange}
      />
      <button className={styles.addDocumentBtn}>
        <span className="material-icons">attachment</span>
      </button>
    </form>
  );
}

export { ChatMessageForm };

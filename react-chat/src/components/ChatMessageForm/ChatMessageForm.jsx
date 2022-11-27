import React from "react";
import { useState } from "react";
import styles from "./ChatMessageForm.module.scss";

function ChatMessageForm({ sendMessage, chat }) {
  const [value, setValue] = useState("");
  const [file, setFile] = useState([]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function onFile(event) {
    const f = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFile([reader.result, URL.createObjectURL(event.target.files[0])]);
    };

    if (f) {
      reader.readAsDataURL(f);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (value === "") {
      return;
    }

    let message = {
      text: value,
      chat_id: chat.id,
      author_id: 2, // когда сделаю авторизацию, это поле можно будет убрать
      author: "Dmitrii Oreshkin",
      file: file[0],
    };

    sendMessage(message);
    setValue("");
    setFile([]);
  }

  return (
    <div className={styles.container}>
      {file.length !== 0 && (
        <>
          <img
            className={styles.imagePreview}
            // src={`data:image/png;base64,${file[0]}`}
            src={file[1]}
            alt="image_preview"
            onClick={() => setFile([])}
          />
        </>
      )}
      <form className={styles.form} action="/" onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          name="message-text"
          placeholder="Cообщение"
          type="textarea"
          value={value}
          onChange={handleChange}
        />

        <input type="file" id="file" onChange={onFile} accept="image/*" />
        <div className={styles.addDocumentBtn}>
          <label className={styles.button} htmlFor="file">
            <span className="material-icons">attachment</span>
          </label>
        </div>
      </form>
    </div>
  );
}

export { ChatMessageForm };

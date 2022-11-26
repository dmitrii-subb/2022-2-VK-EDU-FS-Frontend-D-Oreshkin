import React from "react";
import styles from "./ChatBody.module.scss";

function ChatBody({ messages, chat }) {
  console.log("chat", chat);

  const messageBlocks = messages.map((message, index) => {
    console.log("message ", message);
    return (
      <div
        key={index}
        className={`${styles.message} ${
          // chat.id === message.author ? styles.right : styles.left
          message.author === "Dmitrii Oreshkin" ? styles.right : styles.left
        }`}
      >
        <div className={styles.messageMeta}>
          {message.author === "Dmitrii Oreshkin" ? (
            <>
              <span className={styles.messageDate}>{message.date}</span>
              <span className={styles.messageAuthor}>{message.author}</span>
            </>
          ) : (
            <>
              <span className={styles.messageAuthor}>{message.author}</span>
              <span className={styles.messageDate}>{message.date}</span>
            </>
          )}
        </div>
        <div className={styles.messageText}>{message.text}</div>
      </div>
    );
  });

  return <section className={styles.chat}>{messageBlocks}</section>;
}

export { ChatBody };

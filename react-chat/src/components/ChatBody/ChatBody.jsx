import React from "react";
import styles from "./ChatBody.module.scss";

function ChatBody({ messages, chat }) {
  console.log(
    " обратить внимаение! вызывается несколько раз. запрашиваем чаты пользователя: (chatBody)",
    chat
  );
  // функция вызывается два раза, кажется из-за того что messages не успевает обновится

  const messageBlocks = messages.map((message, index) => {
    console.log("message: (chatBody)", message);
    return (
      <div
        key={index}
        className={`${styles.message} ${
          chat.id !== message.author_id ? styles.right : styles.left
          // message.author === "Dmitrii Oreshkin" ? styles.right : styles.left
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
        <div className={styles.messageText}>
          {message.image && (
            <img className={styles.image} src={message.image} alt="" />
          )}
          <span>{message.text}</span>
        </div>
      </div>
    );
  });

  return <section className={styles.chat}>{messageBlocks}</section>;
}

export { ChatBody };

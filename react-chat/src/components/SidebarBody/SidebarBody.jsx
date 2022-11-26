import React from "react";
import { useState, useEffect } from "react";
import styles from "./SidebarBody.module.scss";

function SidebarBody({ openChat }) {
  //     планируется делать запрос на бэк, ответ от которого - это массив со всеми чатами пользователя.
  //     у чата есть свой id и другая информация, эта информация передается в функцию openChat(), которая открывает этот чат

  const [chats, setChats] = useState([]);

  function getChats(id) {
    fetch("http://localhost:9000/api/v1/users/user/2/get_all_chats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setChats(data));
  }

  useEffect(() => {
    getChats(2);
  }, []);

  useEffect(() => {
    console.log("chats", chats);
  }, [chats]);

  const chatBlocks = chats.map((chat, index) => {
    return (
      <section
        key={index}
        className={styles.chatPreview}
        onClick={() => openChat(chat)}
      >
        <div className={styles.chatPicture}>
          <img
            className={styles.picture}
            src="https://via.placeholder.com/60"
            alt="profile_pic"
          />
        </div>

        <div className={styles.chatDetails}>
          <span className={styles.chatName}>{chat.title}</span>
          <span className={styles.chatLastMessage}>hello, world</span>
        </div>
        <div className={styles.chatMeta}>
          <span className={styles.LastMessageTime}>13:39</span>
          <span className={styles.messageState}>99</span>
        </div>
      </section>
    );
  });

  return (
    <article className={styles.chatsContainer}>
      {chatBlocks}

      <section
        className={styles.chatPreview}
        onClick={() => openChat({ id: -1, title: "Frontend chat" })}
      >
        <div className={styles.chatPicture}>
          <img
            className={styles.picture}
            src="https://via.placeholder.com/60"
            alt="profile_pic"
          />
        </div>
        <div className={styles.chatDetails}>
          <span className={styles.chatName}>Frontend chat</span>
          {/* <span className={styles.chatLastMessage}>hello, world</span> */}
        </div>
        <div className={styles.chatMeta}>
          {/* <span className={styles.LastMessageTime}>13:39</span> */}
          {/* <span className={styles.messageState}>99</span> */}
        </div>
      </section>
    </article>
  );
}

export { SidebarBody };

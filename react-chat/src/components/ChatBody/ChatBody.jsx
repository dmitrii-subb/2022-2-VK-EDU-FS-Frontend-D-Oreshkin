import React from "react";
import styles from "./ChatBody.module.scss";
import { useEffect } from "react";

import { connect, useSelector } from "react-redux";

import { getMessages } from "../../actions/messageReduser";
import { renderNewMessage } from "../../actions/messageReduser";

import { Centrifuge } from "centrifuge";
const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket");
const sub = centrifuge.newSubscription("chat");

function ChatBody(props) {
  const chat = useSelector((state) => state.activeChatReduser);

  function addMessagesToChat(ctx) {
    props.renderNewMessage(ctx.data.message);
  }

  useEffect(() => {
    props.getMessages(chat.id);
  }, [chat]);

  useEffect(() => {
    sub.on("publication", addMessagesToChat);
    sub.subscribe();
    centrifuge.connect();
  }, []);

  let messageBlocks;
  if (props.messages) {
    messageBlocks = props.messages.map((message, index) => {
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
            {message.audio && (
              <audio controls="controls" src={message.audio}></audio>
            )}
            {message.location && <a href={message.location}>My location</a>}
            <span>{message.text}</span>
          </div>
        </div>
      );
    });
  } else {
    messageBlocks = <>Nothing</>;
  }
  return <section className={styles.chat}>{messageBlocks}</section>;
}

const mapStateToProps = (state) => ({
  messages: state.messageReduser.messages,
});

export default connect(mapStateToProps, { getMessages, renderNewMessage })(
  ChatBody
);

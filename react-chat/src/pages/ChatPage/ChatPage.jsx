import React from "react";
import { useEffect, useState } from "react";

import { ChatHeader } from "../../components/ChatHeader";
import { ChatBody } from "../../components/ChatBody";
import { ChatMessageForm } from "../../components/ChatMessageForm";

import styles from "../pages.module.scss";
// const API_URL = "https://tt-front.vercel.app";

import { Centrifuge } from "centrifuge";
const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket");
const sub = centrifuge.newSubscription("chat");

function ChatPage({ chat }) {
  const [messages, setMessages] = useState([]);

  function addMessagesToChat(ctx) {
    setMessages((prev) => {
      const newMessages = Object.assign([], prev);
      newMessages.unshift(ctx.data.message);
      return newMessages;
    });
  }

  useEffect(() => {
    // console.log("messages", messages);
  }, [messages]);

  useEffect(() => {
    if (chat.id === -1) {
      const pollItems = () => {
        fetch(`https://tt-front.vercel.app/messages`)
          .then((resp) => resp.json())
          .then((data) => setMessages(data.reverse()));
      };
      const t = setInterval(() => pollItems(), 3000);

      return;
    }
    fetch(`http://localhost:9000/api/v1/chats/messages_in_chat/${chat.id}/`)
      .then((resp) => resp.json())
      .then((data) => setMessages(data.reverse()));
  }, [chat]);

  useEffect(() => {
    // чтобы соединение не пыталось установиться на GP
    // sub.on("publication", addMessagesToChat);
    // sub.subscribe();
    // centrifuge.connect();
  }, []);

  function sendMessage(message) {
    if (chat.id === -1) {
      fetch(`https://tt-front.vercel.app/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      return;
    }
    fetch("http://localhost:9000/api/v1/chats/messages_in_chat/3/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  return (
    <section className={styles.chatPage}>
      <ChatHeader name={chat.title} />
      <ChatBody messages={messages} chat={chat} />
      <ChatMessageForm sendMessage={sendMessage} chat={chat} />
    </section>
  );
}

export { ChatPage };

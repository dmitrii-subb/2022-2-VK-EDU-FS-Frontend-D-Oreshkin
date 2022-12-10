import React from "react";

import { ChatHeader } from "../../components/ChatHeader";
import ChatBody from "../../components/ChatBody/ChatBody.jsx";
import ChatMessageForm from "../../components/ChatMessageForm/ChatMessageForm.jsx";

import styles from "../pages.module.scss";

function ChatPage() {
  return (
    <section className={styles.chatPage}>
      <ChatHeader />
      <ChatBody />
      <ChatMessageForm />
    </section>
  );
}

export default ChatPage;

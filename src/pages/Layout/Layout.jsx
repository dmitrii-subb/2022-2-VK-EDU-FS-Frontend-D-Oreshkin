import { Outlet } from "react-router-dom";
import { ChatPage } from "../ChatPage";
import styles from "../ChatPage/ChatPage.module.scss";

function Layout({ chatId }) {
  return (
    <>
      <Outlet />
      <section className={styles.chatPage}>
        {chatId !== 0 && <ChatPage chatId={chatId} />}
      </section>
    </>
  );
}

export { Layout };

import logo from './logo.svg';
import styles from './App.module.css';
import { useState } from 'react'

import { ChatPage } from './pages/ChatPage'
import { SidebarPage } from './pages/SidebarPage'

function App() {

  let [chatId, setChatId] = useState(0)

  function openChat(id){
    setChatId(id);
  }


  return (
    <>
      <aside className={styles.allChats}>
        <SidebarPage openChat={openChat}/>
      </aside>
      <section className={styles.chatPage}>
        {chatId != 0 &&
          <ChatPage chatId={chatId}/>
        }
      </section>
    </>
  )
}


export default App;

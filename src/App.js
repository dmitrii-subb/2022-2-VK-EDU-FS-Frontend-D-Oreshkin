import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

import PageChat from './pages/PageChat/PageChat'
import ChatsSidebar from './pages/ChatsSidebar/ChatsSidebar'


function App() {

  let [chatId, setChatId] = useState(0)

  function openChat(id){
    setChatId(id);
  }


  return (
    <>
      <aside className='all-chats'>
        <ChatsSidebar openChat={openChat}/>
      </aside>
      <section className='chat-page'>
        {chatId != 0 &&
          <PageChat chatId={chatId}/>
        }
      </section>
    </>
  )
}

export default App;

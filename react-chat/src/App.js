import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SidebarPage } from './pages/SidebarPage'
import { ProfilePage } from './pages/ProfilePage'

import { Layout } from './pages/Layout'


function App() {

  let [chatId, setChatId] = useState(0);

  function openChat(id){
    setChatId(id);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout chatId={chatId}/>}>
          <Route index element={<SidebarPage openChat={openChat}/>} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}


export default App;

import { useEffect, useState } from 'react';
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { SidebarPage } from './pages/SidebarPage'
import { ProfilePage } from './pages/ProfilePage'
import { NavButtons } from "./pages/NavButtons";

import { ChatPage } from "./pages/ChatPage";

import {useDispatch, useSelector} from 'react-redux'

function App() {

  const [chat, setChat] = useState({});

  const dispatch = useDispatch()
  const platform = useSelector(state => state)
  

  function openChat(chat){
    console.log('открыт чат: (app.js)', chat);
    setChat(chat);
  }

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    console.log(screenSize)
    
    if (screenSize.dynamicWidth <= 1100) {
      dispatch({type: 'isMobile', payload: 0});
    }
    else {
      dispatch({type: 'isDesktop', payload: 0});
    }
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  return (
    <>
      <NavButtons />

      {platform.isDesktop ? 
        <Routes>
          <Route exact path="/" element={<SidebarPage openChat={openChat}/>}>
            <Route path={`/chat/${chat.id}`} element={<ChatPage chat={chat} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Route>
        </Routes>
      :
        <Routes>
          <Route exact path="/" element={<SidebarPage openChat={openChat}/>} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path={`/chat/${chat.id}`} element={<ChatPage chat={chat}/>} />
          <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
        </Routes>
      }
    </>
  );
}


export default App;

import { useState } from 'react';
import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { SidebarPage } from './pages/SidebarPage'
import { ProfilePage } from './pages/ProfilePage'
import { ExtraButtons } from "./pages/ExtraButtons";


import { Layout } from './pages/Layout'

function App() {

  const [chat, setChat] = useState({});

  function openChat(chat){
    console.log(chat);
    setChat(chat);
  }

  // const [screenSize, getDimension] = useState({
  //   dynamicWidth: window.innerWidth,
  //   dynamicHeight: window.innerHeight
  // });
  // const [isMobile, setMobile] = useState(false);

  // const setDimension = () => {
  //   getDimension({
  //     dynamicWidth: window.innerWidth,
  //     dynamicHeight: window.innerHeight
  //   })
  // }
  
  // useEffect(() => {
  //   window.addEventListener('resize', setDimension);
  //   console.log(screenSize)
    
  //   if (screenSize.dynamicWidth <= 1100) {
  //     setMobile(true);
  //   }
  //   else {
  //     setMobile(false);
  //   }
    
  //   return(() => {
  //       window.removeEventListener('resize', setDimension);
  //   })
  // }, [screenSize])

  return (
    <>
      <ExtraButtons />
      <Routes>
        <Route path="*" element={<Layout chat={chat}/>}>
          <Route index element={<SidebarPage openChat={openChat}/>} />
          <Route path="profile" element={<ProfilePage />} />
        </Route> 
      </Routes> 
    </>
  );
}


export default App;

import { useEffect, useState } from "react";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { SidebarPage } from "./pages/SidebarPage";
import { ProfilePage } from "./pages/ProfilePage";
import { NavButtons } from "./pages/NavButtons";

import ChatPage from "./pages/ChatPage/ChatPage.jsx";

import { useSelector, connect } from "react-redux";
import { setView } from "./actions/viewReduser";

function App(props) {
  const chat = useSelector((state) => state.activeChatReduser);

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    props.setView(screenSize);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <>
      <NavButtons />

      {props.view.isDesktop ? (
        <Routes>
          <Route exact path="/" element={<SidebarPage />}>
            <Route path={`/chat/${chat.id}`} element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<SidebarPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path={`/chat/${chat.id}`} element={<ChatPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  view: state.viewReduser,
});

export default connect(mapStateToProps, { setView })(App);

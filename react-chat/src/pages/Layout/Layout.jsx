import React from "react";
import { Outlet } from "react-router-dom";
import { ChatPage } from "../ChatPage";

function Layout({ chat }) {
  return (
    <>
      <Outlet />
      {chat.id && <ChatPage chat={chat} />}
    </>
  );
}

export { Layout };

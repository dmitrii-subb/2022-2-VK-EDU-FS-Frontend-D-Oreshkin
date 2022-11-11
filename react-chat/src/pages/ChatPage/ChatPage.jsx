import React from 'react'
import { useState, useEffect } from 'react'

import { ChatHeader } from '../../components/ChatHeader'
import { ChatBody } from '../../components/ChatBody'
import { ChatMessageForm } from '../../components/ChatMessageForm'


function checkLocalStorageAvailable() {
  try {
    localStorage.setItem('test', 'text');
    localStorage.getItem('test');
  } catch (err) {
    return false;
  }
  return true;
}

function getMesagesFromLocalStorage () {
  if (!checkLocalStorageAvailable) {
    return false
  }
  let messages = localStorage.getItem('messages');
  if (!messages) {
    return false
  }
  messages = JSON.parse(messages);
  return messages.all;
}

function saveMessageToLocalStorage (message) {
  if (!checkLocalStorageAvailable) {
    return
  }
  let messages = localStorage.getItem('messages');
  if (messages === '' || messages == null) {
    localStorage.setItem('messages', JSON.stringify({'all':[]}));
  }
  messages = localStorage.getItem('messages');
  messages = JSON.parse(messages);
  if (messages === undefined) {
    return
  }
  messages.all.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
}

function ChatPage({chatId}) {

    //! при первом клике рендерится 4 раза, затем по два - почему?
    console.log(chatId)

    let [messages, setMessages] = useState([])

    function sendMessage (message) {
        // сохраняем в массив, localStorage и взаимодействуем с бэком
        const newMessages = Object.assign([], messages);
        newMessages.unshift(message);
        setMessages(newMessages);
        saveMessageToLocalStorage(message)
    }

    function loadMessages() {
        //! срабатывает два раза
        let savedMessages = getMesagesFromLocalStorage()
        if (savedMessages) {
            setMessages(savedMessages.reverse());
        }
    }

    useEffect(loadMessages, [])

    return (
        <>
            <ChatHeader />
            <ChatBody messages={messages} />
            <ChatMessageForm sendMessage={sendMessage} />
        </>
    )
}

export { ChatPage };

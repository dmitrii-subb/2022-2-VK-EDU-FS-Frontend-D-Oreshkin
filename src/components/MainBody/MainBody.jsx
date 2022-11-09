import React from 'react'
import { useState } from 'react'

function MainBody({openChat}) {
    //     планируется делать запрос на бэк, ответ от которого - это массив со всеми чатами пользователя.
    //     у чата есть свой id и другая информация, эта информация передается в функцию openChat(), которая открывает этот чат

    let id1 = 1;
    let id2 = 2;
    return (
        <article className="chats-container">

            <section className="chat-preview" onClick={() => openChat(id1)}>
                <div className="chat-picture">
                    <img className="picture" src="https://via.placeholder.com/60" alt="profile_pic" />
                </div>
                <div className="chat-details">
                    <span className="chat-name">Dmitrii Oreshkin</span>
                    <span className="chat-last-message">hello, world</span>
                </div>
                <div className="chat-meta">
                    <span className="last-message-time">13:39</span>
                    <span className="message-state">99</span>
                </div>
            </section>

            <section className="chat-preview" onClick={() => openChat(id2)}>
                <div className="chat-picture">
                    <img className="picture" src="https://via.placeholder.com/60" alt="profile_pic" />
                </div>
                <div className="chat-details">
                    <span className="chat-name">Dmitrii Oreshkin 2</span>
                    <span className="chat-last-message">hello, world 2</span>
                </div>
                <div className="chat-meta">
                    <span className="last-message-time">20:05</span>
                    <span className="message-state">99</span>
                </div>
            </section>

        </article>
    );
}

export default MainBody;

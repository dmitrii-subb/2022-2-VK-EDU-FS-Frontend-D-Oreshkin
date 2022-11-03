import React from 'react'
import { useState, useEffect } from 'react'

function MainBody() {
    return (
        <article className="chats-container">

            <section className="chat" onclick="goToChat();">
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

            <section className="chat" onclick="goToChat();">
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

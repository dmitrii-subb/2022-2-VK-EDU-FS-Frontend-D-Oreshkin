import React from 'react'
import useState from 'react'


function ChatBody({messages}) {

    const messageBlocks = messages.map((message, index) => {
		return (
            <div key={index} className="message left">
                <span className="message-text">{message.text}</span>
                <div className="message-meta">
                    <span className="message-date">{message.date}</span>
                </div>
            </div>
        )
	});

    return (
        <section className="chat">
            {messageBlocks}
        </section>
    )
}

export default ChatBody

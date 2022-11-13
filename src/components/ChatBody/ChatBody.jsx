import React from 'react'
import styles from './ChatBody.module.scss'

function ChatBody({messages}) {

    const messageBlocks = messages.map((message, index) => {
		return (
            <div key={index} className={`${styles.message} ${styles.left}`}>
                <span className={styles.messageText}>{message.text}</span>
                <div className={styles.messageMeta}>
                    <span className={styles.messageDate}>{message.date}</span>
                </div>
            </div>
        )
	});

    return (
        <section className={styles.chat}>
            {messageBlocks}
        </section>
    )
}

export { ChatBody };
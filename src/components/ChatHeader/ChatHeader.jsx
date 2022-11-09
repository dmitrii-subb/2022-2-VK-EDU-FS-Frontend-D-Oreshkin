import React from 'react'
import useState from 'react'

function ChatHeader() {
    return (
        <header>
            <section className="companion">
                <img className="companion-picture" src="https://via.placeholder.com/50" alt="profile_pic" />
                <div className="companion-meta">
                    <span className="companion-name">Dmitrii Oreshkin</span>
                    <span className="companion-last-online">was 1 hour ago</span>
                </div>
            </section>
            <button className="search-button" type="">
                <span className="material-icons">search</span>
            </button>
            <button className="more-button" type="">
                <span className="material-icons">more_vert</span>
            </button>
        </header>
    )
}

export default ChatHeader

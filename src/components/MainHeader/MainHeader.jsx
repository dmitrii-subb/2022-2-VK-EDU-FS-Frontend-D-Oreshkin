import React from 'react'
import { useState, useEffect } from 'react'

function MainHeader() {
    return (
        <header>
            <button className="burger-button" type="">
                <span className="material-icons">menu</span>
            </button>
            <div className="application-name">
                <span>Messenger</span>
            </div>
            <button className="search-button" type="">
                <span className="material-icons">search</span>
            </button>
        </header>
    );
}
 export default MainHeader;

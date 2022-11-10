import React from 'react'
import styles from './SidebarHeader.module.scss'

function SidebarHeader() {
    return (
        <header>
            <button className={styles.burgerButton} type="">
                <span className="material-icons">menu</span>
            </button>
            <div className={styles.applicationName}>
                <span>Messenger</span>
            </div>
            <button className={styles.searchButton} type="">
                <span className="material-icons">search</span>
            </button>
        </header>
    );
}

export { SidebarHeader };

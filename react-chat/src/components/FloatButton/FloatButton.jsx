import React from 'react'
import styles from './FloatButton.module.scss'


function FloatButton() {
    return (
        <button className={styles.floatButton}>
            <span className="material-icons">create</span>
        </button>
    );
}

export { FloatButton };

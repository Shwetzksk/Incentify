import React from 'react'
import styles from './_button.module.scss'


export default function Button(props) {
    return (
        <div className={styles.container}>
            <div className={styles.subcont}>
                {props.content}
            </div>
        </div>
    )
}

import React from 'react'
import styles from './_button.module.scss'


export default function Button(props) {
    return (
        <div {...props} className={`${styles.container} ${props.className}`}>
            {props.content}
        </div>
    )
}

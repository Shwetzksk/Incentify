import React from 'react'
import styles from './_landing.module.scss'
import Button from '../../components/button/Button'
import PhoneTilted from '../../assets/icons/phone-tilted.png'

export default function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.phone}>
                <img src={PhoneTilted} alt="" />
            </div>
            <div className={styles.content}>
                <h1>The Social Network for Music</h1>
                <Button content="Get Started" />
            </div>
        </div>
    )
}

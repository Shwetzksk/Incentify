import React from 'react'
import styles from './_landing.module.scss'
import Button from '../../components/button/Button'
import PhoneTilted from '../../assets/icons/phone-tilted.png'
import PhoneGif from '../../assets/gif/Landing.gif'

export default function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.phone}>
                <img src={PhoneGif} alt="" />
            </div>
            <div className={styles.content}>
                <h1>The Social Network for Music</h1>
                <Button content="Get Started" />
            </div>
        </div>
    )
}

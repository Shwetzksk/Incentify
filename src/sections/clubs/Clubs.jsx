import React from 'react'
import styles from './_clubs.module.scss'
import PhoneImage from '../../assets/icons/phone-straight.png'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import TextBox from '../../components/textBox/textbox.component'

export default function Clubs() {
    const {ref, inView} = useInView({
        threshold: 0.3
    })
    return (
        <>
            <div className={styles.section}>
                <h1>Introducing Clubs from Incentify ðº</h1>
                <motion.div ref={ref} className={styles.phone}>
                    <img src={PhoneImage} alt="phone" />
                    <TextBox 
                    top="-5%" 
                    left="-160%"
                    inView={inView}
                    delay={0}
                    content="â¡ A playlist curated by users with similar music taste & vibes" />
                    <TextBox 
                        top="20%"
                        right="-165%"
                        inView={inView}
                        delay={1}
                        content="ðµ Share songs with friends in your Club, no matter which music app they use" />
                    <TextBox 
                        top="60%"
                        left="-155%"
                        delay={2}
                        inView={inView}
                        content="ð Discover hidden gems from Clubs on Incentify" />
                    <TextBox 
                        top="100%"
                        left="-20%"
                        delay={3}
                        inView={inView}
                        content="Think youâve got great taste? Start a Club now ð¥" />
                </motion.div>
                 
            </div>
        </>
        
    )
}


/*

<div className={styles.section}>
                <h1>Introducing Clubs from Incentify ðº</h1>
                <div ref={ref} className={styles.phone}>
                    <img src={PhoneImage} alt="phone" />
                </div>
            </div>
            <div className={styles.textcont}>
                <TextBox 
                top="15%"
                left="11%"
                content="â¡ A playlist curated by users with similar music taste & vibes" />
            </div>
            <div className={styles.textcont}>
                <TextBox 
                top="25%"
                left="30%"
                content="ðµ Share songs with friends in your Club, no matter which music app they use" />
            </div>
            <div className={styles.textcont}>
                <TextBox 
                top="20%"
                left="100%"
                content="ð Discover hidden gems from Clubs on Incentify" />
            </div>
            <div className={styles.textcont}>
                <TextBox 
                top="60%"
                left="10%"
                content="Think youâve got great taste? Start a Club now ð¥" />
            </div>

            */
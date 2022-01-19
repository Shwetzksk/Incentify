import React from 'react'
import styles from './_clubs.module.scss'
import PhoneImage from '../../assets/icons/phone-straight.png'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'


const TextBox = (props) => {
    const {top, right, bottom, left, inView} = props
    const controls = useAnimation()

    React.useEffect(()=>{
        if(!inView)
        {
            controls.start({
                opacity: 0,
                y: 200,
                transition: {duration: 0}
            })
        }
        else if(inView)
        {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {duration: 1, delay: props.delay/2}
            })
        }
        
    },[inView])

    return(
        <motion.div animate={controls} className={styles.textbox} style={{top, right, bottom, left}}>
            {props.content}
        </motion.div>
    )
}

export default function Clubs() {
    const {ref, inView} = useInView({
        threshold: 0.3
    })
    console.log(inView);
    return (
        <>
            <div className={styles.section}>
                <h1>Introducing Clubs from Incentify 🕺</h1>
                <motion.div ref={ref} className={styles.phone}>
                    <img src={PhoneImage} alt="phone" />
                    <TextBox 
                    top="-5%" 
                    left="-160%"
                    inView={inView}
                    delay={0}
                    content="⚡ A playlist curated by users with similar music taste & vibes" />
                <TextBox 
                    top="20%"
                    right="-165%"
                    inView={inView}
                    delay={1}
                    content="🎵 Share songs with friends in your Club, no matter which music app they use" />
                <TextBox 
                    top="60%"
                    left="-155%"
                    delay={2}
                    inView={inView}
                    content="💎 Discover hidden gems from Clubs on Incentify" />
                <TextBox 
                    top="100%"
                    left="-20%"
                    delay={3}
                    inView={inView}
                    content="Think you’ve got great taste? Start a Club now 🔥" />
                </motion.div>
                 
            </div>
        </>
        
    )
}


/*

<div className={styles.section}>
                <h1>Introducing Clubs from Incentify 🕺</h1>
                <div ref={ref} className={styles.phone}>
                    <img src={PhoneImage} alt="phone" />
                </div>
            </div>
            <div className={styles.textcont}>
                <TextBox 
                top="15%"
                left="11%"
                content="⚡ A playlist curated by users with similar music taste & vibes" />
            </div>
            <div className={styles.textcont}>
                <TextBox 
                top="25%"
                left="30%"
                content="🎵 Share songs with friends in your Club, no matter which music app they use" />
            </div>
            <div className={styles.textcont}>
                <TextBox 
                top="20%"
                left="100%"
                content="💎 Discover hidden gems from Clubs on Incentify" />
            </div>
            <div className={styles.textcont}>
                <TextBox 
                top="60%"
                left="10%"
                content="Think you’ve got great taste? Start a Club now 🔥" />
            </div>

            */
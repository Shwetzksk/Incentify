import React from 'react'
import styles from './_purpose.module.scss'
import PhoneStraight from '../../assets/icons/phone-straight.png' 


export default function Purpose() {
    return (
        <div className={styles.section}>
            <div className={styles.container} >
                <div className={styles.textcont}>
                    <div>
                        <h2>Music sharing via links sucks 😩</h2>
                        <div>🔗 Sharing song links over DM feels cluttered</div>
                        <div>⏯ With so many music apps, cross-platform sharing of songs is a big pain</div>
                        <div>😕 No one seems to care when you post that banger on your Instagram story</div>
                    </div>
                </div>
                <div className={styles.phone}>
                    <img src={PhoneStraight} alt="" />
                </div>
            </div>
            <div className={styles.container} >
                <div className={styles.phone}>
                    <img src={PhoneStraight} alt="" />
                </div>
                <div className={styles.textcont}>
                    <div>
                        <h2>Algorithms make discovery boring 😴</h2>
                        <div>🤷 Streaming app recommendations don’t quite get your music taste</div>
                        <div>🎶 Most songs have started sounding the same because of algorithms </div>
                        <div>💯That recommendation from a friend who shares your music taste, hits different</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

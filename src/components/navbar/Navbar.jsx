import React from 'react'
import IncentifyLogo from '../../assets/icons/logo-text.png'
import InstagramLogo from '../../assets/icons/instagram.svg'
import TwitterLogo from '../../assets/icons/twitter.png'
import SubstackLogo from '../../assets/icons/substack.png'
import MediumLogo from '../../assets/icons/medium.png'
import styles from './_navbar.module.scss'


export default function Navbar() {
    return (
        <div>
            <div className={styles.logo}>
                <img src={IncentifyLogo} alt="inentify logo" />
            </div>
            <div className={styles.menu}>
                <div className={styles.links}>
                    <div>
                        Introducing Clubs ⚡
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Blog
                    </div>
                    <div>
                        Contact
                    </div>
                </div>
                <div className={styles.socials}>
                    <img src={InstagramLogo} alt="instagram" />
                    <img src={TwitterLogo} alt="twitter" />
                    <img src={SubstackLogo} alt="substack" />
                    <img src={MediumLogo} alt="medium" />
                </div>
            </div>
        </div>
    )
}

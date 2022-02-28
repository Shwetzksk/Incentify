import React from 'react';
import { motion, useAnimation } from 'framer-motion'
import styles from './_textBox.module.scss'

const TextBox = (props) => {
    const {top, right, bottom, left, inView,children,transform} = props
    const controls = useAnimation()

    React.useEffect(()=>{
        if(!inView){
            controls.start({
                opacity: 0,
                x: 200,
                transition: {duration: 0}
            })
        }
        else if(inView){
            controls.start({
                opacity: 1,
                x: 0,
                transition: {duration: 1, delay: props.delay/2}
            })
        }
        
    },[inView])

    return(
        <motion.div animate={controls} className={styles.textbox} style={{top, right, bottom, left,transform}}>
            {children}
        </motion.div>
    )
}

export default TextBox
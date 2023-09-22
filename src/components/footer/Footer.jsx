import { MotionConfig } from 'framer-motion'
import React from 'react'
import { footerVariants, staggerChildren } from '../../utils/motion'
import { motion } from "framer-motion"
import css from './Footer.module.scss'

const Footer = () => {
  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}>


        <motion.div 
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
            <div className={css.left}>
                <span className="primaryText">Let's make something <br/> amazing together!</span>
                <span className="primaryText">
                    Start by <a href="mailto:brightdayphotos@gmail.com">saying hi!</a>
                </span>
            </div>


            <div className={css.right}>
                <div className={css.info}>
                    <span className="secondaryText">
                        Information
                    </span>
                    <p>Long Beach, CA</p>
                </div>

                <div className={css.menu}>
                    <li>Services</li>
                    <li>Works</li>
                    <li>Notes</li>
                    <li>Experiences</li>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer
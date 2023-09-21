import React from 'react'
import css from './hero.module.scss'
import { motion } from "framer-motion"
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'

const Hero = () => {
    return (
        <section className={` paddings ${css.wrapper}`}>
            <motion.div className={` innerWidth ${css.container}`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25}}
            >

                {/* upper elements */}
                <div className={css.upperElements}>
                    <motion.span className="primaryText"
                    variants={fadeIn("right", "tween", 0.3, 1)}>


                        Hey There, <br/>I'm Binjan.
                    </motion.span>
                    <motion.span className="secondaryText"
                    variants={fadeIn("left", "tween", 0.5, 1)}>
                        
                        I design beautiful simple <br/>
                        things, And I love what i do
                    </motion.span>
                </div>

                {/* person image */}
                <motion.div className={css.person}
                variants={fadeIn("up", "tween", 0.2, 1)}>
                    <motion.img src="./person.png" alt="" variants={slideIn("up", "tween", 0.5, 1.3)}/>
                </motion.div>

                {/* email */}
                <a href="mailto:brightdayphotos@gmail.com" className={css.email}>
                    Let's talk!
                </a>

                {/* lower elements */}
                <div className={css.lowerElements}>
                    <motion.div className={css.experience}
                    variants={fadeIn("right", "tween", 0.3, 1)}>
                        <div className = "primaryText">10</div>
                        <div className = "secondaryText">
                            <div>Years</div>
                            <div>Expereince</div>
                        </div>
                    </motion.div>
                    <motion.div className={css.certificate}
                    variants={fadeIn("left", "tween", 0.5, 1)}>
                        <img src="./certificate.png" alt="" />
                        <span>CERTIFIED PROFESSIONAL</span><br/>
                        <span>UI/UX DESIGNER</span>

                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
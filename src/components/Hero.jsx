import React from 'react'
import { SiBuymeacoffee } from "react-icons/si";
import Coffee from '../assets/coffee2.png'
import Png from '../assets/coffee.png'
import { motion, delay } from "framer-motion";
import { FadeRight } from '../utility/animation';


const Hero = () => {
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
                {/* Brand Info */}
                <div className='flex flex-col justify-center py-14 md:py-0 relative z-10 hero'>
                    <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>

                        <motion.h1
                            variants={FadeRight(0.4)}
                            initial="hidden"
                            animate="visible"
                            className='text-xl lg:text-5xl leading-relaxed xl:leading-loose capitalize'>Enjoy your morning coffee

                        </motion.h1>

                        <motion.p
                            variants={FadeRight(0.6)}
                            initial="hidden"
                            animate="visible"
                            className='text-style'>Step into a world where the aroma of freshly ground beans wafts through the air, and the warm embrace of a perfectly brewed cup of coffee awaits you.
                            <img src={Png} alt="coffee" className='w-6  absolute ml-2 inline-flex' />
                        </motion.p>

                        <motion.button
                            variants={FadeRight(0.9)}
                            initial="hidden"
                            animate="visible"
                            className='primary-btn flex items-center gap-2'>

                            Order Now
                            <SiBuymeacoffee className='ml-1 bg-primary' />
                        </motion.button>
                    </div>

                    <motion.div 
                    variants={FadeRight(1.5)}
                    initial="hidden"
                    animate="visible"
                    className="counting mt-14 flex gap-9 text-style">
                        <div className="data" >
                            <p className='font-semibold text-3xl' >200 <br /><span className='font-normal text-xl'>Reviews</span></p>
                        </div>
                        <div className="data">
                            <p className='font-semibold text-3xl'>2K+ <br /><span className='font-normal text-xl'>Best Sales</span></p>
                        </div>
                        <div className="data">
                            <p className='font-semibold text-3xl'>3K+ <br /><span className='font-normal text-xl'>Happy Customers</span></p>
                        </div>
                    </motion.div>
                </div>
                {/* Hero Image */}

                <div
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    className='flex justify-center items-center '>
                    <motion.img
                        data-aos-once="true"
                        initial={{ opacity: 0, x: 200, rotate: 75 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        src={Coffee} alt="Cofffee" className='w-350px md:w-550px drop-shadow bg-primary rounded-full spin transition-[2s]' />
                </div>
            </div>
        </section>
    )
}

export default Hero
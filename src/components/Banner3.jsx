import React from 'react'
import { motion } from "framer-motion"
import Bikegif from '../assets/bikegif.gif'
import { SiBuymeacoffee } from "react-icons/si";
import { FadeUp } from '../utility/animation'



const Banner3 = () => {
  return (
    <section className=' '>
      <div className=" container p-0 mt-0 md:grid-cols-2 md:space-y-0 py-12">


        <div className='flex justify-around '>
          <div className=' mb-5 md:text-left lg:max-w-[400px] banner3'>
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='text-3xl lg:text-5xl mb-4 font-normal text-style uppercase'>We at doorstep  </motion.h1>
              <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='border-b-2 mb-5 border-[#603F26] md:justify-center'>Freshness Guaranteed: Coffee is best when it's fresh! We roast to order, so you get the freshest beans possible. We ship directly to your doorstep, so you can enjoy the perfect cup, every time.</motion.p>

            <motion.button
              variants={FadeUp(0.9)}
              initial="hidden"
              animate="visible"
              className='primary-btn flex items-center gap-2'>
              <SiBuymeacoffee className='ml-1 bg-primary' />Take Us To You</motion.button>
              </div>
            <div className='flex banner3img'>
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                viewport={{ once: true }}
                src={ Bikegif } alt="CoffeeGIF" className='w-[300px] md:max-w-[400px] ml-10 object-cover drop-shadow background' />
            </div>

          </div>
          


        </div>
      
    </section>
  )
}

export default Banner3
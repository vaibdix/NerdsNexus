import React from 'react'
import { motion } from 'framer-motion'
import { Slider } from '../components'

const HomeSlider = () => {
  return (
    <motion.div className='w-full flex items-start justify-start flex-col'>
        <div className='w-full flex items-center justify-between '>
            <div className='flex flex-col items-start justify-start gap-1'>
                <p className='text-2xl text-headingColor font-bold'>
                    Our Fresh Stocks
                </p>
                <div className='w-40 h-1 rounded-md bg-[#a685ff]'></div>
            </div>
        </div>

        <Slider />
    </motion.div>
  )
}

export default HomeSlider
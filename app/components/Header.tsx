import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"
import { spring } from 'motion'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: spring, stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt='Profile Image' className='rounded-full w-32' />
            </motion.div>

            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I am Piyush Burate
                <Image src={assets.hand_icon} alt='Hand Icon' className='w-6' />
            </motion.h3>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6x1 lg:text-[66px] font-Ovo'>
                Full stack app developer
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto font-Ovo' >
                Dynamic Mobile App Developer specializing in Flutter with a strong focus on UI/UX design and scalable application development.
                Skilled in problem solving, mentoring junior developers, and integrating RESTful APIs, Firebase, and third-party packages. Passionate about leveraging the latest mobile technologies to build high-performance, user-centric solutions
            </motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact"
                    className=' px-10 py-3 border border-white bg-black text-white dark:bg-transparent rounded-full flex items-center gap-2'>
                    Contact Me
                    <Image src={assets.right_arrow_bold_dark} alt='Right Arrow Icon' className='w-4' />
                </motion.a>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/resume.pdf" className="flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 bg-white dark:text-black">
                    My Resume <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
                </motion.a>
            </div>
        </div>
    )
}

export default Header
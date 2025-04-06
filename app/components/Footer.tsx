import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

type Props = {
    isDarkMode: boolean,
}

const Footer = ({ isDarkMode }: Props) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo' className='w-36 mx-auto mb-2' />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Mail Icon' className='w-6' />
                    buratepiyush@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>&copy; 2025 Piyush Burate. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a href="https://github.com/piyushburate" target='_blank'>Github</a></li>
                    <li><a href="https://github.com/piyushburate" target='_blank'>Instagram</a></li>
                    <li><a href="https://github.com/piyushburate" target='_blank'>Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
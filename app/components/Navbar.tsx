'use-client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from '@/assets/assets'

type Props = {
    isDarkMode: boolean,
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
}

const Navbar = ({ isDarkMode, setIsDarkMode }: Props) => {
    const [isScroll, setIsScoll] = useState(false);
    const sideMenuRef = useRef<HTMLUListElement>(null);
    const openMenu = () => {
        sideMenuRef.current!.style.transform = 'translateX(-16rem)';
    };
    const closeMenu = () => {
        sideMenuRef.current!.style.transform = 'translateX(16rem)';
    };

    useEffect(()=>{
        setIsScoll(scrollY > 100);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 100) {
                setIsScoll(true);
            } else {
                setIsScoll(false);
            }
        });
    });

    return <>
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
            <Image src={assets.header_bg_color} alt="Header Backgound" className="w-full" />
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:shadow-white/20 dark:bg-dark-theme" : ""}`}>
            <a href="">
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="App Logo" className="w-28 cursor-pointer mr-14" />
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}>
                <li><a className="font-Ovo" href="">Home</a></li>
                <li><a className="font-Ovo" href="#about">About Me</a></li>
                <li><a className="font-Ovo" href="#services">Services</a></li>
                <li><a className="font-Ovo" href="#work">My Work</a></li>
                <li><a className="font-Ovo" href="#contact">Contact Me</a></li>
            </ul>

            <div className="flex items-center gap-4">
                <button onClick={()=> setIsDarkMode(prev => !prev)}>
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Moon Icon" className="w-6" />
                </button>

                <button className="block md:hidden ml-3 cursor-pointer" onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu Icon Black" className="w-6" />
                </button>
            </div>

            <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover">
                <div className="absolute right-6 top-6" onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Icon" className="w-5 cursor-pointer" />
                </div>
                <li><a className="font-Ovo" onClick={closeMenu} href="/">Home</a></li>
                <li><a className="font-Ovo" onClick={closeMenu} href="#about">About Me</a></li>
                <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
                <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>
                <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    </>;
};

export default Navbar;

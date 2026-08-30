'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import DropdownMenuHeader from "@/app/Components/Header/DropdownMenu";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY.current && currentScrollY > 200) {
                console.log(currentScrollY);
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                isVisible ? "fixed top-0 left-0 " : "relative"
            } grid grid-cols-3 lg:h-32 h-24 md:h-32 w-full lg:items-center  px-8 bg-app-bg border-b border-b-titanium-border`}
        >
            <div></div>

            <div className="justify-self-center">
                <Link href="/" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <img className="lg:h-44 h-32 max-w-none object-contain" src="/logo.png" alt="Logo"/>
                </Link>
            </div>

            <div className="justify-self-end flex items-center">
                <DropdownMenuHeader />
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import {Button} from "@heroui/react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="flex w-full pt-12 p-2 bg-app-bg border-b border-b-titanium-border">
            <div className="lg:flex hidden flex-1/2 justify-end items-center">
                <img src="obkladac.png" alt=""/>
            </div>

            <div className="lg:w-1/2 w-full flex text-center lg:text-start lg:items-start items-center justify-center font-cinzel flex-col lg:pl-12 gap-y-2">
                <p className=" text-5xl text-text-main ">Obklady, mozaiky aj veľkoformáty.</p>
                <p className=" text-2xl text-text-muted">Kompletné riešenia pre váš domov.</p>
                <div className="flex lg:flex-row md:flex-row flex-col lg:w-[60%] md:w-[70%] w-full pt-6 pb-8 lg:pb-0 justify-between gap-y-6 ">
                    <Link href="/realizacie"><Button className="transition-colors border bg-btn-dark hover:bg-btn-dark-hover text-gold hover:text-gold-hover border-titanium-border rounded-full  lg:w-36 lg:h-10 w-64 h-16">REALIZÁCIE</Button></Link>
                    <Link href="/kontakt"><Button className="border-titanium-border bg-btn-dark hover:bg-btn-dark-hover text-gold hover:text-gold-hover border rounded-full lg:w-36 lg:h-10 w-64 h-16">KONTAKT</Button></Link>
                </div>
            </div>

        </div>
    );
};

export default Hero;
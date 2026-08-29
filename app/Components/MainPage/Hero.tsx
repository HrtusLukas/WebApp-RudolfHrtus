import React from 'react';
import {Button} from "@heroui/react";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="flex w-full pt-12 p-2 bg-app-bg border-b border-b-titanium-border">
            <div className="flex flex-1/2 justify-end items-center">
                <img src="obkladac.png" alt=""/>
            </div>

            <div className="w-1/2 flex items-start justify-center font-cinzel flex-col pl-12 gap-y-2">
                <p className=" text-5xl text-text-main">Obklady, mozaiky aj veľkoformáty.</p>
                <p className=" text-2xl text-text-muted">Kompletné riešenia pre váš domov.</p>
                <div className="flex flex-row w-[60%] pt-6 justify-between">
                    <Link href="/realizacie"><Button className="transition-colors border bg-btn-dark hover:bg-btn-dark-hover text-gold hover:text-gold-hover border-titanium-border rounded-full  w-36 h-10">REALIZÁCIE</Button></Link>
                    <Link href="/kontakt"><Button className="border-titanium-border bg-btn-dark hover:bg-btn-dark-hover text-gold hover:text-gold-hover border rounded-full w-36 h-10">KONTAKT</Button></Link>
                </div>
            </div>

        </div>
    );
};

export default Hero;
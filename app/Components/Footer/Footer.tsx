'use client';
import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-col w-full  items-center font-cinzel bg-app-bg text-text-main">
                <div className="w-[90%] ml-[10%] hidden lg:inline h-24 bg-app-bg lg:[--line:#e5e7eb] lg:[--gap:10px] lg:bg-[repeating-linear-gradient(45deg,var(--line),var(--line)_1px,transparent_1px,transparent_var(--gap))]"></div>
                <div className="flex md:flex-row flex-col  justify-between items-center border-b border-b-titanium-border w-[80%] ">
                    <img className="lg:h-44 h-36 md:h-44 max-w-none object-contain" src="/logo.png" alt="Logo"/>
                    <p className=" md:w-1/3 md:text-start text-center lg:pb-0 pb-6 text-text-main text-xl">Precíznosť, rovné línie a čistá práca pre váš
                        domov.</p>
                </div>
                <div className="flex md:flex-row flex-col md:w-[80%] w-full lg:pb-0 pb-6  px-6 items-center justify-center">
                    <div className="flex-1/2">
                        <p className="text-gold-hover pt-4 lg:pt-0 lg:text-start text-center">© 2026 Rudolf Hrtus. Všetky práva vyhradené.</p>
                    </div>
                    <div className="flex-1/2 hidden  lg:flex flex-row items-between justify-between  py-20">
                        <div>
                            <strong className="text-gold">Sluzby</strong>
                            <p>Obklady & Dlažby</p>
                            <p>Mozaiky & Detaily</p>
                            <p>Realizácie</p>
                        </div>
                        <div>
                            <strong className="text-gold">Pravne informacie</strong>
                            <p>Obchodné podmienky</p>
                            <p>Ochrana osobných údajov</p>
                        </div>
                        <div className="flex flex-col">
                            <strong className="text-gold">Kontakt</strong>
                            <p>email</p>
                            <p>phone</p>
                            <p>instagram</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

            export default Footer;
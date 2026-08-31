import React from 'react';
import {Array} from "@/app/Components/MainPage/Array";
import {Button} from "@heroui/react";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Realizacie = () => {
    return (
        <section className="flex flex-col justify-center items-center py-16 border-b border-b-titanium-border font-cinzel">
            <div className=" tracking-wide uppercase text-center ">
                <strong className="text-text-main text-4xl ">Realizacie</strong>
            </div>
            <div className="lg:grid grid-rows-2 grid-cols-3 w-[75%] items-center gap-x-8 gap-y-8 my-12  hidden">
                {Array.map((image, index) => (
                    <div key={index} className="flex flex-col">
                        <img className="w-[450px] h-[250px]"  src={image.image.src} alt="none"/>
                        <p className="text-center">{image.title}</p>
                    </div>
                ))}
            </div>
            <div className="lg:hidden inline w-[70%] py-12">
                <Carousel plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}>
                    <CarouselContent>
                        {Array.map((image, index) => (
                            <CarouselItem className="flex flex-col" key={index}>
                                <img  className="w-[100%] h-[100%]" src={image.image.src} alt="none"/>
                                <p className="text-center">{image.title}</p>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10 text-gold bg-btn-dark" />
                    <CarouselNext className="w-10 h-10 text-gold bg-btn-dark" />
                </Carousel>
            </div>
            <div>
                <Link href="/realizacie"><Button className="transition-colors border bg-btn-dark hover:bg-btn-dark-hover text-lg text-gold hover:text-gold-hover border-titanium-border rounded-full  lg:72 lg:h-16 w-64 h-16">Zobrazit vsetky realizacie</Button></Link>
            </div>
        </section>
    );
};

export default Realizacie;
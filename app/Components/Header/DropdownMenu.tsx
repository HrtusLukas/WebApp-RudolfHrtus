"use client";
import * as React from "react";
import { DropdownMenu } from "radix-ui";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const DropdownMenuHeader = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className="inline-flex size-[45px] items-center justify-center rounded-full bg-btn-dark hover:bg-btn-dark-hover text-gold outline-none transition-colors focus:shadow-[0_0_0_2px] focus:shadow-black"
                    aria-label="Customise options"
                >
                    <HamburgerMenuIcon className="size-6" />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="min-w-[220px] px-8 py-8 space-y-2 text-xl font-cinzel rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
                    sideOffset={10}
                >
                    {/* Zmenené cesty s / na začiatku */}
                    <DropdownMenu.Item><Link href="/public">Služby</Link></DropdownMenu.Item>
                    <DropdownMenu.Item><Link href="/realizacie">Realizácie</Link></DropdownMenu.Item>
                    <DropdownMenu.Item><Link href="/preco-ja">Prečo ja</Link></DropdownMenu.Item>
                    <DropdownMenu.Item><Link href="/ako-pracujem">Ako pracujem</Link></DropdownMenu.Item>
                    <DropdownMenu.Item><Link href="/cennik">Cenník</Link></DropdownMenu.Item>
                    <DropdownMenu.Item><Link href="/kontakt">Kontakt</Link></DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuHeader;
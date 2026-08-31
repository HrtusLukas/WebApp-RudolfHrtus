"use client";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@heroui/react";
import Hero from "@/app/Components/MainPage/Hero";
import PrecoJa from "@/app/Components/MainPage/PrecoJa";
import Realizacie from "@/app/Components/MainPage/Realizacie";

export default function Home() {
  return (
      <div>
        <Hero></Hero>
        <PrecoJa></PrecoJa>
        <Realizacie></Realizacie>
      </div>
  );
}

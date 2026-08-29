"use client";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@heroui/react";
import Hero from "@/app/Components/MainPage/Hero";
import PrecoJa from "@/app/Components/MainPage/PrecoJa";

export default function Home() {
  return (
      <div>
        <Hero></Hero>
        <PrecoJa></PrecoJa>
      </div>
  );
}

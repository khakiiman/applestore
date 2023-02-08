import Image from "next/image";
import React from "react";
import Button2 from "./Button2";
import { Tab } from "@headlessui/react";

const Landing = () => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Next.js,</span>
          <span className="block">Tailwindcss and Sanity </span>
        </h1>
        <div className="space-x-8">
          <Button2 title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
      </div>
      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image src="/iphone.png" fill style={{ objectFit: "contain" }} alt="heroImage"/>
      </div>
    </section>
  );
};

export default Landing;

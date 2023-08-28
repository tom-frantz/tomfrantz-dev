"use client";

import { useEffect, useState } from "react";
import {
    currentDarkMode,
    DarkModeButton,
    toggleDarkMode,
} from "@/app/(components)/dark_mode";
import FlashyLink from "@/app/(components)/flashy_link";

export default function Navbar(props: {}) {
    return (
        <div
            className={`
            lg:bg-white lg:dark:bg-stone-900 lg:shadow-md  
            max-w-[65ch] w-full lg:w-60 
            rounded-b-3xl
            flex flex-row items-baseline 
            lg:flex-col lg:space-x-0 lg:space-y-2
            sm:pt-4 px-8 lg:py-8 my-2  sm:mx-4 sm:mb-4 mt-0`}
        >
            <FlashyLink
                href="/"
                className={"sm:text-lg md:text-2xl font-bold no-underline"}
            >
                Tom Frantz
            </FlashyLink>
            <FlashyLink href="/blog" className={"ml-4 sm:ml-8"}>
                Blog
            </FlashyLink>
            <FlashyLink href="/projects" className={"ml-4 sm:ml-8"}>
                Projects
            </FlashyLink>
            <DarkModeButton className={"lg:hidden"} />
        </div>
    );
}

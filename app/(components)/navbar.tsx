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
            className={
                "max-w-[65ch] w-full flex flex-row items-baseline pt-8 lg:w-60 lg:flex-col lg:space-x-0 lg:space-y-2  px-4 lg:py-8 lg:px-12"
            }
        >
            <FlashyLink
                href="/"
                className={"sm:text-lg md:text-2xl font-bold no-underline"}
            >
                Tom Frantz
            </FlashyLink>
            <FlashyLink href="/blog" className={"ml-8"}>
                Blog
            </FlashyLink>
            <FlashyLink href="/projects" className={"ml-8"}>
                Projects
            </FlashyLink>
            <DarkModeButton className={"lg:hidden"} />
        </div>
    );
}

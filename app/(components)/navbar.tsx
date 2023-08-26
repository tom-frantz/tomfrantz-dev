"use client";

import { useEffect, useState } from "react";
import { currentDarkMode, toggleDarkMode } from "@/app/(components)/dark_mode";

const SUN = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
    </svg>
);

const MOON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
    </svg>
);

export default function Navbar(props: {}) {
    const [theme, setTheme] = useState(currentDarkMode());

    return (
        <div
            className={
                "max-w-[65ch] w-full flex flex-row items-baseline pt-8 lg:w-60 lg:flex-col lg:space-x-0 lg:space-y-4  px-4 lg:py-8 lg:px-12"
            }
        >
            <a
                href="/"
                className={
                    "sm:text-lg md:text-2xl font-bold hover:text-amber-400"
                }
            >
                Tom Frantz
            </a>
            <a href="/blog" className={"underline hover:text-amber-400 ml-8"}>
                Blog
            </a>
            <a
                href="/projects"
                className={"underline hover:text-amber-400 ml-8"}
            >
                Projects
            </a>
            <button
                onClick={() => {
                    toggleDarkMode();
                    // setTheme(getMode());
                }}
                className="dark:bg-stone-800 bg-stone-100 rounded-md p-2 space-x-0 ml-auto"
            >
                {theme === "dark" ? SUN : MOON}
                {/*{MOON}*/}
            </button>
        </div>
    );
}
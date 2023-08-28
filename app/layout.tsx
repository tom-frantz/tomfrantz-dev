import React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat, Anonymous_Pro } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const anonymous_pro = Anonymous_Pro({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* TODO Remove this crap when they fix beforeInteractive */}
                <script
                    id={"dark_mode_default"}
                    dangerouslySetInnerHTML={{
                        __html: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  console.log('dark');
                  document.documentElement.classList.add('dark')
                } else {
                  console.log('light');
                  document.documentElement.classList.remove('dark')
                }`,
                    }}
                />
            </head>
            <body
                className={`${montserrat.className} bg-stone-100 dark:bg-stone-800 dark:text-white`}
            >
                {children}
            </body>
        </html>
    );
}

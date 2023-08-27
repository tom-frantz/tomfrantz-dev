"use client";

import { useState } from "react";

interface FlashyLinkProps {
    href: string;
    children: React.ReactNode;

    flashClassName?: string;
    className?: string;
}

const FlashyLink = ({
    href,
    children,
    className,
    flashClassName,
}: FlashyLinkProps) => {
    let [postHoverClass, setPostHoverClass] = useState("");

    return (
        <a
            href={href}
            className={
                "underline hover:text-amber-400 " +
                postHoverClass +
                " " +
                className
            }
            onMouseLeave={() => {
                setPostHoverClass(flashClassName ?? "text-sky-600");
                setTimeout(() => setPostHoverClass(""), 250);
            }}
        >
            {children}
        </a>
    );
};

export default FlashyLink;

import React, { useEffect, useState } from "react";

interface SlidingQuotesProps {}

interface Quote {
    attribution: string;
    quote: string;
}

const SlidingQuotes: React.FC<SlidingQuotesProps> = (
    props: SlidingQuotesProps
) => {
    const quotes: Quote[] = [
        { quote: "Tom is rad!", attribution: "Honman, my Co-Overworker" },
        {
            quote: "H.Y.M.C!",
            attribution: "Milindi Kodikara, my darling GF",
        },
        {
            quote: "Wow, I ended up here? Couldn’t I have ended up on Google where I could at least yeet something?",
            attribution: "Ally, my Coworker",
        },
        {
            quote: "This is easily the best site I've ever witnessed!",
            attribution: "Myself",
        },
        {
            quote: "wouldn't trust him with my houseplants but he can make a mean cake",
            attribution: "Michaela, my sister",
        },

        {
            quote: "Honestly, a masterpiece of a human!",
            attribution: "Milindi Kodikara, my darling GF",
        },
    ];

    const [visible, setVisible] = useState(true);
    const [quote, setQuote] = useState(2);

    useEffect(() => {
        let ms = 5000;
        let delay = 700;

        const fadeIn = () => {
            setQuote((q) => (q + 1) % quotes.length);
            setVisible(true);
            console.log("SHOW");
        };

        let fadeOut = () => {
            setVisible(false);
            console.log("HIDE");
        };

        let timeoutFadeIn = setInterval(() => setTimeout(fadeIn, delay), ms);
        let timeoutFadeOut = setInterval(fadeOut, ms);

        return () => {
            clearInterval(timeoutFadeIn);
            clearInterval(timeoutFadeOut);
        };
    }, [quotes.length]);

    return (
        <blockquote className={visible ? "slide-in" : "slide-out"}>
            <div
                style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    width: "calc(100% - 48px)",
                    // paddingRight: "8px",
                }}
            >
                <p>{quotes[quote].quote}</p>
                <p className={"text_small"} style={{ alignSelf: "flex-start" }}>
                    - {quotes[quote].attribution}
                </p>
            </div>
        </blockquote>
    );
};

export default SlidingQuotes;

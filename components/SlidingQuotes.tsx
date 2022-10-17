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
        { quote: "This is a radical site!", attribution: "Myself" },
        { quote: "Wow, so amazing", attribution: "Myself" },
        { quote: "I can't believe my eyes", attribution: "Myself" },
    ];

    const [visible, setVisible] = useState(true);
    const [quote, setQuote] = useState(0);

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

        let timeoutFadeIn: any;
        setTimeout(() => {
            timeoutFadeIn = setInterval(fadeIn, ms);
        }, delay);

        let timeoutFadeOut = setInterval(fadeOut, ms);

        return () => {
            if (timeoutFadeIn) {
                clearInterval(timeoutFadeIn);
            }
            clearInterval(timeoutFadeOut);
        };
    }, [quotes.length]);

    return (
        <blockquote className={visible ? "slide-in" : "slide-out"}>
            <div
                style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    width: "",
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

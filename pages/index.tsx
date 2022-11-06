import Head from "next/head";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import BorderContainer from "../components/BorderContainer";
import SlidingQuotes from "../components/SlidingQuotes";

const Home: NextPage = () => {
    const router = useRouter();
    let isRecursive = router.query.recursive !== undefined;

    return (
        <>
            <Head>
                <title>tomfrantz.dev</title>
            </Head>

            <BorderContainer>
                <h1 style={{ marginTop: 0, marginBottom: 0 }}>
                    {isRecursive ? "Ooh, did we just recurse?" : "Tom Frantz"}
                </h1>
                <p style={{ marginTop: 0 }} className={"primary"}>
                    {isRecursive
                        ? "That was kinda fun, yeah!?"
                        : "Wombat Enthusiast | Turbo Nerd"}
                </p>

                <SlidingQuotes />

                <p>Welcome!</p>

                <p>
                    This is my personal website, and I do hope you enjoy your
                    stay. It's a bit empty these days, but I hope you find what
                    you're looking for, or at least something interesting.
                    Perhaps a{" "}
                    <a href={"https://www.tomfrantz.dev/blog/chapter_1"}>
                        blog post about hexagons?
                    </a>
                </p>
                <p>
                    If you're now planning on departing this site for greener
                    fields, I bid you farewell. I do warn you though, travel
                    carefully, for you could end up{" "}
                    <a href={"https://www.theworldsworstwebsiteever.com/"}>
                        here...
                    </a>{" "}
                    if you're not careful
                </p>

                <p className={"text_small"}>
                    This site is super under construction
                </p>
            </BorderContainer>
            {/*<WigglyLineDivider lines={LINES} />*/}
        </>
    );
};

export default Home;

import Head from "next/head";
import type { NextPage } from "next";

import BorderContainer from "../components/BorderContainer";
import SlidingQuotes from "../components/SlidingQuotes";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>tomfrantz.dev</title>
            </Head>

            <BorderContainer>
                <h1 style={{ marginTop: 0, marginBottom: 0 }}>Tom Frantz</h1>
                <p style={{ marginTop: 0 }} className={"primary"}>
                    Wombat Enthusiast | Turbo Nerd
                </p>

                <SlidingQuotes />

                <p>Welcome!</p>
                <p>
                    If you've found yourself here, I regret to inform you that
                    you're most likely dead. Don't fret, there's many worse
                    places you could've ended up. For instance, God forbid you
                    landed{" "}
                    <a href={"https://www.theworldsworstwebsiteever.com/"}>
                        here!
                    </a>
                </p>

                <p>This site is super under construction</p>
            </BorderContainer>
            {/*<WigglyLineDivider lines={LINES} />*/}
        </>
    );
};

export default Home;

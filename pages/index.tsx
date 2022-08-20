import Head from "next/head";
import type { NextPage } from "next";

import { InnerSegment, Segment } from "../components/svg_dividers/lib/segment";
import WigglyLineDivider from "../components/WigglyLineDivider";

// import styles from '../styles/Home.module.css'

const LINES: Segment[] = Segment.createSegments(
    [
        { start: 77, stop: 82, backgroundColour: "start" },

        { backgroundColour: "start" },
        { start: 60 },

        { start: 62, stop: 82 },
        { start: 35, stop: 85 },

        { start: 45, stop: 80 },
        { start: 10, stop: 90 },

        { start: 14, stop: 55 },
        { start: 0, stop: 60 },

        { start: 10, stop: 42 },
        { start: 0, stop: 45 },
        {
            backgroundColour: "end",
        },

        { start: 7, stop: 12, backgroundColour: "end" },
    ],
    "outer"
);

// const DarkContainer = styled.div``

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>tomfrantz.dev</title>
            </Head>
            <div
                style={{
                    color: "white",
                    background: "black",
                    width: "100vw",
                    padding: 24,
                }}
            >
                <h1>Tom Frantz</h1>
                <p>This is pretty damn radical</p>
            </div>
            <WigglyLineDivider lines={LINES} />
            <div>
                <p>This site is super under construction</p>
            </div>
        </>
    );
};

export default Home;

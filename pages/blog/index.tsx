import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Link from "next/link";
import path from "path";
import React from "react";
import { remark } from "remark";
import html from "remark-html";
import BorderContainer from "../../components/BorderContainer";
import { DateTime } from "luxon";
import TextDivider from "../../components/TextDivider";

export interface PostMetadata {
    path: string;
    title: string;
    publishDate: string;
    excerpt: string;
    released: boolean;
}

interface indexProps {
    posts: PostMetadata[];
}

function getNumberSuffix(num: number): string {
    const th = "th";
    const rd = "rd";
    const nd = "nd";
    const st = "st";

    if (num === 11 || num === 12 || num === 13) return th;

    let lastDigit = num.toString().slice(-1);

    switch (lastDigit) {
        case "1":
            return st;
        case "2":
            return nd;
        case "3":
            return rd;
        default:
            return th;
    }
}

const fmt = "yyyy-MM-dd";

const index: React.FC<indexProps> = ({ posts }: indexProps) => {
    posts.sort((a, b) => {
        console.log(a, b);

        let aDate = DateTime.fromFormat(a.publishDate, fmt);
        let bDate = DateTime.fromFormat(b.publishDate, fmt);

        return bDate.toSeconds() - aDate.toSeconds();
    });

    return (
        <BorderContainer>
            <h1 style={{ marginTop: 0 }}>Posts</h1>

            {posts.map(
                (
                    { path, title, publishDate: publishDateStr, excerpt },
                    index
                ) => {
                    const publishDate = DateTime.fromFormat(
                        publishDateStr,
                        fmt
                    );

                    let dateString =
                        publishDate.toFormat("d") +
                        getNumberSuffix(publishDate.day) +
                        publishDate.toFormat(" MMMM, yyyy");

                    return (
                        <>
                            {index !== 0 && <TextDivider />}
                            <Link href={`blog/${path}`}>
                                <h3
                                    style={{
                                        marginBottom: 0,
                                        marginTop: 0,
                                        textDecoration: "underline",
                                    }}
                                >
                                    {title}
                                </h3>
                            </Link>

                            <p
                                style={{ marginTop: 0 }}
                                className={".text_small"}
                            >
                                {dateString}
                            </p>
                            <p style={{ marginBottom: 0 }}>{excerpt}</p>
                        </>
                    );
                }
            )}
        </BorderContainer>
    );
};

export const getStaticProps: GetStaticProps = async (props) => {
    const filePaths = await readdir("posts", "utf8");

    // Use gray-matter to parse the post metadata section
    const files = await Promise.all(
        filePaths.map((path) => readFile(`posts/${path}`, "utf8"))
    );

    const matterResults = await Promise.all(
        files.map(async (item, index) => {
            let matterFile = matter(item, {
                excerpt: true,
                excerpt_separator: "\r\n",
            });

            return {
                path: filePaths[index].split(".")[0],
                excerpt: matterFile.excerpt,
                ...matterFile.data,
            };
        })
    );

    return {
        props: {
            // @ts-ignore
            posts: matterResults.filter((res) => res?.released),
        },
    };
};

export default index;

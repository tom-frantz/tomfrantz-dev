import React from "react";
import Head from "next/head";

import * as fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import BorderContainer from "../../components/BorderContainer";
import { PostMetadata } from "./index";

interface Post extends PostMetadata {
    contentHtml: any;
}

interface PostProps {
    postData: Post;
}

const Post: React.FC<PostProps> = ({ postData }: PostProps) => {
    return (
        <>
            <Head>
                <title>tomfrantz.dev</title>
            </Head>

            <BorderContainer>
                <h1 style={{ marginTop: 0 }}>{postData.title}</h1>

                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </BorderContainer>
        </>
    );
};

export async function getStaticPaths() {
    const fileNames = fs.readdirSync("posts");

    const paths = fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({
    params: { id },
}: {
    params: { id: string };
}) {
    const fullPath = path.join("posts", `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        props: {
            postData: {
                id,
                contentHtml,
                ...matterResult.data,
            },
        },
    };
}

export default Post;

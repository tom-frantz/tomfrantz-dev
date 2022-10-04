import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import path from "path";
import React from "react";
import { remark } from "remark";
import html from "remark-html";
import BorderContainer from "../../components/BorderContainer";

export interface PostMetadata {
    title: string;
    publishDate: string;
}

interface indexProps {
    posts: PostMetadata[];
}

const index: React.FC<indexProps> = ({ posts }: indexProps) => {
    return (
        <BorderContainer>
            <h1 style={{ marginTop: 0 }}>Posts</h1>

            {posts.map(({ title, publishDate }) => (
                <>
                    <h2>{title}</h2>
                    <p>{publishDate}</p>
                </>
            ))}
        </BorderContainer>
    );
};

export const getStaticProps: GetStaticProps = async (props) => {
    const filePaths = await readdir("posts", "utf8");

    // Use gray-matter to parse the post metadata section
    const files = await Promise.all(
        filePaths.map((path) => readFile(`posts/${path}`, "utf8"))
    );

    const matterResults = files.map((item) => matter(item).data);

    return {
        props: {
            posts: matterResults,
        },
    };
};

export default index;

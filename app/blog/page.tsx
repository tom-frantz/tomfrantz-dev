import path from "path";
import fs from "fs";
import { BlogPostPreview } from "@/app/blog/(components)/blog_post_preview";

const BLOG_DIR = path.join(__dirname);

export interface BlogPostPreviewDetails {
    title: string;
    description: string;
    publishedDate: string;
    image?: string;
}

interface BlogPosts {
    [name: string]: BlogPostPreviewDetails;
}

async function getPosts() {
    const blog_post_paths = fs
        .readdirSync(BLOG_DIR, { withFileTypes: true })
        .filter((f) => f.isDirectory())
        .map((f) => [f.name, path.join(BLOG_DIR, f.name, "page.mdx")]);

    const blog_posts: BlogPosts = {};

    for (const [name, path] of blog_post_paths) {
        const blog_data = await import("@/app/blog/" + name + "/page.mdx");
        blog_posts[name] = blog_data.meta;
    }

    return blog_posts;
}

export default async function BlogLanding() {
    let posts = await getPosts();

    if (
        Object.keys(posts).length === 0 &&
        process.env.NODE_ENV === "development"
    ) {
        posts = {
            "hello-world": {
                title: "Test Post",
                description: "Hello World!",
                publishedDate: "Today",
            },
            "hello-world2": {
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG",
                title: "Test Post",
                description: "Hello World!",
                publishedDate: "Today",
            },
            "hello-world3": {
                image: "https://i.stack.imgur.com/2wmyg.jpg",

                title: "Test Post",
                description: "Hello World!",
                publishedDate: "Today",
            },
            "hello-world4": {
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG",
                title: "Test Post",
                description: "Hello World!",
                publishedDate: "Today",
            },
            "hello-world5": {
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG",
                title: "Test Post",
                description: "Hello World!",
                publishedDate: "Today",
            },
        };
    }

    return (
        <div className="not-prose">
            <h1 className="text-6xl font-bold mb-4">Unadultered Ramblings</h1>
            <p className="m-0 italic text-sm mb-12">
                {'"Crunchy or smooth peanut butter?.."'}
            </p>
            <div className="">
                {Object.entries(posts).map(([name, post], index) => (
                    <>
                        {index !== 0 && <hr className={"border-stone-500"} />}
                        <BlogPostPreview key={name} link={name} post={post} />
                    </>
                ))}
            </div>
        </div>
    );
}

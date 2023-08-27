import path from "path";
import fs from "fs";

const BLOG_DIR = path.join(__dirname);

export interface BlogPost {
    title: string;
    description: string;
    publishedDate: string;
    image?: string;
}

interface BlogPosts {
    [name: string]: BlogPost;
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
        };
    }

    return (
        <div className="not-prose">
            <h1 className="text-6xl font-bold mb-4">Unadultered Ramblings</h1>
            <p className="m-0 italic text-sm mb-12">
                {'"Can we not do this right now..."'}
            </p>
            <div className="columns-2 gap-4">
                {Object.entries(posts).map(([name, post]) => (
                    // <a
                    //     href={`blog/${name}`}
                    //     key={name}
                    //     className={"no-underline font-normal h-max h-20"}
                    // >
                    <div
                        key={name}
                        className="bg-gradient-to-br from-slate-100 inline-block to-slate-200 mb-4 dark:from-stone-700 dark:to-stone-800 rounded-3xl h-fit w-full"
                    >
                        {post.image && (
                            <img
                                className=" rounded-t-3xl fit-cover w-full "
                                src={post.image}
                                alt={post.title + " Card Image"}
                            />
                        )}
                        <div className="p-4 pt-2 space-y-1 grid">
                            <p className="xs:m-0 sm:m-0 font-bold">
                                {post.title}
                            </p>
                            <div className="flex flex-row justify-between items-end">
                                <p className="text-sm m-0 flex">
                                    {post.description}
                                </p>
                                <p className="text-sm flex flex-shrink-0 ml-4">
                                    {post.publishedDate}
                                </p>
                            </div>
                        </div>
                    </div>
                    // </a>
                ))}
            </div>
        </div>
    );
}

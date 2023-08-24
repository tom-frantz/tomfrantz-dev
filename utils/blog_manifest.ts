import path from "path";
import fs from "fs";

const BLOG_DIR = path.join(".", "app/blog");

interface BlogPost {
    title: string;
    description: string;
    imageSrc?: string;
    publish_date?: string;
    updated_date?: string;
}

interface BlogPosts {
    [name: string]: BlogPost;
}

async function getBlogManifest() {
    // get all directiories in the blog directory
    const blog_post_paths = fs
        .readdirSync(BLOG_DIR, { withFileTypes: true })
        .filter((f) => f.isDirectory())
        .map((f) => [f.name, path.join(BLOG_DIR, f.name, "page.mdx")]);

    const blog_posts: BlogPosts = {};

    for (const [name, path] of blog_post_paths) {
        const blog_data = await import("../" + path);
        const meta = blog_data.meta;

        blog_posts[name] = meta;
    }

    fs.writeFileSync(
        path.join(BLOG_DIR, "blog_manifest.json"),
        JSON.stringify(blog_posts),
    );
}

getBlogManifest().catch((e) => {
    console.error(e);
    process.exit(1);
});

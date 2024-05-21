import { Link, MetaFunction } from "@remix-run/react";

import { attributes as rusty_things } from "~/routes/blog.polonnaruwa0.mdx";

import { BlogCard } from "./BlogCard";

export const meta: MetaFunction = () => [
  { title: "Blog Posts | Tom Frantz" },
  {
    name: "description",
    content: "All the blog posts, authored by Tom Frantz",
  },
];

interface BlogPostMeta {
  path: string;
  title: string;
  created: string;
  description: string;
  published?: boolean;
}

const POSTS: BlogPostMeta[] = [{ path: "/blog/polonnaruwa0", ...rusty_things }];

const BlogPage = () => {
  const filteredPosts = POSTS.filter((p) => {
    return p.published;
  });

  return (
    <main className="not-prose flex w-full flex-col px-2 py-16 text-black sm:px-8 ">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-12 lg:max-w-5xl">
        <header>
          <title>
            <h2 className="text-3xl font-bold">Blogs and stuff</h2>
          </title>
          <p>
            Sometimes I like to entertain the idea of writing, and I guess this
            is the result of that. Enjoy!
          </p>
        </header>
        {filteredPosts.length == 0 ? (
          <p className={"font-bold"}>
            There&apos;s nothing here yet! I&apos;m sure I&apos;ll write
            something good soon though!
          </p>
        ) : null}
        {filteredPosts.map((p) => (
          <Link to={p.path} key={p.path}>
            <BlogCard
              title={p.title}
              created={p.created}
              description={p.description}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;

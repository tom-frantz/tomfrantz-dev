import { BlogCard } from "~/components/BlogCard";

const BlogPage = () => {
  return (
    <main className=" px-2 py-16 text-black sm:px-8 ">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-12 lg:max-w-5xl">
        <header>
          <h2 className="text-3xl font-bold">Blogs and stuff</h2>
          <p>
            Sometimes I like to entertain the idea of writing, and I guess this
            is the result of that. Enjoy!
          </p>
        </header>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
};

export default BlogPage;

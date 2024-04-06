import { Outlet } from "@remix-run/react";

// The layout for all individual blog.
// The `/blog` page ignores this
const BlogLayout = () => {
  return (
    <div className=" px-2 py-16 text-black sm:px-8 ">
      <div className="prose mx-auto flex w-full max-w-2xl flex-col lg:prose-xl lg:max-w-5xl">
        <Outlet />
      </div>
    </div>
  );
};

export default BlogLayout;

export interface BlogCardProps {}

export const BlogCard = (props: BlogCardProps) => {
  return (
    <article>
      <header className={"mb-1"}>
        <h3 className="text-xl font-semibold">
          How I learnered some tricky things in rust.
        </h3>
        <span className="text-gray-600">Mar 3, 2024</span>
      </header>
      <p>
        This must be where a description of all the best stuff goes. Otherwise,
        there's no point to this section. I guess we'll just have to see what I
        actually write over time, hehe.
      </p>
    </article>
  );
};

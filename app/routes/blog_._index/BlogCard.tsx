import { format } from "date-fns";

export const BlogCard = ({
  title,
  description,
  created,
}: {
  title: string;
  description: string;
  created: string;
}) => {
  return (
    <article>
      <header className={"mb-1"}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-gray-600">{format(created, "do LLL, yyyy")}</span>
      </header>
      <p>{description}</p>
    </article>
  );
};

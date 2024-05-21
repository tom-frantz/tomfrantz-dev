import { Link, MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Projects | Tom Frantz" },
  {
    name: "description",
    content: "All the projects, created by Tom Frantz",
  },
];

export default function ProjectsPage() {
  return (
    <div className=" px-2 py-16 text-black sm:px-8 ">
      <div className="mx-auto flow-root w-full max-w-2xl gap-16 lg:max-w-5xl">
        <h2 className="text-3xl font-bold">Me, Myself, and I</h2>
        <div className="mt-12 grid grid-cols-2 gap-12">
          {[0, 1].map((i) => (
            <article
              key={i}
              className="rounded-2xl border-4 border-lothian-blue p-2"
            >
              <h3 className="text-xl font-semibold">Polonnaruwa</h3>
              <p className="text-sm">A game about the coconut people</p>
              {/*<img src={} />*/}
              <Link to={"/blog/polonnaruwa-0"}>Latest post</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

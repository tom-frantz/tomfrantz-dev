import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Tom Frantz" },
  {
    name: "description",
    content: "Tom Frantz, the experience",
  },
];

const IndexPage = () => {
  return (
    <main className="flex flex-col gap-8 px-2 py-16 text-black sm:px-8">
      <div className="mx-auto w-full max-w-2xl lg:max-w-5xl">
        <h2 className="text-3xl font-bold">Hello, World!</h2>
        <p>
          This is my website. Yes, very cool, you don&apos;t have to tell me
          twice. I am very proud to be at this point again, as a chronic
          restarter, to have made my website for the{" "}
          <span className="line-through">third</span> fourth time recently.
        </p>
      </div>
      <div className="mx-auto w-full max-w-2xl bg-gradient-to-r from-lothian-blue-light via-lothian-blue via-30% to-lothian-blue-dark p-12 text-white shadow-2xl lg:max-w-5xl">
        <section>
          <h2 className="text-xl font-bold">
            Pergamon: A World Atlas for games
          </h2>
          <p className="text-gray-300">My current project</p>
        </section>
      </div>
    </main>
  );
};

export default IndexPage;

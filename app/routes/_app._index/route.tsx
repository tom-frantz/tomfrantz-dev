import { Link } from "@remix-run/react";

const BlogPage = () => {
  return (
    <div className="flex h-full flex-col">
      <nav className="bg-gradient-to-r from-lothian-blue-light via-lothian-blue via-30% to-lothian-blue-dark px-2 pb-8 pt-16 text-white sm:px-8">
        <div className="mx-auto w-full max-w-2xl lg:max-w-5xl">
          <header>
            <h1 className="text-6xl font-black sm:text-8xl">
              Tom Frantz<span className="text-2xl font-normal">.dev</span>
            </h1>
            <span>Turbo Nerdo</span>
          </header>

          <div className="flex flex-row-reverse gap-8 underline">
            <Link to="blog">About Me</Link>
            <Link to="projects">Projects</Link>
            <Link to="blog">Blog</Link>
          </div>
        </div>
      </nav>
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
          <header>
            <h2 className="text-xl font-bold">
              Pergamon: A World Atlas for games
            </h2>
            <p className="text-gray-300">My current project</p>
          </header>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;

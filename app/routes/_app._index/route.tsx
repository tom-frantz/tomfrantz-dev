const BlogPage = () => {
  return (
    <div className="flex justify-between flex-col h-full">
      <div>
        <header className="py-16 px-4 sm:px-0">
          <div className="prose lg:prose-xl mx-auto">
            <h1 className="mb-0">
              Tom Frantz <span className="font-normal text-xl">.dev</span>
            </h1>
            <p className="mt-2">Turbo Nerdo</p>
          </div>
        </header>
        <section
          className="bg-no-repeat bg-cover bg-[url('~/img/starchart.png')] bg-center text-white overflow-hidden"
          style={{
            imageRendering: "pixelated",
          }}
        >
          <article className="prose lg:prose-xl text-white backdrop-brightness-25 shadow-uniform mx-auto py-16 px-4 sm:px-0">
            <b>Hello, World!</b>
            <p>
              This is my website. Yes, very cool, you don&apos;t have to tell me
              twice. I am very proud to be at this point again, as a chronic
              restarter, to have made my website for the third time recently
            </p>
            <p></p>
          </article>
        </section>
        <section className="py-16 px-4 sm:px-0">
          <div className="prose lg:prose-xl mx-auto ">
            <h2>Blog</h2>
            <p>More to come!</p>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-0 bg-stars-bg">
          <div className="prose prose-invert text-white lg:prose-xl mx-auto ">
            <h2>Projects</h2>
            <p>More to come!</p>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-0">
          <div className="prose lg:prose-xl mx-auto ">
            <h2>About me</h2>
            <p>More to come!</p>
          </div>
        </section>
      </div>
      <section className="p-4 bg-stars-bg">
        <div className="prose prose-invert text-white prose-sm ">
          <p>
            I want to take a moment to thank my arms, for always being by my
            side, and my legs, for holding me up this whole time.
          </p>
          <p>
            Also check out this{" "}
            <a href="https://milindi-kodikara.github.io/">very busy bee</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

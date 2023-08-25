export default function Navbar(props: {}) {
    return (
        <div
            className={
                "max-w-[65ch] w-full flex flex-row items-baseline pt-8 space-x-4 lg:w-60 lg:flex-col lg:space-x-0 lg:space-y-4 px-4 lg:py-8 lg:px-12"
            }
        >
            <a href="/" className="sm:text-lg md:text-2xl font-bold">
                Tom Frantz
            </a>
            <a href="/blog">Blog</a>
            <a href="/projects">Projects</a>
        </div>
    );
}

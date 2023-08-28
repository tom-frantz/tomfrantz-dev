import Image from "next/image";
import FlashyLink from "@/app/(components)/flashy_link";

export default function Home() {
    return (
        <main className="container mx-auto p-8 sm:p-12 md:p-16">
            <FlashyLink href={"/"} className={"no-underline"}>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold ">
                    Tom Frantz
                </h1>
            </FlashyLink>
            <div className="flex flex-row font-bold space-x-4 py-4 underline">
                <FlashyLink href={"/blog"}>Blog</FlashyLink>
                <FlashyLink href={"/projects"}>Projects</FlashyLink>
            </div>
        </main>
    );
}

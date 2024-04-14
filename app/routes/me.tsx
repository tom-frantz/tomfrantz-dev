import { MetaFunction } from "@remix-run/react";

import me from "public/me.png";

export const meta: MetaFunction = () => [
  { title: "About Tom Frantz" },
  {
    name: "description",
    content: "All the Tom Frantz, by Tom Frantz",
  },
];

export default function Me() {
  return (
    <main className="flex flex-col gap-8 px-2 py-16 text-black sm:px-8">
      <div className="mx-auto flow-root w-full max-w-2xl gap-16 lg:max-w-5xl">
        <img
          src={me}
          alt={"Tom Frantz"}
          className="float-left mb-8 mr-8 inline aspect-square h-40 shrink-0 object-cover shadow-2xl md:h-60 lg:h-80"
        />
        <h2 className="text-3xl font-bold">Me, Myself, and I</h2>
        <p>
          Hello all, I&apos;m Tom Frantz, and welcome to my little spot on the
          internet. I&apos;m a full stack software engineer by day, hobby game
          maker and tinkerer by night.
        </p>
        <br />
        <p>Fun facts about me:</p>
        <ul className={"ml-4 flow-root list-inside list-disc"}>
          <li>
            I was named after a cat (and for some reason, every Sri Lankan
            I&apos;ve met loves to make a Tom and Jerry joke about my name
            too...)
          </li>
          <li>
            I enjoy making parts of video games in Rust and Bevy, but never
            finishing any of them.
          </li>
          <li>
            I&apos;m currently mastering the chicken katsu don. I&apos;m so
            close I can taste it
          </li>
          <li>
            I always dunk on my girlfriend when it comes to Connect 4
            (we&apos;re very competitive)
          </li>
        </ul>
        <br />

        <p>
          I hope you enjoy your stay in this corner of the world wide web. If
          you think I should surf with you, why not check out my{" "}
          <a
            href={"https://www.tomfrantz.dev"}
            className={"text-cyan-700 hover:underline"}
          >
            website
          </a>
          .
        </p>
      </div>
    </main>
  );
}

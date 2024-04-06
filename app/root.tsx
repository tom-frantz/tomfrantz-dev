import FontStyles from "@fontsource/montserrat/latin.css"; // Defaults to weight 400
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: FontStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/_static/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          className={"relative flex h-screen flex-col items-stretch bg-white"}
        >
          <div className="flex h-full flex-col">
            <nav className="bg-gradient-to-r from-lothian-blue-light via-lothian-blue via-30% to-lothian-blue-dark px-2 pb-8 pt-8 text-white sm:px-8 sm:pt-16">
              <div className="mx-auto w-full max-w-2xl lg:max-w-5xl">
                <Link to="/">
                  <header>
                    <h1 className="text-6xl font-black sm:text-8xl">
                      Tom Frantz
                      <span className="text-2xl font-normal">.dev</span>
                    </h1>
                    <span>Turbo Nerdo</span>
                  </header>
                </Link>

                <div className="flex flex-row-reverse gap-8 underline">
                  <Link to="me">About Me</Link>
                  <Link to="projects">Projects</Link>
                  <Link to="blog">Blog</Link>
                </div>
              </div>
            </nav>
            <Outlet />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

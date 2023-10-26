import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "tomfrantz.dev" }];

export default function Index() {
  return (
    <main
      className={
        "relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center " +
        "bg-no-repeat bg-cover bg-[url('~/img/starchart.png')] bg-center text-white"
      }
      style={{
        imageRendering: "pixelated",
      }}
    >
      <Outlet />
    </main>
  );
}

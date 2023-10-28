import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "tomfrantz.dev" }];

export default function Index() {
  return (
    <main className={"relative h-screen bg-white flex flex-col items-stretch"}>
      <Outlet />
    </main>
  );
}

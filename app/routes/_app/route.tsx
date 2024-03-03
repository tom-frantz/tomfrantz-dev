import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "tomfrantz.dev" }];

export default function Index() {
  return (
    <div className={"relative flex h-screen flex-col items-stretch bg-white"}>
      <Outlet />
    </div>
  );
}

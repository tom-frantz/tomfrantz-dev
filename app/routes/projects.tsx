import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Projects | Tom Frantz" },
  {
    name: "description",
    content: "All the projects, created by Tom Frantz",
  },
];

export default function ProjectsPage() {
  return <p>Coming soon</p>;
}

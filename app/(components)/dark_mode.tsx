"use client";

export const currentDarkMode = (): "dark" | "light" => {
    // TODO Remove this when use client works correctly for static site generation
    if (typeof window === "undefined") return "light";

    return (localStorage.getItem("theme") ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light")) as "dark" | "light";
};

export const toggleDarkMode = () => {
    // Get the existing thing or the user's preferred default
    let current =
        localStorage.getItem("theme") ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");

    if (current === "dark") {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
    } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
    }

    return current === "dark" ? "light" : "dark";
};

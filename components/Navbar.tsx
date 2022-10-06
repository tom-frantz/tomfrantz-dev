import React from "react";
import styled from "styled-components";

interface NavbarProps {}

const H4NoMargin = styled.h5`
    margin: 0;
    font-weight: normal;
`;

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    return (
        <div
            style={{
                height: "36px",
                marginTop: "-36px",
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                marginLeft: "12px",
                justifyContent: "space-between",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
                    marginLeft: "12px",
                }}
            >
                <a href={"/"}>
                    <H4NoMargin>Home</H4NoMargin>
                </a>
                <a href={"/blog"}>
                    <H4NoMargin>Blog</H4NoMargin>
                </a>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "12px",
                    marginRight: "12px",
                }}
            >
                <a href={"https://github.com/tom-frantz"}>
                    <H4NoMargin>Github</H4NoMargin>
                </a>
                <a href={"https://www.linkedin.com/in/thomas-albert-frantz/"}>
                    <H4NoMargin>LinkedIn</H4NoMargin>
                </a>
            </div>
        </div>
    );
};

export default Navbar;

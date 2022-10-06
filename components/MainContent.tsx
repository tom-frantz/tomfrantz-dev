import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

export const CANVAS_SIZE = 84;

interface MainContentProps {
    children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = (props: MainContentProps) => {
    return (
        <Container>
            <Navbar />
            <MainContentContainer>{props.children}</MainContentContainer>
        </Container>
    );
};

const Container = styled.div`
    background-color: #f4e8d2;

    width: calc(100vw - ${CANVAS_SIZE * 2}px);
    min-height: calc(100vh - ${CANVAS_SIZE * 2}px);
    z-index: 1;
`;

const MainContentContainer = styled.div`
    max-width: 920px;

    text-align: justify;
    margin: 0 auto;

    @media (max-width: 600px) {
        width: calc(100vw - ${CANVAS_SIZE * 2}px + ${28 * 2}px);
        margin: 0 -28px;
    }
`;

export default MainContent;

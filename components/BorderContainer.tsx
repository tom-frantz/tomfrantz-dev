import { ReactNode } from "react";
import styled, { css } from "styled-components";
import MainContent from "./MainContent";

export interface BorderContainerProps {
    children: ReactNode;
}

export const CANVAS_SIZE = 84;

enum BorderType {
    TopLeft,
    Top,
    TopRight,
    Left,
    Right,
    BottomLeft,
    Bottom,
    BottomRight,
}
interface InternalStyleProps {
    type: BorderType;
}

const BackgroundDiv = styled.div<InternalStyleProps>`
    z-index: -1000;
    image-rendering: pixelated;
    background-repeat: ${({ type }) => {
        if (type === BorderType.Top || type === BorderType.Bottom) {
            return "repeat-x";
        } else if (type === BorderType.Left || type === BorderType.Right) {
            return "repeat-y";
        } else {
            return "no-repeat";
        }
    }};

    background-image: ${({ type }) => {
        if (type === BorderType.Left || type === BorderType.Right) {
            return 'url("/border_segment_side_high.png")';
        } else if (type === BorderType.Top || type === BorderType.Bottom) {
            return 'url("/border_segment_high.png")';
        } else {
            return 'url("/border_corner_high.png")';
        }
    }};

    transform: ${({ type }) => {
        if (type === BorderType.TopLeft || type === BorderType.Top) {
            // Nothing
        } else if (type === BorderType.TopRight) {
            return "rotate(90deg)";
        } else if (
            type === BorderType.Bottom ||
            type === BorderType.BottomRight
        ) {
            return "rotate(180deg)";
        } else if (type === BorderType.BottomLeft) {
            return "rotate(-90deg)";
        } else if (type === BorderType.Right) {
            return "scaleX(-1)";
        }
    }};

    /* This is for adjusting the side bars, 
       which are particularly tricky due to their transformations */

    min-height: ${({ type }) => {
        if (type === BorderType.Left || type === BorderType.Right) {
            return `calc(100vh - ${CANVAS_SIZE * 2}px)`;
        } else {
            return `${CANVAS_SIZE}px`;
        }
    }};
    min-width: ${({ type }) => {
        if (type === BorderType.Top || type === BorderType.Bottom) {
            return `calc(100vw - ${CANVAS_SIZE * 2}px)`;
        } else {
            return `${CANVAS_SIZE}px`;
        }
    }};
`;

export const BorderContainer = (props: BorderContainerProps) => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `${CANVAS_SIZE}px [main-start] auto [main-end] ${CANVAS_SIZE}px`,
                gridTemplateRows: "auto  [main-start] 1fr [main-end] auto",
            }}
        >
            <BackgroundDiv type={BorderType.TopLeft} />
            <BackgroundDiv type={BorderType.Top} />
            <BackgroundDiv type={BorderType.TopRight} />

            <BackgroundDiv type={BorderType.Left} />
            <MainContent>{props.children}</MainContent>
            <BackgroundDiv type={BorderType.Right} />

            <BackgroundDiv type={BorderType.BottomLeft} />
            <BackgroundDiv type={BorderType.Bottom} />
            <BackgroundDiv type={BorderType.BottomRight} />
        </div>
    );
};

export default BorderContainer;

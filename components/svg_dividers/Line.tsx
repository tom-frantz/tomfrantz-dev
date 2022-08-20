import React from "react";
import { MASK_ID } from "./SvgMask";

export interface LineProps
    extends Omit<React.SVGProps<SVGLineElement>, "x" | "x1" | "x2" | "mask"> {
    start: number;
    stop: number;
    mask?: string | boolean;
}

const Line = (props: LineProps) => {
    const {
        start,
        stop,
        y1,
        y2,
        y,
        stroke,
        strokeLinecap,
        mask,
        ...otherProps
    } = props;

    let maskParam;

    if (mask === true) {
        maskParam = `url(#${MASK_ID})`;
    } else if (mask === false) {
        maskParam = undefined;
    } else {
        maskParam = mask;
    }

    return (
        <line
            x1={start}
            y1={y1 ?? y}
            x2={stop}
            y2={y2 ?? y}
            strokeWidth={1}
            stroke={stroke ?? "#c8d0ab"}
            strokeLinecap={strokeLinecap ?? "round"}
            mask={maskParam}
            {...otherProps}
        />
    );
};

export default Line;

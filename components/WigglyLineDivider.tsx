import Line from "./svg_dividers/Line";
import { MASK_ID, SvgMask } from "./svg_dividers/SvgMask";
import MaskLine from "./svg_dividers/MaskLine";
import { ReactNode } from "react";
import { Segment } from "./svg_dividers/lib/segment";

export interface WigglyLineDividerProps {
    lines: Segment[];
}

const WigglyLineDivider = ({ lines }: WigglyLineDividerProps) => (
    <div style={{ height: "auto" }}>
        <svg
            viewBox={`0 0.5 100 ${lines.length} `}
            xmlns="http://www.w3.org/2000/svg"
            width={"100%"}
            shapeRendering={"crispEdges"}
        >
            <defs>
                <linearGradient id="Gradient2" x1="1" x2="0" y1="0" y2="0">
                    <stop offset="0%" stopColor="#D0DF9A" />
                    <stop offset="14%" stopColor="#EDD8AB" />
                    <stop offset="28%" stopColor="#E4BA9A" />
                    <stop offset="42%" stopColor="#DF8C81" />
                    <stop offset="56%" stopColor="#D66161" />
                    <stop offset="80%" stopColor="#D13D49" />
                    <stop offset="90%" stopColor="#D0343E" />
                    <stop offset="100%" stopColor="#A92837" />
                </linearGradient>
            </defs>
            <SvgMask>
                {lines.map((segment) => {
                    return segment.maskLines();
                })}
            </SvgMask>
            {lines.map((segment) => {
                return segment.backgroundLines({
                    start: "#000",
                    stop: "#FFF",
                });
            })}
            <rect
                x={0}
                y={0.5}
                fill="url(#Gradient2)"
                width="100"
                height="15"
                // fill={"white"}
                mask={`url(#${MASK_ID})`}
            ></rect>
        </svg>
    </div>
);

export default WigglyLineDivider;

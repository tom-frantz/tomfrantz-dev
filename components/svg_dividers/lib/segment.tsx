import { instanceOf } from "prop-types";
import { ReactNode } from "react";
import MaskLine from "../MaskLine";
import Line from "../Line";

export interface SegmentConstructor {
    start?: number;
    stop?: number;
    order: number;

    size?: number;
    angle?: number;

    backgroundColour?: "start" | "end";
}

type BackgroundColour = { start: string; stop: string };
type SegmentBackgroundColour = string | Partial<BackgroundColour>;

export abstract class Segment {
    public start?: number;
    public stop?: number;
    private _backgroundColour?: SegmentBackgroundColour;
    protected order: number;

    constructor(params: SegmentConstructor) {
        const { start, stop, backgroundColour, size, angle, order } = params;

        if (size !== undefined) {
            throw new Error("Unimplemented");
        }

        if (angle !== undefined) {
            throw new Error("Unimplemented");
        }

        this.start = start;
        this.stop = stop;
        this.order = order;
        this._backgroundColour = backgroundColour;
    }

    public static createSegments(
        segments: Partial<SegmentConstructor>[],
        initial: "outer" | "inner"
    ): Segment[] {
        return segments.map((segment, index) => {
            if (
                (index % 2 === 0 && initial == "outer") ||
                (index % 2 === 1 && initial == "inner")
            ) {
                return new InnerSegment({ ...segment, order: index });
            } else {
                return new OuterSegment({ ...segment, order: index });
            }
        });
    }

    public backgroundColour(
        side: "start" | "stop",
        backgroundColours: BackgroundColour
    ): string | undefined {
        if (this._backgroundColour === undefined) {
            return backgroundColours[side];
        }

        if (this._backgroundColour === "start") {
            return backgroundColours.start;
        } else {
            return backgroundColours.stop;
        }
    }

    public abstract maskLines(): ReactNode;
    public backgroundLines(backgroundColours: BackgroundColour): ReactNode {
        return [
            this.start === undefined && this.stop === undefined && (
                <Line
                    key={this.order + 0.2}
                    y={this.order + 1}
                    start={0}
                    stop={100}
                    stroke={this.backgroundColour("start", backgroundColours)}
                />
            ),
            this.start && (
                <Line
                    key={this.order + 0.2}
                    y={this.order + 1}
                    start={0}
                    stop={this.start}
                    stroke={this.backgroundColour("start", backgroundColours)}
                />
            ),
            this.stop && (
                <Line
                    key={this.order + 0.2}
                    y={this.order + 1}
                    start={this.stop}
                    stop={100}
                    stroke={this.backgroundColour("stop", backgroundColours)}
                />
            ),
        ];
    }
}

export class InnerSegment extends Segment {
    public static isInner(segment: Segment): segment is InnerSegment {
        return segment instanceof InnerSegment;
    }

    maskLines(): ReactNode {
        return [
            (this.start || this.stop) && (
                <MaskLine
                    key={this.order}
                    show={true}
                    y={this.order + 1}
                    start={this.start ?? 0}
                    stop={this.stop ?? 100}
                />
            ),
        ];
    }
}

export class OuterSegment extends Segment {
    public static isOuter(segment: Segment): segment is OuterSegment {
        return segment instanceof OuterSegment;
    }

    maskLines(): ReactNode {
        return [
            (this.start || this.stop) && (
                <MaskLine
                    key={this.order}
                    show={true}
                    y={this.order + 1}
                    start={this.start ?? 0}
                    stop={this.stop ?? 100}
                />
            ),
            this.start && (
                <MaskLine
                    key={this.order + 0.1}
                    show={false}
                    y={this.order + 1}
                    start={0}
                    stop={this.start}
                />
            ),
            this.stop && (
                <MaskLine
                    key={this.order + 0.2}
                    show={false}
                    y={this.order + 1}
                    start={this.stop}
                    stop={100}
                />
            ),
        ];
    }
}

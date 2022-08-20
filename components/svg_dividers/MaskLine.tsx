import Line, { LineProps } from "./Line";

export interface MaskLineProps extends Pick<LineProps, "start" | "stop" | "y"> {
    show: boolean;
    y: number;
}

export const MaskLine = (props: MaskLineProps) => {
    const { start, stop, y, show } = props;

    return (
        <Line
            start={start}
            stop={stop}
            y={y}
            stroke={show ? "white" : "black"}
        />
    );
};

export default MaskLine;

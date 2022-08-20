import Line, { LineProps } from "./Line";

export interface DrawLineProps
    extends Pick<LineProps, "start" | "stop" | "y"> {}

export const DrawLine = (props: DrawLineProps) => {
    const { start, stop, y } = props;

    return <Line start={start} stop={stop} y={y} stroke={"red"} />;
};

export default DrawLine;

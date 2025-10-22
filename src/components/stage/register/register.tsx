import type { JSX } from "react";
import type { Byte } from "../../../../../CPU8/dist/interface/interfaces";
import { Rect, Text } from "react-konva";


interface IRegisterUI {
    x: number,
    y: number,
    width: number,
    height: number,
    data: Byte,
    name: string
}

export default function R0(props: IRegisterUI): JSX.Element {
    const { x, y, width, height, data, name } = props;

    return (
        <>
            <Rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill="grey"
                stroke="black"
                strokeWidth={1}
            />

            <Text
                x={x}
                y={y}
                text={data?.toString().replaceAll(',', '')}
                fontSize={16}
                fontFamily="Calibri"
                fill="darkyellow"
                align="center"
            />

            <Text
                x={x}
                y={y - height * .4}
                text={name}
                fontSize={16}
                fontFamily="Calibri"
                fill="red"
                align="center"
            />
        </>

    );
}
import React, { type JSX } from "react";
import { Group, Line, Rect, Text } from "react-konva";
import type { Byte } from "../../../../../CPU8/dist/interface/interfaces";
import { KonvaTheme } from "../../../constants/konva-theme";

interface IRegisterUI {
    x: number,
    y: number,
    width: number,
    height: number,
    data: Byte,
    name: string,
    set: number,
    enable: number
}


export default function Register(props: IRegisterUI): JSX.Element {
    const { x, y, width, height, data, name, set, enable } = props;
    const setEnablePinLength = 20;

    let regColor = 'lightgrey';

    if(set) regColor = "orange";
    if(enable) regColor = "blue";

    return (
        <Group x={x} y={y}>
     

            <Rect
                strokeWidth={KonvaTheme.register.strokeWidth+2}
                stroke={regColor}
                width={width}
                height={height}
                fill="white"
            />
            <Text
                width={width}
                height={height}
                text={name}
                fontSize={22}
                fontFamily="Calibri"
                fill="red"
                align="center"
                offsetY={-2}
            />
            <Text
                width={width}
                height={height}
                text={data?.toString().replaceAll(',', '')}
                fontSize={22}
                fontFamily="Calibri"
                fill="red"
                align="center"
                offsetY={-16}
            />
        </Group>

    );
}
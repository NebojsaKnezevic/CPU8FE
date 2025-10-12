import React, { type JSX } from "react";
import { Rect, Text } from "react-konva";
import type { Byte } from "../../../../../CPU8/dist/interface/interfaces";

interface IRegisterUI {
    x: number,
    y: number,
    width: number,
    height: number,
    data: Byte,
    name: string
}


export default function Register(props: IRegisterUI): JSX.Element {
    const { x, y, width, height, data,name } = props;

    return (
        <>
           
            <Rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill="white"
                shadowBlur={4}
            // draggable
            />
             <Text
                x={x + (width / 2)}
                y={y - 30}
                text={name}
                fontSize={height * 0.4}
                fontFamily="Calibri"
                fill="red"
                // offsetX={20} // Approximate half width
                // offsetY={30}
            />
             <Text
                x={x}
                y={y}
                text={data?.toString().replaceAll(',', '')}
                fontSize={height * 0.4}
                fontFamily="Calibri"
                fill="red"
                // offsetX={60} // Approximate half width
      
            />
        </>

    );
}
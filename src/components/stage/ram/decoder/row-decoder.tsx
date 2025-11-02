import type { JSX } from "react";
import { Line, Rect, Text } from "react-konva";
import { KonvaTheme } from "../../../../constants/konva-theme";
import useRamStore from "../../../../store/computer-store/ram-store";
import type { Bit } from "../../../../../../CPU8/dist/interface/interfaces";;
import useControlUnitStore from "../../../../store/computer-store/control-unit";
import React from "react";



export default function RowDecoder(): JSX.Element {
    // const {
    //     rowDecoder
    // } = useRam();

    // const {
    //     setRam
    // } = useControlUnit();
    const rowDecoder = useRamStore((state) => state.rowDecoder);
    const setRam: Bit = useControlUnitStore((state) => state.setRam);

    const rect = KonvaTheme.ram.decoder.row;

    const linesCount = 16;
    const strokeWidth = KonvaTheme.bus.strokeWidth;


    const spacing = rect.height / (linesCount - 1);
    const setColor = KonvaTheme.stage.setColor;
    const enableColor = KonvaTheme.stage.enableColor;

    const startX = rect.x + rect.width - 20;
    const endX = (rect.x + rect.width + rect.height) + 90;

    const startY = rect.y;
    const endY = rect.y + rect.height;

    let strokeColor = "grey";
    if (setRam) strokeColor = setColor
    // if (enableRam) strokeColor = "blue"

    const lines = rowDecoder.map((val, i) => {
        let y = startY + i * spacing;
        let sy = y + spacing - 6;
        // if (i === rowDecoder.length - 1) y -= strokeWidth * 2;
        return (
             <React.Fragment key={i}> 
                <Line
                    points={[startX, y, endX, y]}
                    stroke={val === 1 ? KonvaTheme.bus.onColor : KonvaTheme.bus.ofColor}
                    strokeWidth={val === 0 ? strokeWidth : strokeWidth * 2}
                    lineCap="round"
                />
                <Line
                    points={[startX, sy, endX, sy]}
                    stroke={strokeColor}
                    strokeWidth={!setRam ? strokeWidth : strokeWidth * 2}
                    lineCap="round"
                />
            </React.Fragment>
        );
    });

    return (
        <>
            <Rect
                x={rect.x}
                y={rect.y}
                width={rect.width}
                height={rect.height}
                fill="white"
                stroke="black"
                strokeWidth={2}
                offsetX={20}
            />
            {lines}
            <Text
                x={KonvaTheme.ram.decoder.row.x}
                y={
                    KonvaTheme.ram.decoder.row.y +
                    KonvaTheme.ram.decoder.row.height / 2
                }
                text="DECODER-4x16"
                fontSize={55}
                fontFamily="Calibri"
                fill="black"
                fontStyle="bold"
                offsetX={160}
                offsetY={20}
                rotation={270}

            />
        </>
    );
}
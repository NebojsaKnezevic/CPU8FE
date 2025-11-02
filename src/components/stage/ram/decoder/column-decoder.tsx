import type { JSX } from "react";
import useRam from "../../../../hooks/use-ram";
import { Line, Rect, Text } from "react-konva";
import { KonvaTheme } from "../../../../constants/konva-theme";
import useControlUnit from "../../../../hooks/use-control-unit";
import useRamStore from "../../../../store/computer-store/ram-store";
import useControlUnitStore from "../../../../store/computer-store/control-unit";
import type { Bit } from "../../../../../../CPU8/dist/interface/interfaces";
import React from "react";


export default function ColumnDecoder(): JSX.Element {
    // const {
    //     columnDecoder,
    // } = useRam();

    // const {
    //     enableRam
    // } = useControlUnit();
    const columnDecoder = useRamStore((state) => state.columnDecoder);
    const enableRam: Bit = useControlUnitStore(state => state.enableRam);

    const rect = KonvaTheme.ram.decoder.column;


    const linesCount = 16;
    const strokeWidth = KonvaTheme.bus.strokeWidth;

    // rect.width = rect.width - strokeWidth ;

    const spacing = rect.width / (linesCount - 1);
    const setColor = KonvaTheme.stage.setColor;
    const enableColor = KonvaTheme.stage.enableColor;

    const startY = (rect.y + rect.height) - 20;
    const endY = (startY + rect.width - strokeWidth) + 110;

    let strokeColor = "grey";
    // if (setRam) strokeColor = "orange"
    if (enableRam) strokeColor = enableColor

    const lines = columnDecoder.map((val, i) => {
        let x = rect.x + i * spacing;
        let ex = x + spacing - 6;
        // if (i === columnDecoder.length - 1) x -= strokeWidth * 2;
        return (
            <React.Fragment key={i}>
                <Line
                    points={[x, startY, x, endY]}
                    stroke={val === 1 ? KonvaTheme.bus.onColor : KonvaTheme.bus.ofColor}
                    strokeWidth={val === 0 ? strokeWidth : strokeWidth * 2}
                    lineCap="round"

                />

                <Line
                    points={[ex, startY, ex, endY]}
                    stroke={strokeColor}
                    strokeWidth={!enableRam ? strokeWidth : strokeWidth * 2}
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
                offsetY={20}
            // offsetX={-(strokeWidth / 2)}

            />
            {lines}
            <Text
                x={rect.x + rect.width / 2}
                y={rect.y - rect.height / 2 + 4}
                text="DECODER-4x16"
                fontSize={55}
                fontFamily="Calibri"
                fontStyle="bold"
                fill="black"
                offsetX={160}
            />
        </>
    );
}
import type { JSX, memo } from "react";
import { Rect, Text } from "react-konva";
import type { Bit, Byte } from "../../../../../../CPU8/dist/interface/interfaces";
import useControlUnit from "../../../../hooks/use-control-unit";
import React from "react";
import { KonvaTheme } from "../../../../constants/konva-theme";

interface IMemoryCell {
    x: number;
    y: number;
    h: Bit;
    v: Bit;
    data: string;
    address: number;
    setRam: Bit,
    enableRam: Bit
}

function MemoryCell(props: IMemoryCell): JSX.Element {
    const { x, y, v, h, data, address, setRam, enableRam } = props;
    // const { setRam, enableRam } = useControlUnit();

     const onColor = KonvaTheme.bus.onColor;
    const ofColor = KonvaTheme.bus.ofColor;
    const setColor = KonvaTheme.stage.setColor;
    const enableColor = KonvaTheme.stage.enableColor;

    let strokeColor = "grey";
    if (v && h && setRam) strokeColor = setColor;
    if (v && h && enableRam) strokeColor = enableColor;
    // console.log(v , h , setRam, v , h , enableRam)
    let fillColor = "white";
    if (v && h) fillColor = "red";

    const memCell = KonvaTheme.ram.memoryCell;
    // console.log('MEM CELL RERENDER')

    return (
        <>

            <Rect
                x={x}
                y={y}
                width={memCell.width}
                height={memCell.height}
                fill={v + h > 1 ? 'lightgreen' : 'grey'}
                stroke={strokeColor}
                strokeWidth={memCell.strokeWidth}

            />

             <Text
                width={memCell.width}
                height={memCell.height}
                x={x + 60}
                y={y}
                text={parseInt(data.replace(/,/g, ""), 2).toString()}
                align="center"
                verticalAlign="middle"
                fontSize={45}
                fontFamily="Calibri"
                fill={fillColor}
                offsetX={60}
                fontStyle="bold"

            />
            <Text
                width={memCell.width}
                height={memCell.height}
                x={x + 60}
                y={y}
                text={data.replace(/,/g, "")}
                align="center"
                verticalAlign="bottom"
                fontSize={18}
                fontFamily="Calibri"
                fill={fillColor}
                offsetX={60}
                fontStyle="bold"

            />
            
            <Text
                x={x + 60}
                y={y}
                text={address.toString()}
                fontSize={22}
                fontFamily="Calibri"
                fill={fillColor}
                offsetX={60}
                fontStyle="bold"
            />
        </>
    );
}

export default React.memo(MemoryCell, (prev, next) => {

    return (
        prev.x === next.x &&
        prev.y === next.y &&
        prev.v === next.v &&
        prev.h === next.h &&
        prev.data === next.data &&
        prev.address === next.address &&
        prev.setRam === next.setRam &&
        prev.enableRam === next.enableRam
    );
});
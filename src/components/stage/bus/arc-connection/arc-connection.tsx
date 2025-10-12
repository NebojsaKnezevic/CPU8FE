import type { JSX } from "react";
import useRegisters from "../../../../hooks/use-registers";
import { KonvaTheme } from "../../../../constants/konva-theme";
import { Arc } from "react-konva";


interface IArcProp {
    reverse: boolean;
    rotation: number;
    x: number,
    y: number,
}

function angle() {
    let x = 0;
    return () => KonvaTheme.bus.gap * x++;
    // return () => 0 + (9.9 * x++) + (KonvaTheme.bus.strokeWidth * 1);
}

export default function ArcConnection(props: IArcProp): JSX.Element[] {
    const { reverse, rotation, x, y } = props;
    const { systemBus } = useRegisters();

    const bus = [...systemBus];
    if (reverse) bus.reverse();

    const incAnglex = angle();
    const incAngley = angle();

    return bus.map((bit, i) => (
        <Arc
            clockwise={false}
            rotation={rotation}
            key={i}
            x={x}
            y={y}
            innerRadius={incAnglex() + KonvaTheme.bus.strokeWidth}
            outerRadius={incAngley() + KonvaTheme.bus.strokeWidth}
            angle={90}
            fill="yellow"
            stroke={bit === 1 ? KonvaTheme.bus.onColor : KonvaTheme.bus.ofColor}
            strokeWidth={KonvaTheme.bus.strokeWidth}
        />
    ));
}

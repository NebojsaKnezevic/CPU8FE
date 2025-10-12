import type { JSX } from "react";
import { Circle, Group, Layer } from "react-konva";
import type { IElementInfo } from "../../interfaces/parent-dimensions";
import SystemBus from "./bus/bus";
import Register from "./register/register-test";
import useRegisters from "../../hooks/use-registers";

interface ITopLayer {
    parentDimensions: IElementInfo

}

export default function TopLayer(props: ITopLayer): JSX.Element {
    const { parentDimensions } = props;
      const {
        r0, setR0, r0s, setR0s, r0e, setR0e,
        r1, setR1, r1s, setR1s, r1e, setR1e,
        r2, setR2, r2s, setR2s, r2e, setR2e,
        r3, setR3, r3s, setR3s, r3e, setR3e,
        systemBus, setSystemBus
    } = useRegisters();

    return (
        <Layer>
           <SystemBus parentDimension={parentDimensions}/>
             <Group x={parentDimensions.width * 0.75} y={120}>
                    {[r0, r1, r2, r3].map((reg, i) => (
                        <Register
                            key={i}
                            x={i * (parentDimensions.width * 0.035 + 20)} // width + padding
                            y={0}
                            data={reg}
                            width={parentDimensions.width * 0.035}
                            height={parentDimensions.height * 0.035}
                            name={`R${i}`}
                        />
                    ))}
                </Group>
        </Layer>
    );
}
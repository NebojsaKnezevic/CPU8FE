import { Stage, Layer, Rect, Group } from "react-konva";
import { useEffect, useState } from "react";
import SystemBus from "./bus/bus";
import Register from "./register/register";
import TopLayer from "./top-layer";
import type { IElementInfo } from "../../interfaces/parent-dimensions";
import { KonvaTheme } from "../../constants/konva-theme";


function incrementer(val: number) {
    let x = 0;
    return () => {
        x++;
        return val * x;
    }
}

export default function ResponsiveStage() {
    const inc = incrementer(0.05);
    // const {
    //     r0, setR0, r0s, setR0s, r0e, setR0e,
    //     r1, setR1, r1s, setR1s, r1e, setR1e,
    //     r2, setR2, r2s, setR2s, r2e, setR2e,
    //     r3, setR3, r3s, setR3s, r3e, setR3e,
    //     systemBus, setSystemBus
    // } = useRegisters();

    const ASPECT_RATIO = 16 / 9;

    const [dimensions, setDimensions] = useState<IElementInfo>({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientWidth / ASPECT_RATIO,
    });

    useEffect(() => {
        const handleResize = () => {
            const width = document.documentElement.clientWidth;
            setDimensions({
                width,
                height: width / ASPECT_RATIO,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <Stage draggable  width={KonvaTheme.stage.width} height={KonvaTheme.stage.height} scaleX={0.38} scaleY={0.38}>
            
            <TopLayer />
        </Stage>
    );
}

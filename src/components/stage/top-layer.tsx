import type { JSX } from "react";
import { Circle, Group, Layer } from "react-konva";
import type { IElementInfo } from "../../interfaces/parent-dimensions";
import SystemBus from "./bus/bus";
import Register from "./register/register-test";
import useRegisters from "../../hooks/use-registers";
import { KonvaTheme } from "../../constants/konva-theme";



export default function TopLayer(): JSX.Element {
    const {
        tmp, setTmp, tmps, setTmps, tmpe, setTmpe,

        r0, setR0, r0s, setR0s, r0e, setR0e,
        r1, setR1, r1s, setR1s, r1e, setR1e,
        r2, setR2, r2s, setR2s, r2e, setR2e,
        r3, setR3, r3s, setR3s, r3e, setR3e,

        marl, setMarl, marls, setMarls, marle, setMarle,
        acc, setAcc, accs, setAccs, acce, setAcce,

        ir, setIr, irs, setIrs, ire, setIre,
        iar, setIar, iars, setIars, iare, setIare,

        systemBus, setSystemBus
    } = useRegisters();

    return (
        <Layer>
            <SystemBus />

            <Register
                x={KonvaTheme.register.tmp.x}
                y={KonvaTheme.register.tmp.y}
                data={tmp}
                width={KonvaTheme.register.width}
                height={KonvaTheme.register.height}
                name={KonvaTheme.register.tmp.name}
                set={tmps}
                enable={tmpe}
            />


            <Register
                x={KonvaTheme.register.R0.x}
                y={KonvaTheme.register.R0.y}
                data={r0}
                width={KonvaTheme.register.width}
                height={KonvaTheme.register.height}
                name={KonvaTheme.register.R0.name}
                set={r0s}
                enable={r0e}
            />

            <Register
                x={KonvaTheme.register.R1.x}
                y={KonvaTheme.register.R1.y}
                data={r1}
                width={KonvaTheme.register.width}
                height={KonvaTheme.register.height}
                name={KonvaTheme.register.R1.name}
                set={r1s}
                enable={r1e}
            />

            <Register
                x={KonvaTheme.register.R2.x}
                y={KonvaTheme.register.R2.y}
                data={r2}
                width={KonvaTheme.register.width}
                height={KonvaTheme.register.height}
                name={KonvaTheme.register.R2.name}
                set={r2s}
                enable={r2e}
            />

            <Register
                x={KonvaTheme.register.R3.x}
                y={KonvaTheme.register.R3.y}
                data={r3}
                width={KonvaTheme.register.width}
                height={KonvaTheme.register.height}
                name={KonvaTheme.register.R3.name}
                set={r3s}
                enable={r3e}
            />


            <Register
                x={KonvaTheme.register.iar.x}
                y={KonvaTheme.register.iar.y}
                data={iar}
                width={KonvaTheme.register.width}
                height={KonvaTheme.register.height}
                name={KonvaTheme.register.iar.name}
                set={iars}
                enable={iare}
            />

            <Register
                x={KonvaTheme.register.ir.x}
                y={KonvaTheme.register.ir.y}
                data={ir}
                width={KonvaTheme.register.width}
                height={KonvaTheme.register.height}
                name={KonvaTheme.register.ir.name}
                set={irs}
                enable={ire}
            />

            <Register
                x={KonvaTheme.register.mar.x}
                y={KonvaTheme.register.mar.y}
                data={marl}
                width={KonvaTheme.register.width}
                height={KonvaTheme.register.height}
                name={KonvaTheme.register.mar.name}
                set={marls}
                enable={marle} // No Enable flag!!!
            />

            
            <Register
                x={KonvaTheme.register.acc.x}
                y={KonvaTheme.register.acc.y}
                data={acc}
                width={KonvaTheme.register.width}
                height={KonvaTheme.register.height}
                name={KonvaTheme.register.acc.name}
                set={accs}
                enable={acce} // No Enable flag!!!
            />
        </Layer>
    );
}
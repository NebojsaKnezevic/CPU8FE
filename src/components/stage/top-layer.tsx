import { useEffect, type JSX } from "react";
import { Circle, Group, Layer, Line, Rect } from "react-konva";
import type { IElementInfo } from "../../interfaces/parent-dimensions";
import SystemBus from "./bus/bus";
import Register from "./register/register-test";
import { useACC, useIAR, useIR, useMAR, useR0, useR1, useR2, useR3, useTemporarly, useTMP } from "../../hooks/use-registers";

import { KonvaTheme } from "../../constants/konva-theme";
import useRam from "../../hooks/use-ram";
import Ram from "./ram/ram";
import Alu from "./alu/alu";
import ControlUnit from "./control-unit/control-unit";
import useComputerStore from "../../store/computer-store/computer-store";
import type { Bit, Byte } from "../../../../CPU8/dist/interface/interfaces";
import computer from "cpu8-simulator";
import Refresh from "../../hooks/refresh-state";


export default function TopLayer(): JSX.Element {
    // const { r0, setR0, r0s, setR0s, r0e, setR0e } = useR0();
    // const { r1, setR1, r1s, setR1s, r1e, setR1e } = useR1();
    // const { r2, setR2, r2s, setR2s, r2e, setR2e } = useR2();
    // const { r3, setR3, r3s, setR3s, r3e, setR3e } = useR3();
    // const { tmp, setTmp, tmps, setTmps, tmpe, setTmpe } = useTMP();
    // const { marl, setMarl, marls, setMarls, marle, setMarle } = useMAR();
    // const { acc, setAcc, accs, setAccs, acce, setAcce } = useACC();
    // const { ir, setIr, irs, setIrs, ire, setIre } = useIR();
    // const { iar, setIar, iars, setIars, iare, setIare } = useIAR();
    // const { systemBus, setSystemBus, setSignal, enableSignal, setSetSignal, setEnableSignal } = useTemporarly();
   const [refreshState] = Refresh();

// R0
const r0: Byte = useComputerStore(state => state.r0);
const setR0 = useComputerStore(state => state.setR0);
const r0s: Bit = useComputerStore(state => state.r0Set);
const setR0s = useComputerStore(state => state.setR0s);
const r0e: Bit = useComputerStore(state => state.r0Enable);
const setR0e = useComputerStore(state => state.setR0e);

// R1
const r1: Byte = useComputerStore(state => state.r1);
const setR1 = useComputerStore(state => state.setR1);
const r1s: Bit = useComputerStore(state => state.r1Set);
const setR1s = useComputerStore(state => state.setR1s);
const r1e: Bit = useComputerStore(state => state.r1Enable);
const setR1e = useComputerStore(state => state.setR1e);

// R2
const r2: Byte = useComputerStore(state => state.r2);
const setR2 = useComputerStore(state => state.setR2);
const r2s: Bit = useComputerStore(state => state.r2Set);
const setR2s = useComputerStore(state => state.setR2s);
const r2e: Bit = useComputerStore(state => state.r2Enable);
const setR2e = useComputerStore(state => state.setR2e);

// R3
const r3: Byte = useComputerStore(state => state.r3);
const setR3 = useComputerStore(state => state.setR3);
const r3s: Bit = useComputerStore(state => state.r3Set);
const setR3s = useComputerStore(state => state.setR3s);
const r3e: Bit = useComputerStore(state => state.r3Enable);
const setR3e = useComputerStore(state => state.setR3e);

// TMP
const tmp: Byte = useComputerStore(state => state.tmp);
const setTmp = useComputerStore(state => state.setTmp);
const tmps: Bit = useComputerStore(state => state.tmpSet);
const setTmps = useComputerStore(state => state.setTmps);
const tmpe: Bit = useComputerStore(state => state.tmpEnable);
const setTmpe = useComputerStore(state => state.setTmpe);

// MARL
const marl: Byte = useComputerStore(state => state.marl);
const setMarl = useComputerStore(state => state.setMarl);
const marls: Bit = useComputerStore(state => state.marlSet);
const setMarls = useComputerStore(state => state.setMarls);
const marle: Bit = useComputerStore(state => state.marlEnable);
const setMarle = useComputerStore(state => state.setMarle);

// ACC
const acc: Byte = useComputerStore(state => state.acc);
const setAcc = useComputerStore(state => state.setAcc);
const accs: Bit = useComputerStore(state => state.accSet);
const setAccs = useComputerStore(state => state.setAccs);
const acce: Bit = useComputerStore(state => state.accEnable);
const setAcce = useComputerStore(state => state.setAcce);

// IR
const ir: Byte = useComputerStore(state => state.ir);
const setIr = useComputerStore(state => state.setIr);
const irs: Bit = useComputerStore(state => state.irSet);
const setIrs = useComputerStore(state => state.setIrs);
const ire: Bit = useComputerStore(state => state.irEnable);
const setIre = useComputerStore(state => state.setIre);

// IAR
const iar: Byte = useComputerStore(state => state.iar);
const setIar = useComputerStore(state => state.setIar);
const iars: Bit = useComputerStore(state => state.iarSet);
const setIars = useComputerStore(state => state.setIars);
const iare: Bit = useComputerStore(state => state.iarEnable);
const setIare = useComputerStore(state => state.setIare);

// System Bus
const systemBus: Byte = useComputerStore(state => state.systemBuss);
const setSystemBus = useComputerStore(state => state.setBussData);

// Signals
const setSignal: Bit = useComputerStore(state => state.setSignal);
const enableSignal: Bit = useComputerStore(state => state.enableSignal);
const setSetSignal = useComputerStore(state => state.setSetSignal);
const setEnableSignal = useComputerStore(state => state.setEnableSignal);


useEffect(()=>{
   
    computer.insertProgramIntoRAM(5,
         computer.assembler(
            "DATA R0, 55;"
            +"DATA R1, 117;"
            +"ADD R1,R0;"
            +"ST R1,R0;"
        )
    )
    

    refreshState();
},[]);

    // console.log("top level")
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
                enable={0}
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

            <Ram />

            <Alu />

            <ControlUnit />

        </Layer>
    );
}
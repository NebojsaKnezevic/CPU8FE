import React, { useEffect, useRef, useState, type JSX } from "react";
import type { IRegister } from "../../../CPU8/dist/CPU8/memory/register";
import type { IRamCell } from "../../../CPU8/dist/CPU8/memory/ram-cell";
import computer from "cpu8-simulator";
import useComputerStore from "../store/computer-store/computer-store";
import type { Byte } from "../../../CPU8/dist/interface/interfaces";
import Refresh from "../hooks/refresh-state";

interface TCellProps {
    x: number;
    data: any;
    y: number;
}

function TCell({ x, data, y }: TCellProps) {
    const [cellColor, setCellColor] = useState<string>("green");

    function arraysEqual(a: any[], b: any[]) {
        if (a.length !== b.length) return false;
        return a.every((val, idx) => val === b[idx]);
    }
    const isSelected: boolean = x === 1 && y === 1;

    return (
        <td
            key={y}
            onMouseOver={() => setCellColor("yellow")}
            onMouseLeave={() => setCellColor("green")}
            style={{
                color: isSelected ? "red" : cellColor,
                // border: isSelected ? '2px solid white' : '',
                borderRadius: 6
            }}
        >
            {data}
        </td>
    );
}

function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback);


    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);


    useEffect(() => {
        if (delay !== null) {
            const id = setInterval(() => savedCallback.current(), delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default function TestingGround(): JSX.Element {

    // const [registers, setRegisters] = useState<IRegister[]>([]);
  
    // const [ir, setIr] = useState<IRegister>();
    // const [iar, setIar] = useState<IRegister>();
    // const [acc, setAcc] = useState<IRegister>();
    // const [mar, setMar] = useState<IRegister>();
    const [ramGrid, setRamGrid] = useState<IRamCell[][]>([]);
    const [ramColumns, setRamColumns] = useState<any[]>([]);
    const [ramRows, setRamRows] = useState<any[]>([]);
    // const [alu, setAlu] = useState<IAlu>();
    // alu?.getOutput

    const [refreshState] = Refresh();
    // const refreshState = () => {

    //     setSystemBus(computer.bus.getOutput())

    //     setMarl(computer.ram.marl.getData());
    //     setMarls(computer.controlUnit.controlLogicCore.mar_andGateS.getOutput());
    //     // setTmpe(computer.controlUnit.controlLogicCore.tmp_andGateE.getOutput());

    //     setAcc(computer.acc.getData());
    //     setAccs(computer.controlUnit.controlLogicCore.acc_andGateS.getOutput());
    //     setAcce(computer.controlUnit.controlLogicCore.acc_andGateE.getOutput());

    //     setTmp(computer.tmp.getData());
    //     setTmps(computer.controlUnit.controlLogicCore.tmp_andGateS.getOutput());
    //     setTmpe(computer.controlUnit.controlLogicCore.tmp_andGateE.getOutput());

    //     setR0(computer.registers[0].getData());
    //     setR0s(computer.controlUnit.controlLogicCore.regB_set_r0_andM.getOutput())
    //     setR0e(
    //         computer.controlUnit.controlLogicCore.regA_enable_r0_andM.getOutput()
    //         ||
    //         computer.controlUnit.controlLogicCore.regB_enable_r0_andM.getOutput()
    //     )
    //     setR1(computer.registers[1].getData());
    //     setR1s(computer.controlUnit.controlLogicCore.regB_set_r1_andM.getOutput())
    //     setR1e(
    //         computer.controlUnit.controlLogicCore.regA_enable_r1_andM.getOutput()
    //         ||
    //         computer.controlUnit.controlLogicCore.regB_enable_r1_andM.getOutput()
    //     )
    //     setR2(computer.registers[2].getData());
    //     setR2s(computer.controlUnit.controlLogicCore.regB_set_r2_andM.getOutput())
    //     setR2e(
    //         computer.controlUnit.controlLogicCore.regA_enable_r2_andM.getOutput()
    //         ||
    //         computer.controlUnit.controlLogicCore.regB_enable_r2_andM.getOutput()
    //     )
    //     setR3(computer.registers[3].getData());
    //     setR3s(computer.controlUnit.controlLogicCore.regB_set_r3_andM.getOutput())
    //     setR3e(
    //         computer.controlUnit.controlLogicCore.regA_enable_r3_andM.getOutput()
    //         ||
    //         computer.controlUnit.controlLogicCore.regB_enable_r3_andM.getOutput()
    //     )       // niz objekata registara


    //     setIar(computer.iar.getData());
    //     setIars(computer.controlUnit.controlLogicCore.iar_OrmS.getOutput());
    //     setIare(computer.controlUnit.controlLogicCore.iar_OrmE.getOutput());

    //     setIr(computer.ir.getData());
    //     setIre(computer.controlUnit.controlLogicCore.ir_OrmGate.getOutput());
    //     setIrs(computer.controlUnit.controlLogicCore.ir_andGateS.getOutput());

    //     // setIr(computer.ir);                          // objekat IR
    //     // setIar(computer.iar);                        // objekat IAR
    //     // setAcc(computer.acc);                        // objekat ACC
    //     // setMar(computer.ram.marl);                    // objekat MAR
    //     setRamGrid(computer.ram.dataGrid.map(row => [...row])); // niz nizova objekata
    //     setRamColumns([...computer.ram.columnDecoder.getOutput()]); // niz words
    //     setRamRows([...computer.ram.rowDecoder.getOutput()]);
    // };

    const [run, setRun] = useState(false);
    const [delay, setDelay] = useState<number>(1);

    useInterval(
        () => {
            if (run) {
                handleTick();
                
            }
        },
        run ? delay : null // ako run=false → nema intervala
    );

    useInterval(
        () => {
            if (run) {
                 handleClick(10);
                
            }
        },
        run ? delay : null // ako run=false → nema intervala
    );

    useEffect(() => {
        //subtract
        // computer.insertProgramIntoRAM(221,
        //     computer.assembler(
        //         "ST R2, R3;"
        //         + "NOT R0,R0;"
        //         + "DATA R2, 1;"
        //         + "ADD R2, R0;"
        //         + "ADD R1, R0;"
        //         + "NOT R0, R0;"
        //         + "ADD R2, R0;"
        //         + "DATA R2, 2;"
        //         + "LD R2, R3;"
        //         + "JMPR --, R3;"
        //     )
        // );


        // //mul R1 234
        // computer.insertProgramIntoRAM(233,
        //     computer.assembler(
        //         "ST R2, R3;"
        //         + "DATA R2, 0;" //234, 235 
        //         + "SHR R1, R1;" //236 Check if R1 is uneven
        //         + "JC, 240;" //237, 238 If carry, that means its uneven, then jump to 240
        //         + "JMP, 243;" //239, 240
        //         + "CLF;" //241
        //         + "ADD R0, R2;" //242
        //         + "SHL R0, R0;" //243
        //         + "AND R1,R1;" //244
        //         + "JZ, 248;" //245, 246
        //         + "JMP, 236;" //247, 248
        //         + "XOR R2, R0;" //249 R0 = A XOR B
        //         + "XOR R0, R2;" //250 R1 = B XOR (A XOR B) = A
        //         + "XOR R2, R0;" //251 R0 = (A XOR B) XOR A = B
        //         + "DATA R2, 2;" //252, 253
        //         + "LD R2, R3;" //254, 255
        //         + "JMPR --,R3;" //256
        //     )
        // );


        // computer.insertProgramIntoRAM(0,
        //     computer.assembler(
        //         "JMP, 0;"
        //     )
        // );


        // computer.insertProgramIntoRAM(10,
        //     computer.assembler(
        //         "DATA R0, 27;" //10, 11
        //         + "DATA R1, 7;" //12, 13
        //         + "DATA R2, 2;" //14, 15
        //         + "DATA R3, 20;" //16, 17
        //         + "JMP, 221;" //18, 19
        //         + "DATA R2, 2;" //20, 21
        //         + "DATA R3, 26;" //22, 23
        //         + "JMP, 233;" //24, 25
        //         + "JMP, 0;"
        //         // + "CMP R1, R0;"
        //         // + "JA, 210;"
        //     )
        // );
        refreshState();
    }, []);

    const handleTick = () => {
       

        computer.tick(2);
        refreshState();
        
    };

    const audioRef = useRef(new Audio("/ticktock.mp3"));


    function handleClick(seconds: number) {
        const audio = audioRef.current;
        audio.currentTime = seconds;
        audio.play();
        // setTimeout(() => {
        //     audio.pause();
        //     audio.currentTime = 10;
        // }, seconds * delay);
    }

    // function playBeep() {
    //     const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    //     const oscillator = audioCtx.createOscillator();
    //     oscillator.type = "square";
    //     oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // viša frekvencija (brži/viši ton)
    //     oscillator.connect(audioCtx.destination);
    //     oscillator.start();
    //     oscillator.stop(audioCtx.currentTime + 0.05); // samo 50ms
    // }

    return (
        <>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>R0</th>
                            <th>R1</th>
                            <th>R2</th>
                            <th>R3</th>
                            <th>IR</th>
                            <th>IAR</th>
                            <th>ACC</th>
                            <th>MAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>{r0}</td>
                            <td>{r1}</td>
                            <td>{r2}</td>
                            <td>{r3}</td>
                            <td>{ir}</td>
                            <td>{iar}</td>
                            <td>{acc}</td>
                            <td>{marl}</td> */}
                        </tr>
                    </tbody>
                </table>
            </section>

            <p className="read-the-docs">
                <button onClick={handleTick}>Tick</button>
            </p>

            <button onClick={() => setRun((r) => !r)}>
                {run ? "Stop" : "Start"}
            </button>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {ramColumns.map((x, idx) => (
                                <th key={idx}>{x.toString()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {ramGrid.map((row, i) => (
                            <tr key={i}>
                                <th>{ramRows[i].toString()}</th>
                                {row.map((cell, j) => (
                                    <TCell key={j} x={ramColumns[j]} data={cell.getData()} y={ramRows[i]} />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
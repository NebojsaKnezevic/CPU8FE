import React, { useEffect, type JSX } from "react";
import { Layer, Rect, Line, Group } from "react-konva";
import Register from "../register/register-test";
import type { Bit, Byte } from "../../../../../CPU8/dist/interface/interfaces";
import computer from "cpu8-simulator";
import useComputerStore from "../../../store/computer-store/computer-store";
import useRegisters from "../../../hooks/use-registers";
import SystemBus from "../bus/bus";

export default function ControlUnit(): JSX.Element {
    const {
        r0, setR0, r0s, setR0s, r0e, setR0e,
        r1, setR1, r1s, setR1s, r1e, setR1e,
        r2, setR2, r2s, setR2s, r2e, setR2e,
        r3, setR3, r3s, setR3s, r3e, setR3e,
        systemBus, setSystemBus
    } = useRegisters();

    const refreshState = () => {
        setSystemBus(computer.bus.getOutput())
        setR0(computer.registers[0].getData());
        setR0s(computer.controlUnit.controlLogicCore.regB_set_r0_andM.getOutput())
        setR0e(
            computer.controlUnit.controlLogicCore.regA_enable_r0_andM.getOutput()
            ||
            computer.controlUnit.controlLogicCore.regB_enable_r0_andM.getOutput()
        )
        setR1(computer.registers[1].getData());
        setR1s(computer.controlUnit.controlLogicCore.regB_set_r1_andM.getOutput())
        setR1e(
            computer.controlUnit.controlLogicCore.regA_enable_r1_andM.getOutput()
            ||
            computer.controlUnit.controlLogicCore.regB_enable_r1_andM.getOutput()
        )
        setR2(computer.registers[2].getData());
        setR2s(computer.controlUnit.controlLogicCore.regB_set_r2_andM.getOutput())
        setR2e(
            computer.controlUnit.controlLogicCore.regA_enable_r2_andM.getOutput()
            ||
            computer.controlUnit.controlLogicCore.regB_enable_r2_andM.getOutput()
        )
        setR3(computer.registers[3].getData());
        setR3s(computer.controlUnit.controlLogicCore.regB_set_r3_andM.getOutput())
        setR3e(
            computer.controlUnit.controlLogicCore.regA_enable_r3_andM.getOutput()
            ||
            computer.controlUnit.controlLogicCore.regB_enable_r3_andM.getOutput()
        )
        // setRegisters([...computer.registers]);       // niz objekata registara
        // setIr(computer.ir);                          // objekat IR
        // setIar(computer.iar);                        // objekat IAR
        // setAcc(computer.acc);                        // objekat ACC
        // setMar(computer.ram.mar);                    // objekat MAR
        // setRamGrid(computer.ram.dataGrid.map(row => [...row])); // niz nizova objekata
        // setRamColumns([...computer.ram.columnDecoder.getOutput()]); // niz words
        // setRamRows([...computer.ram.rowDecoder.getOutput()]);
    };

    useEffect(() => {
        //subtract
        computer.insertProgramIntoRAM(221,
            computer.assembler(
                "ST R2, R3;"
                + "NOT R0,R0;"
                + "DATA R2, 1;"
                + "ADD R2, R0;"
                + "ADD R1, R0;"
                + "NOT R0, R0;"
                + "ADD R2, R0;"
                + "DATA R2, 2;"
                + "LD R2, R3;"
                + "JMPR --, R3;"
            )
        );


        //mul R1 234
        computer.insertProgramIntoRAM(233,
            computer.assembler(
                "ST R2, R3;"
                + "DATA R2, 0;" //234, 235 
                + "SHR R1, R1;" //236 Check if R1 is uneven
                + "JC, 240;" //237, 238 If carry, that means its uneven, then jump to 240
                + "JMP, 243;" //239, 240
                + "CLF;" //241
                + "ADD R0, R2;" //242
                + "SHL R0, R0;" //243
                + "AND R1,R1;" //244
                + "JZ, 248;" //245, 246
                + "JMP, 236;" //247, 248
                + "XOR R2, R0;" //249 R0 = A XOR B
                + "XOR R0, R2;" //250 R1 = B XOR (A XOR B) = A
                + "XOR R2, R0;" //251 R0 = (A XOR B) XOR A = B
                + "DATA R2, 2;" //252, 253
                + "LD R2, R3;" //254, 255
                + "JMPR --,R3;" //256
            )
        );


        computer.insertProgramIntoRAM(0,
            computer.assembler(
                "JMP, 0;"
            )
        );


        computer.insertProgramIntoRAM(10,
            computer.assembler(
                "DATA R0, 27;" //10, 11
                + "DATA R1, 7;" //12, 13
                + "DATA R2, 2;" //14, 15
                + "DATA R3, 20;" //16, 17
                + "JMP, 221;" //18, 19
                + "DATA R2, 2;" //20, 21
                + "DATA R3, 26;" //22, 23
                + "JMP, 233;" //24, 25
                + "JMP, 0;"
                // + "CMP R1, R0;"
                // + "JA, 210;"
            )
        );
        refreshState();
    }, []);

    const registersUI = [
        { x: 0, y: 100, width: 150, height: 50, data: r3, name: 'R3', set: r3s, enable: r3e },
        { x: 250, y: 100, width: 150, height: 50, data: r2, name: 'R2', set: r2s, enable: r2e },
        { x: 500, y: 100, width: 150, height: 50, data: r1, name: 'R1', set: r1s, enable: r1e },
        { x: 750, y: 100, width: 150, height: 50, data: r0, name: 'R0', set: r0s, enable: r0e },
    ];


    // console.log(registers[0].getData() )

    const rectProps = { x: 200, y: 300, width: 1000, height: 600 };
    const registerGroupProps = {
        x: rectProps.x + (rectProps.width - registersUI.reduce((acc, curr) => curr.x > acc ? curr.x : acc, -Infinity) - registersUI[0].width) / 2,
        y: 100
    }

    return (
        <Layer>
            <SystemBus  parentDimension={{ width: 1920, height: 1400 }} />
            <Group x={600} y={0}>
                <Group {...registerGroupProps}>
                    {registersUI.map((reg, i) => (
                        <Register key={i} {...reg} />
                    ))}

                    {registersUI.map((reg, i) => (
                        <React.Fragment key={i}>
                            <Line
                                points={[
                                    reg.x + reg.width * 0.25, reg.y + reg.height, // start
                                    reg.x + reg.width * 0.25, reg.y + reg.height + 100 // end
                                ]}
                                stroke={reg.set !== reg.enable ?
                                    reg.set === 1 ? 'green' : 'red' : 'blue'
                                }
                                strokeWidth={reg.set !== reg.enable ? 9 : 3}
                            />
                            <Line
                                points={[
                                    reg.x + reg.width * 0.75, reg.y + reg.height, // start
                                    reg.x + reg.width * 0.75, reg.y + reg.height + 100 // end
                                ]}
                                stroke={reg.set !== reg.enable ?
                                    reg.enable === 1 ? 'green' : 'red' : 'blue'
                                }
                                strokeWidth={reg.set !== reg.enable ? 9 : 3}
                            />
                        </React.Fragment>
                    ))}
                </Group>



                <Rect
                    {...rectProps}
                    fill={"white"}
                    stroke={"grey"}
                />
            </Group>

        </Layer>
    );
}

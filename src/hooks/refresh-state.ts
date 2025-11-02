import computer from "cpu8-simulator";

import useRam from "./use-ram";
import useControlUnit from "./use-control-unit";
import { useACC, useIAR, useIR, useMAR, useR0, useR1, useR2, useR3, useTemporarly, useTMP } from "./use-registers";

export default function Refresh() {
    const { r0, setR0, r0s, setR0s, r0e, setR0e } = useR0();
    const { r1, setR1, r1s, setR1s, r1e, setR1e } = useR1();
    const { r2, setR2, r2s, setR2s, r2e, setR2e } = useR2();
    const { r3, setR3, r3s, setR3s, r3e, setR3e } = useR3();
    const { tmp, setTmp, tmps, setTmps, tmpe, setTmpe } = useTMP();
    const { marl, setMarl, marls, setMarls, marle, setMarle } = useMAR();
    const { acc, setAcc, accs, setAccs, acce, setAcce } = useACC();
    const { ir, setIr, irs, setIrs, ire, setIre } = useIR();
    const { iar, setIar, iars, setIars, iare, setIare } = useIAR();
    const { systemBus, setSystemBus, setSignal, enableSignal, setSetSignal, setEnableSignal } = useTemporarly();


    const {
        rowDecoder, setRowDecoder,
        columnDecoder, setColumnDecoder,
        dataGrid, setDataGrid
    } = useRam();

    const {
        setRam, setSetRam,
        enableRam, setEnableRam
    } = useControlUnit();

    const refreshRam = () => {
        setRowDecoder(computer.ram.rowDecoder.getOutput());
        setColumnDecoder(computer.ram.columnDecoder.getOutput());
        setDataGrid(
            computer.ram.dataGrid
                .map(
                    row => row.map(col => col.register.getData())
                )
        );
    }

    const refreshCU = () => {
        setSetRam(computer.controlUnit.controlLogicCore.ram_andGateS.getOutput());
        setEnableRam(computer.controlUnit.controlLogicCore.ram_andGateE.getOutput());
    }

    // // const [ir, setIr] = useState<IRegister>();
    // // const [iar, setIar] = useState<IRegister>();
    // // const [acc, setAcc] = useState<IRegister>();
    // // const [mar, setMar] = useState<IRegister>();
    // const [ramGrid, setRamGrid] = useState<IRamCell[][]>([]);
    // const [ramColumns, setRamColumns] = useState<any[]>([]);
    // const [ramRows, setRamRows] = useState<any[]>([]);
    // // const [alu, setAlu] = useState<IAlu>();
    // // alu?.getOutput


    const refreshState = () => {

        setSystemBus(computer.bus.getOutput())

        setMarl(computer.ram.marl.getData());
        setMarls(computer.controlUnit.controlLogicCore.mar_andGateS.getOutput());
        // setTmpe(computer.controlUnit.controlLogicCore.tmp_andGateE.getOutput());

        setAcc(computer.acc.getData());
        setAccs(computer.controlUnit.controlLogicCore.acc_andGateS.getOutput());
        setAcce(computer.controlUnit.controlLogicCore.acc_andGateE.getOutput());

        setTmp(computer.tmp.getData());
        setTmps(computer.controlUnit.controlLogicCore.tmp_andGateS.getOutput());
        setTmpe(computer.controlUnit.controlLogicCore.tmp_andGateE.getOutput());

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
        )       // niz objekata registara


        setIar(computer.iar.getData());
        setIars(computer.controlUnit.controlLogicCore.iar_OrmS.getOutput());
        setIare(computer.controlUnit.controlLogicCore.iar_OrmE.getOutput());

        setIr(computer.ir.getData());
        // setIre(computer.controlUnit.controlLogicCore.ir_OrmGate.getOutput());
        setIrs(computer.controlUnit.controlLogicCore.ir_andGateS.getOutput());

        refreshRam();
        refreshCU();
        // setIr(computer.ir);                          // objekat IR
        // setIar(computer.iar);                        // objekat IAR
        // setAcc(computer.acc);                        // objekat ACC
        // setMar(computer.ram.marl);                    // objekat MAR
        // setRamGrid(computer.ram.dataGrid.map(row => [...row])); // niz nizova objekata
        // setRamColumns([...computer.ram.columnDecoder.getOutput()]); // niz words
        // setRamRows([...computer.ram.rowDecoder.getOutput()]);
    };

    return [refreshState]
}
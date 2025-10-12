import type { Bit, Byte } from "../../../CPU8/dist/interface/interfaces";
import useComputerStore from "../store/computer-store/computer-store";

export default function useRegisters() {
  const r0: Byte = useComputerStore((state) => state.r0);
  const setR0 = useComputerStore((state) => state.setR0);
  const r0s: Bit = useComputerStore((state) => state.r0Set);
  const setR0s = useComputerStore((state) => state.setR0s);
  const r0e: Bit = useComputerStore((state) => state.r0Enable);
  const setR0e = useComputerStore((state) => state.setR0e);

  const r1: Byte = useComputerStore((state) => state.r1);
  const setR1 = useComputerStore((state) => state.setR1);
  const r1s: Bit = useComputerStore((state) => state.r1Set);
  const setR1s = useComputerStore((state) => state.setR1s);
  const r1e: Bit = useComputerStore((state) => state.r1Enable);
  const setR1e = useComputerStore((state) => state.setR1e);

  const r2: Byte = useComputerStore((state) => state.r2);
  const setR2 = useComputerStore((state) => state.setR2);
  const r2s: Bit = useComputerStore((state) => state.r2Set);
  const setR2s = useComputerStore((state) => state.setR2s);
  const r2e: Bit = useComputerStore((state) => state.r2Enable);
  const setR2e = useComputerStore((state) => state.setR2e);

  const r3: Byte = useComputerStore((state) => state.r3);
  const setR3 = useComputerStore((state) => state.setR3);
  const r3s: Bit = useComputerStore((state) => state.r3Set);
  const setR3s = useComputerStore((state) => state.setR3s);
  const r3e: Bit = useComputerStore((state) => state.r3Enable);
  const setR3e = useComputerStore((state) => state.setR3e);

  const marl: Byte = useComputerStore((state) => state.marl);
  const setMarl = useComputerStore((state) => state.setMarl);
  const marls: Bit = useComputerStore((state) => state.marlSet);
  const setMarls = useComputerStore((state) => state.setMarls);
  const marle: Bit = useComputerStore((state) => state.marlEnable);
  const setMarle = useComputerStore((state) => state.setMarle);

  const acc: Byte = useComputerStore((state) => state.acc);
  const setAcc = useComputerStore((state) => state.setAcc);
  const accs: Bit = useComputerStore((state) => state.accSet);
  const setAccs = useComputerStore((state) => state.setAccs);
  const acce: Bit = useComputerStore((state) => state.accEnable);
  const setAcce = useComputerStore((state) => state.setAcce);

  const tmp: Byte = useComputerStore((state) => state.tmp);
  const setTmp = useComputerStore((state) => state.setTmp);
  const tmps: Bit = useComputerStore((state) => state.tmpSet);
  const setTmps = useComputerStore((state) => state.setTmps);
  const tmpe: Bit = useComputerStore((state) => state.tmpEnable);
  const setTmpe = useComputerStore((state) => state.setTmpe);

  const ir: Byte = useComputerStore((state) => state.ir);
  const setIr = useComputerStore((state) => state.setIr);
  const irs: Bit = useComputerStore((state) => state.irSet);
  const setIrs = useComputerStore((state) => state.setIrs);
  const ire: Bit = useComputerStore((state) => state.irEnable);
  const setIre = useComputerStore((state) => state.setIre);

  const iar: Byte = useComputerStore((state) => state.iar);
  const setIar = useComputerStore((state) => state.setIar);
  const iars: Bit = useComputerStore((state) => state.iarSet);
  const setIars = useComputerStore((state) => state.setIars);
  const iare: Bit = useComputerStore((state) => state.iarEnable);
  const setIare = useComputerStore((state) => state.setIare);

  const flags: Byte = useComputerStore((state) => state.flags);
  const setFlags = useComputerStore((state) => state.setFlags);
  const flagss: Bit = useComputerStore((state) => state.flagsSet);
  const setFlagss = useComputerStore((state) => state.setFlagss);
  const flagse: Bit = useComputerStore((state) => state.flagsEnable);
  const setFlagse = useComputerStore((state) => state.setFlagse);

  const systemBus: Byte = useComputerStore((state) => state.systemBuss);
  const setSystemBus = useComputerStore((state) => state.setBussData);

  const setSignal: Bit = useComputerStore((state) => state.setSignal);
  const enableSignal: Bit = useComputerStore((state) => state.enableSignal);
  const setSetSignal = useComputerStore((state) => state.setSetSignal);
  const setEnableSignal = useComputerStore((state) => state.setEnableSignal);

  return {
    r0, setR0, r0s, setR0s, r0e, setR0e,
    r1, setR1, r1s, setR1s, r1e, setR1e,
    r2, setR2, r2s, setR2s, r2e, setR2e,
    r3, setR3, r3s, setR3s, r3e, setR3e,
    marl, setMarl, marls, setMarls, marle, setMarle,
    acc, setAcc, accs, setAccs, acce, setAcce,
    tmp, setTmp, tmps, setTmps, tmpe, setTmpe,
    ir, setIr, irs, setIrs, ire, setIre,
    iar, setIar, iars, setIars, iare, setIare,
    flags, setFlags, flagss, setFlagss, flagse, setFlagse,
    systemBus, setSystemBus,
    setSignal, setSetSignal, enableSignal, setEnableSignal
  };
}

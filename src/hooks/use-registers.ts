// hooks/useR0.ts
import useComputerStore from "../store/computer-store/computer-store";
import type { Byte, Bit } from "../../../CPU8/dist/interface/interfaces";

export function useR0() {
  const r0: Byte = useComputerStore(state => state.r0);
  const setR0 = useComputerStore(state => state.setR0);
  const r0s: Bit = useComputerStore(state => state.r0Set);
  const setR0s = useComputerStore(state => state.setR0s);
  const r0e: Bit = useComputerStore(state => state.r0Enable);
  const setR0e = useComputerStore(state => state.setR0e);

  return { r0, setR0, r0s, setR0s, r0e, setR0e };
}

// hooks/useR1.ts


export function useR1() {
  const r1: Byte = useComputerStore(state => state.r1);
  const setR1 = useComputerStore(state => state.setR1);
  const r1s: Bit = useComputerStore(state => state.r1Set);
  const setR1s = useComputerStore(state => state.setR1s);
  const r1e: Bit = useComputerStore(state => state.r1Enable);
  const setR1e = useComputerStore(state => state.setR1e);

  return { r1, setR1, r1s, setR1s, r1e, setR1e };
}

// hooks/useR2.ts


export function useR2() {
  const r2: Byte = useComputerStore(state => state.r2);
  const setR2 = useComputerStore(state => state.setR2);
  const r2s: Bit = useComputerStore(state => state.r2Set);
  const setR2s = useComputerStore(state => state.setR2s);
  const r2e: Bit = useComputerStore(state => state.r2Enable);
  const setR2e = useComputerStore(state => state.setR2e);

  return { r2, setR2, r2s, setR2s, r2e, setR2e };
}

// hooks/useR3.ts


export function useR3() {
  const r3: Byte = useComputerStore(state => state.r3);
  const setR3 = useComputerStore(state => state.setR3);
  const r3s: Bit = useComputerStore(state => state.r3Set);
  const setR3s = useComputerStore(state => state.setR3s);
  const r3e: Bit = useComputerStore(state => state.r3Enable);
  const setR3e = useComputerStore(state => state.setR3e);

  return { r3, setR3, r3s, setR3s, r3e, setR3e };
}

// hooks/useTMP.ts


export function useTMP() {
  const tmp: Byte = useComputerStore(state => state.tmp);
  const setTmp = useComputerStore(state => state.setTmp);
  const tmps: Bit = useComputerStore(state => state.tmpSet);
  const setTmps = useComputerStore(state => state.setTmps);
  const tmpe: Bit = useComputerStore(state => state.tmpEnable);
  const setTmpe = useComputerStore(state => state.setTmpe);

  return { tmp, setTmp, tmps, setTmps, tmpe, setTmpe };
}

// hooks/useMAR.ts


export function useMAR() {
  const marl: Byte = useComputerStore(state => state.marl);
  const setMarl = useComputerStore(state => state.setMarl);
  const marls: Bit = useComputerStore(state => state.marlSet);
  const setMarls = useComputerStore(state => state.setMarls);
  const marle: Bit = useComputerStore(state => state.marlEnable);
  const setMarle = useComputerStore(state => state.setMarle);

  return { marl, setMarl, marls, setMarls, marle, setMarle };
}

// hooks/useACC.ts


export function useACC() {
  const acc: Byte = useComputerStore(state => state.acc);
  const setAcc = useComputerStore(state => state.setAcc);
  const accs: Bit = useComputerStore(state => state.accSet);
  const setAccs = useComputerStore(state => state.setAccs);
  const acce: Bit = useComputerStore(state => state.accEnable);
  const setAcce = useComputerStore(state => state.setAcce);

  return { acc, setAcc, accs, setAccs, acce, setAcce };
}

// hooks/useIR.ts

export function useIR() {
  const ir: Byte = useComputerStore(state => state.ir);
  const setIr = useComputerStore(state => state.setIr);
  const irs: Bit = useComputerStore(state => state.irSet);
  const setIrs = useComputerStore(state => state.setIrs);
  const ire: Bit = useComputerStore(state => state.irEnable);
  const setIre = useComputerStore(state => state.setIre);

  return { ir, setIr, irs, setIrs, ire, setIre };
}

// hooks/useIAR.ts


export function useIAR() {
  const iar: Byte = useComputerStore(state => state.iar);
  const setIar = useComputerStore(state => state.setIar);
  const iars: Bit = useComputerStore(state => state.iarSet);
  const setIars = useComputerStore(state => state.setIars);
  const iare: Bit = useComputerStore(state => state.iarEnable);
  const setIare = useComputerStore(state => state.setIare);

  return { iar, setIar, iars, setIars, iare, setIare };
}

export function useTemporarly() {
  const systemBus: Byte = useComputerStore((state) => state.systemBuss);
  const setSystemBus = useComputerStore((state) => state.setBussData);

  const setSignal: Bit = useComputerStore((state) => state.setSignal);
  const enableSignal: Bit = useComputerStore((state) => state.enableSignal);
  const setSetSignal = useComputerStore((state) => state.setSetSignal);
  const setEnableSignal = useComputerStore((state) => state.setEnableSignal);

  return {
    systemBus,
    setSystemBus,
    setSignal,
    enableSignal,
    setSetSignal,
    setEnableSignal
  };
}

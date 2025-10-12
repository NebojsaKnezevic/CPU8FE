import { create } from "zustand";
import type { Bit, Byte } from "../../../../CPU8/dist/interface/interfaces";

const defaultByte: Byte = [0, 0, 0, 0, 0, 0, 0, 0];

interface IComputerStore {
  r0: Byte;
  r0Set: Bit;
  r0Enable: Bit;
  setR0: (newR0: Byte) => void;
  setR0s: (signal: Bit) => void;
  setR0e: (signal: Bit) => void;

  r1: Byte;
  r1Set: Bit;
  r1Enable: Bit;
  setR1: (newR1: Byte) => void;
  setR1s: (signal: Bit) => void;
  setR1e: (signal: Bit) => void;

  r2: Byte;
  r2Set: Bit;
  r2Enable: Bit;
  setR2: (newR2: Byte) => void;
  setR2s: (signal: Bit) => void;
  setR2e: (signal: Bit) => void;

  r3: Byte;
  r3Set: Bit;
  r3Enable: Bit;
  setR3: (newR3: Byte) => void;
  setR3s: (signal: Bit) => void;
  setR3e: (signal: Bit) => void;

  marl: Byte;
  marlSet: Bit;
  marlEnable: Bit;
  setMarl: (newMarl: Byte) => void;
  setMarls: (signal: Bit) => void;
  setMarle: (signal: Bit) => void;

  acc: Byte;
  accSet: Bit;
  accEnable: Bit;
  setAcc: (newAcc: Byte) => void;
  setAccs: (signal: Bit) => void;
  setAcce: (signal: Bit) => void;

  tmp: Byte;
  tmpSet: Bit;
  tmpEnable: Bit;
  setTmp: (newTmp: Byte) => void;
  setTmps: (signal: Bit) => void;
  setTmpe: (signal: Bit) => void;

  ir: Byte;
  irSet: Bit;
  irEnable: Bit;
  setIr: (newIr: Byte) => void;
  setIrs: (signal: Bit) => void;
  setIre: (signal: Bit) => void;

  iar: Byte;
  iarSet: Bit;
  iarEnable: Bit;
  setIar: (newIar: Byte) => void;
  setIars: (signal: Bit) => void;
  setIare: (signal: Bit) => void;

  flags: Byte;
  flagsSet: Bit;
  flagsEnable: Bit;
  setFlags: (newFlags: Byte) => void;
  setFlagss: (signal: Bit) => void;
  setFlagse: (signal: Bit) => void;

  systemBuss: Byte;
  setBussData: (newData: Byte) => void;

  setSignal: Bit;
  enableSignal: Bit;
  setSetSignal: (signal: Bit) => void;
  setEnableSignal: (signal: Bit) => void;
}

const useComputerStore = create<IComputerStore>((set) => ({
  r0: defaultByte,
  r0Set: 0,
  r0Enable: 0,
  setR0: (newR0) => set({ r0: newR0 }),
  setR0s: (signal) => set({ r0Set: signal }),
  setR0e: (signal) => set({ r0Enable: signal }),

  r1: defaultByte,
  r1Set: 0,
  r1Enable: 0,
  setR1: (newR1) => set({ r1: newR1 }),
  setR1s: (signal) => set({ r1Set: signal }),
  setR1e: (signal) => set({ r1Enable: signal }),

  r2: defaultByte,
  r2Set: 0,
  r2Enable: 0,
  setR2: (newR2) => set({ r2: newR2 }),
  setR2s: (signal) => set({ r2Set: signal }),
  setR2e: (signal) => set({ r2Enable: signal }),

  r3: defaultByte,
  r3Set: 0,
  r3Enable: 0,
  setR3: (newR3) => set({ r3: newR3 }),
  setR3s: (signal) => set({ r3Set: signal }),
  setR3e: (signal) => set({ r3Enable: signal }),

  marl: defaultByte,
  marlSet: 0,
  marlEnable: 0,
  setMarl: (newMarl) => set({ marl: newMarl }),
  setMarls: (signal) => set({ marlSet: signal }),
  setMarle: (signal) => set({ marlEnable: signal }),

  acc: defaultByte,
  accSet: 0,
  accEnable: 0,
  setAcc: (newAcc) => set({ acc: newAcc }),
  setAccs: (signal) => set({ accSet: signal }),
  setAcce: (signal) => set({ accEnable: signal }),

  tmp: defaultByte,
  tmpSet: 0,
  tmpEnable: 0,
  setTmp: (newTmp) => set({ tmp: newTmp }),
  setTmps: (signal) => set({ tmpSet: signal }),
  setTmpe: (signal) => set({ tmpEnable: signal }),

  ir: defaultByte,
  irSet: 0,
  irEnable: 0,
  setIr: (newIr) => set({ ir: newIr }),
  setIrs: (signal) => set({ irSet: signal }),
  setIre: (signal) => set({ irEnable: signal }),

  iar: defaultByte,
  iarSet: 0,
  iarEnable: 0,
  setIar: (newIar) => set({ iar: newIar }),
  setIars: (signal) => set({ iarSet: signal }),
  setIare: (signal) => set({ iarEnable: signal }),

  flags: defaultByte,
  flagsSet: 0,
  flagsEnable: 0,
  setFlags: (newFlags) => set({ flags: newFlags }),
  setFlagss: (signal) => set({ flagsSet: signal }),
  setFlagse: (signal) => set({ flagsEnable: signal }),

  systemBuss: defaultByte,
  setBussData: (newData) => set({systemBuss: newData}),

  setSignal: 0,
  enableSignal: 0,
  setSetSignal: (signal) => set({setSignal: signal}),
  setEnableSignal: (signal) => set({enableSignal : signal})
}));

export default useComputerStore;

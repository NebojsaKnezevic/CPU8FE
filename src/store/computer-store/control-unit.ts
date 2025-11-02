import { create } from "zustand";
import type { Bit } from "../../../../CPU8/dist/interface/interfaces";



interface IControlUnit{
    setRam: Bit;
    setSetRam: (val: Bit) => void;
    enableRam: Bit;
    setEnableRam: (val: Bit) => void;
}

const useControlUnitStore = create<IControlUnit>(set => {
    return({
        setRam: 0,
        setSetRam: (val: Bit) => set({setRam: val}),
        enableRam: 0,
        setEnableRam: (val: Bit) => set({enableRam: val})  
    });
});

export default useControlUnitStore;
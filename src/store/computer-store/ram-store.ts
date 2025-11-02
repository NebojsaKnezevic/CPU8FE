import { create } from "zustand";
import type { Byte, Word } from "../../../../CPU8/dist/interface/interfaces";

const defaultByte: Byte = [0, 0, 0, 0, 0, 0, 0, 0];
const defaultWord: Word = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 

interface IRamStore {
    rowDecoder: Word,
    setRowDecoder: (val: Word) => void,
    columnDecoder: Word,
    setColumnDecoder: (val: Word) => void,
    dataGrid: Byte[][],
    setDataGrid: (val: Byte[][]) => void,
    setDataGridCell: (j: number, i: number, val: Byte) => void
}

const useRamStore = create<IRamStore>((set) => ({
    rowDecoder: defaultWord,
    setRowDecoder: (val: Word) => set({ rowDecoder: val }),
    columnDecoder: defaultWord,
    setColumnDecoder: (val: Word) => set({ columnDecoder: val }),
    dataGrid: [[defaultByte]],
    setDataGrid: (val: Byte[][]) => set({ dataGrid: val }),
    setDataGridCell: (j: number, i: number, val: Byte) =>
        set(state => {
            const row = [...state.dataGrid[j]];
            row[i] = val; 
            const newGrid = [...state.dataGrid];
            newGrid[j] = row;
            return { dataGrid: newGrid };
        })
}));

export default useRamStore;

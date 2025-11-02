import useRamStore from "../store/computer-store/ram-store";


export default function useRam() {
    const rowDecoder = useRamStore((state) => state.rowDecoder);
    const setRowDecoder = useRamStore((state) => state.setRowDecoder);


    const columnDecoder = useRamStore((state) => state.columnDecoder);
    const setColumnDecoder = useRamStore((state) => state.setColumnDecoder);

    const dataGrid = useRamStore(state => state.dataGrid);
    const setDataGrid = useRamStore(state => state.setDataGrid);
    const setDataGridCell = useRamStore(state => state.setDataGridCell);
    

    return {
        rowDecoder, setRowDecoder,
        columnDecoder, setColumnDecoder,
        dataGrid, setDataGrid, setDataGridCell
    }
}




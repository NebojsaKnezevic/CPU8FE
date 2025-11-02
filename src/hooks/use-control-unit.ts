import type { Bit } from "../../../CPU8/dist/interface/interfaces";
import useControlUnitStore from "../store/computer-store/control-unit";




export default function useControlUnit() {
    const setRam: Bit = useControlUnitStore(state => state.setRam);
    const enableRam: Bit = useControlUnitStore(state => state.enableRam);
    const setSetRam = useControlUnitStore(state => state.setSetRam);
    const setEnableRam = useControlUnitStore(state => state.setEnableRam);

    return ({
        setRam, setSetRam,
        enableRam, setEnableRam
    });
}
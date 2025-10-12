import type { Byte } from "../../../CPU8/dist/interface/interfaces";

export const KonvaTheme = {
    stage:{
        height: 1400,
        width: 2000
    },
    bus: {
        strokeWidth: 2,
        onColor: "green",
        ofColor: "red",
        gap: 8,
        busWidth: (byte: Byte, gap: number): number => {
            return((byte.length-1) * gap + KonvaTheme.bus.strokeWidth);
        }
    },
    register: {
        strokeWidth: 1.5,
        color: "#007acc",
    },
    controlUnit: {
        strokeWidth: 2,
        color: "#ff5733",
    },
};
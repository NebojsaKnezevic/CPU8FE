import type { Byte } from "../../../CPU8/dist/interface/interfaces";

const strokeWidth = 2.5;
export const KonvaTheme = {
    stage: {
        height: 1350,
        width: 2800
    },
    bus: {
        strokeWidth: strokeWidth,
        onColor: "lightgreen",
        ofColor: "red",
        gap: 8,
        busWidth: (byte: Byte, gap: number): number => {
            return ((byte.length - 1) * gap + KonvaTheme.bus.strokeWidth);
        }
    },
    register: {
        strokeWidth: strokeWidth,
        color: "red",
        width: 100,
        height: 50,
        tmp: {
            name: 'TMP',
            x: 200,
            y: 80 
        },
        R0: {
            name: 'R0',
            x: 1000,
            y: 80
        },
        R1: {
            name: 'R1',
            x: 1110,
            y: 80
        },
        R2: {
            name: 'R2',
            x: 1220,
            y: 80
        },
        R3: {
            name: 'R3',
            x: 1330,
            y: 80
        },
        iar: {
            name: 'IAR',
            x: 1520,
            y: 700
        },
        ir: {
            name: 'IR',
            x: 1630,
            y: 700
        },
        mar: {
            name: 'MAR',
            x: 2530,
            y: 80
        },
        acc: {
            name: 'ACC',
            x: 300,
            y: 1210
        }

    },
    controlUnit: {
        strokeWidth: strokeWidth,
        color: "#ff5733",
    },
};
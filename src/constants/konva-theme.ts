import type { Byte } from "../../../CPU8/dist/interface/interfaces";



const strokeWidth = 2.5;
const screenWidth = 4000;
export const KonvaTheme = {
    stage: {
        height: screenWidth * 9 / 16,
        width: screenWidth,
        onColor: "lightgreen",
        ofColor: "red",
        setColor: '#FFD700',
        enableColor: '#00CED1',
        strokeWidth: strokeWidth,
        emptySignal: 'lightgrey'
    },
    bus: {
        strokeWidth: strokeWidth,
        onColor: "lightgreen",
        ofColor: "red",
        gap: 10,
        busWidth: (byte: Byte, gap: number): number => {
            return ((byte.length - 1) * gap + KonvaTheme.bus.strokeWidth);
        }
    },
    register: {
        strokeWidth: strokeWidth,
        color: "red",
        width: 150,
        height: 60,
        tmp: {
            name: 'TMP',
            x: 200,
            y: 120
        },
        R0: {
            name: 'R0',
            x: 1170,
            y: 120
        },
        R1: {
            name: 'R1',
            x: 1330,
            y: 120
        },
        R2: {
            name: 'R2',
            x: 1490,
            y: 120
        },
        R3: {
            name: 'R3',
            x: 1650,
            y: 120
        },
        iar: {
            name: 'IAR',
            x: 1120,
            y: 2060
        },
        ir: {
            name: 'IR',
            x: 1280,
            y: 2060
        },
        mar: {
            name: 'MAR',
            x: 2530,
            y: 120
        },
        acc: {
            name: 'ACC',
            x: 250,
            y: 2060
        }

    },
    controlUnit: {
        strokeWidth: strokeWidth,
        color: "#ff5733",
    },
    ram: {
        x: 2110,
        y: 250,
        width: 1700,
        height: 1720,
        strokeWidth: 4,
        decoder: {
            column: {
                x: 2200,
                y: 300,
                width: 1500,
                height: 50,
            },
            row: {
                x: 2150,
                y: 350,
                width: 50,
                height: 1500,
            }
        },
        memoryCell: {
            width: 75,
            height: 75,
            strokeWidth: 3
        }
    }
};
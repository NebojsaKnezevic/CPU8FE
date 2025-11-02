import { Fragment, type JSX } from "react";
import ColumnDecoder from "./decoder/column-decoder";
import RowDecoder from "./decoder/row-decoder";
import useRam from "../../../hooks/use-ram";
import MemoryCell from "./memory-cell/memory-cell";
import { KonvaTheme } from "../../../constants/konva-theme";
import { Group, Line, Rect } from "react-konva";
import Connection from "../bus/connection/connection";
import { useMAR } from "../../../hooks/use-registers";
import useControlUnit from "../../../hooks/use-control-unit";
import useRamStore from "../../../store/computer-store/ram-store";



export default function Ram(): JSX.Element {
    // const {
    //     rowDecoder, setRowDecoder,
    //     columnDecoder, setColumnDecoder,
    //     dataGrid, setDataGrid
    // } = useRam();
    const rowDecoder = useRamStore((state) => state.rowDecoder);
    const columnDecoder = useRamStore((state) => state.columnDecoder);
    const dataGrid = useRamStore(state => state.dataGrid);

    const { setRam, enableRam } = useControlUnit();
    const { marl } = useMAR();

    const column = KonvaTheme.ram.decoder.column;
    const row = KonvaTheme.ram.decoder.row;
    const ram = KonvaTheme.ram;
    const mar = KonvaTheme.register.mar;
    const register = KonvaTheme.register;
    const { groupx, groupy } = { groupx: 80, groupy: 50 };
    const busGap = KonvaTheme.bus.gap;
    const decoderConnectionGap = register.width / 7;
    const [a, b, c, d, e, f, g, h] = marl;
    const strokeWidth = KonvaTheme.bus.strokeWidth;

    const onColor = KonvaTheme.bus.onColor;
    const ofColor = KonvaTheme.bus.ofColor;
    const setColor = KonvaTheme.stage.setColor;
    const enableColor = KonvaTheme.stage.enableColor;
    const grayColor = KonvaTheme.stage.emptySignal;

    const memCell = KonvaTheme.ram.memoryCell;

    return (
        <Group x={groupx} y={groupy}>
            <Rect
                x={ram.x}
                y={ram.y}
                width={ram.width}
                height={ram.height}
                //   fill="green"
                stroke="white"
                strokeWidth={2}
            />
            <ColumnDecoder />

            <Line
                points={[
                    column.x + column.width + memCell.width + 18, column.y + 40,
                    column.x - 50, column.y + 40,
                    column.x - 50, column.y ,
                ]}
                stroke={enableRam ? enableColor : grayColor}
                strokeWidth={enableRam ? strokeWidth * 2 : strokeWidth}

            />

            <RowDecoder />
             <Line
                points={[
                    row.x + row.width - 8, row.y + row.height + memCell.height + 18,
                    row.x + row.width - 8, row.y - 70,
                    row.x + row.width - 8 - 20, row.y - 70,
                ]}
                stroke={setRam ? setColor : grayColor}
                strokeWidth={setRam ? strokeWidth * 2 : strokeWidth}

            />

            {rowDecoder.map((valr, j) => (
                <Fragment key={j}>
                    {columnDecoder.map((valc, i) => {
                        let x = (row.x + 60) + 100 * i;
                        let y = (column.y + 60) + 100 * j;
                        const isSelected = valc && valr;
                        return (
                            <>
                                <Line
                                    points={[x + memCell.width / 2, y, x + memCell.width / 2, y - 9]}
                                    stroke={valc && valr ? onColor : ofColor}
                                    strokeWidth={valc && valr ? strokeWidth * 2 : strokeWidth}

                                />

                                <Line
                                    points={[x, y + memCell.height / 2, x - 9, y + memCell.height / 2]}
                                    stroke={valc && valr ? onColor : ofColor}
                                    strokeWidth={valc && valr ? strokeWidth * 2 : strokeWidth}

                                />
                                <MemoryCell
                                    key={`${j}-${i}`}
                                    x={x}
                                    y={y}
                                    v={isSelected}
                                    h={isSelected}
                                    data={dataGrid[j][i].toString()}
                                    address={j * 16 + i}
                                    setRam={isSelected && setRam}
                                    enableRam={isSelected && enableRam}
                                />

                                <Line
                                    points={[x + memCell.width / 2, y + memCell.height, x + memCell.width / 2, y + 9 + memCell.height]}
                                    stroke={setRam ? setColor : 'grey'}
                                    strokeWidth={setRam ? strokeWidth * 2 : strokeWidth}

                                />

                                <Line
                                    points={[x + memCell.width, y + memCell.height / 2, x + 9 + memCell.width, y + memCell.height / 2]}
                                    stroke={enableRam ? enableColor : 'grey'}
                                    strokeWidth={enableRam ? strokeWidth * 2 : strokeWidth}

                                />
                            </>

                        );
                    })}
                </Fragment>
            ))}


            <Line
                points={[
                    mar.x - groupx + register.width, mar.y - groupy + register.height + busGap / 2,
                    mar.x - groupx + register.width, ram.decoder.column.y - busGap * 2
                ]}
                stroke={h ? onColor : ofColor}
                strokeWidth={strokeWidth * 2}
                lineCap="round"
                lineJoin="round"
            />

            <Line
                points={[
                    mar.x - groupx + register.width - decoderConnectionGap, mar.y - groupy + register.height + busGap / 2,
                    mar.x - groupx + register.width - decoderConnectionGap, ram.decoder.column.y - busGap * 2
                ]}
                stroke={g ? onColor : ofColor}
                strokeWidth={strokeWidth * 2}
                lineCap="round"
                lineJoin="round"
            />

            <Line
                points={[
                    mar.x - groupx + register.width - decoderConnectionGap * 2, mar.y - groupy + register.height + busGap / 2,
                    mar.x - groupx + register.width - decoderConnectionGap * 2, ram.decoder.column.y - busGap * 2
                ]}
                stroke={f ? onColor : ofColor}
                strokeWidth={strokeWidth * 2}
                lineCap="round"
                lineJoin="round"
            />

            <Line
                points={[
                    mar.x - groupx + register.width - decoderConnectionGap * 3, mar.y - groupy + register.height + busGap / 2,
                    mar.x - groupx + register.width - decoderConnectionGap * 3, ram.decoder.column.y - busGap * 2
                ]}
                stroke={e ? onColor : ofColor}
                strokeWidth={strokeWidth * 2}
                lineCap="round"
                lineJoin="round"
            />






            <Line
                points={[
                    mar.x - groupx + register.width - decoderConnectionGap * 4, mar.y - groupy + register.height + busGap / 2,
                    mar.x - groupx + register.width - decoderConnectionGap * 4, ram.decoder.column.y - busGap * 2 - 40,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 420, ram.decoder.column.y - busGap * 2 - 40,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 420, ram.decoder.column.y - busGap * 2 - 40 + 360,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 420 + 36, ram.decoder.column.y - busGap * 2 - 40 + 360,
                ]}
                stroke={d ? onColor : ofColor}
                strokeWidth={strokeWidth * 2}
                lineCap="round"
                lineJoin="round"
            />

            <Line
                points={[
                    mar.x - groupx + register.width - decoderConnectionGap * 5, mar.y - groupy + register.height + busGap / 2,
                    mar.x - groupx + register.width - decoderConnectionGap * 5, ram.decoder.column.y - busGap * 2 - 60,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 440, ram.decoder.column.y - busGap * 2 - 60,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 440, ram.decoder.column.y - busGap * 2 - 60 + 400,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 440 + 56, ram.decoder.column.y - busGap * 2 - 60 + 400
                ]}
                stroke={c ? onColor : ofColor}
                strokeWidth={strokeWidth * 2}
                lineCap="round"
                lineJoin="round"
            />

            <Line
                points={[
                    mar.x - groupx + register.width - decoderConnectionGap * 6, mar.y - groupy + register.height + busGap / 2,
                    mar.x - groupx + register.width - decoderConnectionGap * 6, ram.decoder.column.y - busGap * 2 - 80,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 460, ram.decoder.column.y - busGap * 2 - 80,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 460, ram.decoder.column.y - busGap * 2 - 80 + 440,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 460 + 76, ram.decoder.column.y - busGap * 2 - 80 + 440,
                ]}
                stroke={b ? onColor : ofColor}
                strokeWidth={strokeWidth * 2}
                lineCap="round"
                lineJoin="round"
            />

            <Line
                points={[
                    mar.x - groupx + register.width - decoderConnectionGap * 7, mar.y - groupy + register.height + busGap / 2,
                    mar.x - groupx + register.width - decoderConnectionGap * 7, ram.decoder.column.y - busGap * 2 - 100,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 480, ram.decoder.column.y - busGap * 2 - 100,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 480, ram.decoder.column.y - busGap * 2 - 100 + 480,
                    mar.x - groupx + register.width - decoderConnectionGap * 4 - 480 + 96, ram.decoder.column.y - busGap * 2 - 100 + 480
                ]}
                stroke={a ? onColor : ofColor}
                strokeWidth={strokeWidth * 2}
                lineCap="round"
                lineJoin="round"
            />

        </Group>

    );
}
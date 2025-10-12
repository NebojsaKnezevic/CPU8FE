import type { JSX } from "react";
import { Arc, Rect } from "react-konva";
import useRegisters from "../../../hooks/use-registers";
import { KonvaTheme } from "../../../constants/konva-theme";
import Connection from "./connection/connection";
import ArcConnection from "./arc-connection/arc-connection";

interface ISystemBus {
  parentDimension: {
    width: number;
    height: number;
  };

}

function angle() {
  let x = 0;
  return () => KonvaTheme.bus.gap * x++;
  // return () => 0 + (9.9 * x++) + (KonvaTheme.bus.strokeWidth * 1);
}


export default function SystemBus(props: ISystemBus): JSX.Element {
  const { parentDimension } = props;
  const gap = KonvaTheme.bus.gap;
  const lineWidth = KonvaTheme.bus.strokeWidth;
  const busWidth = KonvaTheme.bus.busWidth([0,0,0,0,0,0,0,0], gap);

  const {
    systemBus
  } = useRegisters();

  const incAnglex = angle();
  const incAngley = angle();
  const incAnglex1 = angle();
  const incAngley1 = angle();

  return <>{systemBus.map((bit, i) => <Rect
    key={i}
    x={lineWidth + gap * i}
    y={lineWidth + gap * i}
    width={parentDimension.width - 2 * (lineWidth + gap * i)}
    height={parentDimension.height - 2 * (lineWidth + gap * i)}
    stroke={bit === 1 ? KonvaTheme.bus.onColor : KonvaTheme.bus.ofColor}
    strokeWidth={KonvaTheme.bus.strokeWidth}
  />)}


    <Connection gap={gap} direction="up" basePoints={[
      1000, 0,
      1000, 200
    ]} />


    <Connection gap={gap} direction="down" basePoints={[
      200, 200,
      200, 700
    ]} />

    <ArcConnection rotation={180} reverse={true}
      x={
       200
        + KonvaTheme.bus.busWidth([0, 0, 0, 0, 0, 0, 0, 0], gap)
        + KonvaTheme.bus.strokeWidth
      }
      y={KonvaTheme.stage.height - 200}
    />

     <Connection connectToMainBus={false} gap={gap} direction="left" basePoints={[
       lineWidth+200+busWidth, KonvaTheme.stage.height -200 - busWidth - lineWidth,
      lineWidth+500 + busWidth, KonvaTheme.stage.height -200- busWidth - lineWidth
    ]} />



    <ArcConnection rotation={90} reverse={true}
      x={
        1000
        + busWidth
        + lineWidth
      }
      y={200}
    />



    <Connection reverse={true} connectToMainBus={false} gap={gap} direction="left" basePoints={[
      1000 + busWidth + lineWidth, 200,
      1300 + busWidth + lineWidth, 200
    ]} />


    <Connection gap={gap} direction="right" basePoints={[
      0, 300,
      300, 300
    ]} />




  </>;
}

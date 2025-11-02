import type { JSX } from "react";
import { Arc, Rect } from "react-konva";
// import useRegisters from "../../../hooks/use-registers";
import { KonvaTheme } from "../../../constants/konva-theme";
import Connection from "./connection/connection";
import ArcConnection from "./arc-connection/arc-connection";
import { useTemporarly } from "../../../hooks/use-registers";


function angle() {
  let x = 0;
  return () => KonvaTheme.bus.gap * x++;
  // return () => 0 + (9.9 * x++) + (KonvaTheme.bus.strokeWidth * 1);
}


export default function SystemBus(): JSX.Element {
  const gap = KonvaTheme.bus.gap;
  const lineWidth = KonvaTheme.bus.strokeWidth;
  const busWidth = KonvaTheme.bus.busWidth([0,0,0,0,0,0,0,0], gap);

  const { systemBus, setSystemBus, setSignal, enableSignal, setSetSignal, setEnableSignal } = useTemporarly();



  return <>{systemBus.map((bit, i) => <Rect
    key={i}
    x={lineWidth + gap * i}
    y={lineWidth + gap * i}
    width={KonvaTheme.stage.width - 2 * (lineWidth + gap * i)}
    height={KonvaTheme.stage.height - 2 * (lineWidth + gap * i)}
    stroke={bit === 1 ? KonvaTheme.bus.onColor : KonvaTheme.bus.ofColor}
    strokeWidth={bit === 0 ? KonvaTheme.bus.strokeWidth : KonvaTheme.bus.strokeWidth * 2}
  />)}


  <Connection gap={gap} direction="up" basePoints={[
      KonvaTheme.register.tmp.x + (KonvaTheme.register.width - busWidth) / 2, 0,
      KonvaTheme.register.tmp.x + (KonvaTheme.register.width - busWidth) / 2, KonvaTheme.register.tmp.y
    ]} />

  <Connection gap={gap} direction="up" basePoints={[
      KonvaTheme.register.R0.x + (KonvaTheme.register.width - busWidth) / 2, 0,
      KonvaTheme.register.R0.x + (KonvaTheme.register.width - busWidth) / 2, KonvaTheme.register.R0.y
    ]} />

<Connection gap={gap} direction="up" basePoints={[
      KonvaTheme.register.R1.x + (KonvaTheme.register.width - busWidth) / 2, 0,
      KonvaTheme.register.R1.x + (KonvaTheme.register.width - busWidth) / 2, KonvaTheme.register.R1.y
    ]} />

    <Connection gap={gap} direction="up" basePoints={[
      KonvaTheme.register.R2.x + (KonvaTheme.register.width - busWidth) / 2, 0,
      KonvaTheme.register.R2.x + (KonvaTheme.register.width - busWidth) / 2, KonvaTheme.register.R2.y
    ]} />

    <Connection gap={gap} direction="up" basePoints={[
      KonvaTheme.register.R3.x + (KonvaTheme.register.width - busWidth) / 2, 0,
      KonvaTheme.register.R3.x + (KonvaTheme.register.width - busWidth) / 2, KonvaTheme.register.R3.y
    ]} />

       <Connection gap={gap} direction="up" basePoints={[
      KonvaTheme.register.mar.x + (KonvaTheme.register.width - busWidth) / 2, 0,
      KonvaTheme.register.mar.x + (KonvaTheme.register.width - busWidth) / 2, KonvaTheme.register.mar.y
    ]} />

   <Connection gap={gap} direction="down" basePoints={[
      KonvaTheme.register.acc.x + (KonvaTheme.register.width - busWidth) / 2, KonvaTheme.register.acc.y,
      KonvaTheme.register.acc.x + (KonvaTheme.register.width - busWidth) / 2, 0
    ]} />


    <Connection gap={gap} direction="down" basePoints={[
      
      KonvaTheme.ram.x + 600, KonvaTheme.ram.height * 1.175,
      KonvaTheme.ram.x + 600, KonvaTheme.ram.y 
    ]}/>

    {/* <Connection gap={gap} direction="up" basePoints={[
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
    /> */}

     {/* <Connection connectToMainBus={false} gap={gap} direction="left" basePoints={[
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
    ]} /> */}




  </>;
}

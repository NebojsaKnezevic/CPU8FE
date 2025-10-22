import { Line } from "react-konva";
import useRegisters from "../../../../hooks/use-registers";
import { KonvaTheme } from "../../../../constants/konva-theme";

interface IConnectionProps {
    gap: number;
    direction: Direction;
    basePoints: number[];
    connectToMainBus?: boolean;
    reverse?: boolean;
}
type Direction = 'left' | 'right' | 'up' | 'down'

export default function Connection(props: IConnectionProps) {
    const {gap, direction, basePoints, connectToMainBus = true, reverse = false } = props;


    const {
        systemBus
    } = useRegisters();

    const bus = [...systemBus];

    if(reverse) bus.reverse();

    return (
        <>

            {bus.map((bit, i) => {
                const shiftedPoints = basePoints.map((p, j) => {
                    let calc = 0;
                    calc = i * gap + KonvaTheme.bus.strokeWidth;
                    if (direction === 'left') {
                        if (j % 2 !== 0) //y
                        {
                            return p + calc;
                        }
                        else //x
                        {
                            if (j === 0 && connectToMainBus) {
                                return p + calc;
                            }
                            else
                                return p;
                        }
                    } else if (direction === 'up') {
                        if (j % 2 === 0) //x desno
                        {
                            return p + calc;
                        }
                        else //y dole
                        {
                            if (j === 1 && connectToMainBus) {
                                return p + calc;
                            }
                            else
                                return p;
                        }
                    } else if (direction === 'down') {
                        if (j % 2 === 0) //x desno
                        {
                            return p + calc;
                        }
                        else //y dole
                        {
                            if(!connectToMainBus) calc = 0;
                            if (j === 1) {
                                return  p ;
                            }
                            else
                                return KonvaTheme.stage.height - calc ;
                        }
                    } else {
                         if (j % 2 !== 0) //y
                        {
                            return p + calc;
                        }
                        else //x
                        {
                            if (j === 0 && connectToMainBus) {
                                return KonvaTheme.stage.width - p - calc;
                            }
                            else
                                return KonvaTheme.stage.width - p;
                        }
                    }


                }
                );

                return (
                    <Line
                        key={i}
                        points={shiftedPoints || [0, 0]}
                        stroke={bit === 1 ? KonvaTheme.bus.onColor : KonvaTheme.bus.ofColor}
                        strokeWidth={KonvaTheme.bus.strokeWidth}
                        lineCap="round"
                        lineJoin="round"
                    />
                );
            })}
        </>

    );
}
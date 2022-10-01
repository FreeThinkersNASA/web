import WorldWind from '@nasaworldwind/worldwind';
import { useEffect, useMemo, useRef } from 'react';
import { useElementSize } from 'usehooks-ts';

import { uuid } from '../../utils';

export function Component() {
    const canvasRef = useRef<HTMLCanvasElement>();
    const canvasID = useMemo(() => uuid(), []);
    const wwInstanceRef = useRef<WorldWind.WorldWindow>();

    useEffect(() => {
        if (!canvasRef.current || wwInstanceRef.current) {
            return;
        }

        wwInstanceRef.current = new WorldWind.WorldWindow(canvasID);
        const ww = wwInstanceRef.current;
        ww.addLayer(new WorldWind.BingAerialLayer(null));
    }, [canvasID, canvasRef]);

    useEffect(() => {
        wwInstanceRef.current.redraw();
    });

    return (
        <canvas
            ref={canvasRef}
            id={canvasID}
            style={{
                background: 'black',
                height: '100%',
                width: '100vw',
            }}
        >
            No globe for you :-(
        </canvas>
    );
}

import Globe from 'react-globe.gl';
import { useElementSize } from 'usehooks-ts';

export function Component() {
    const [ref, { width, height }] = useElementSize();

    return (
        <div ref={ref}>
            <Globe width={width} height={height} globeImageUrl='/earth.jpg' />
        </div>
    );
}

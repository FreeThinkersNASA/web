import { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { useElementSize } from 'usehooks-ts';

export function Component() {
    const [ref, { width, height }] = useElementSize();

    const [data, setData] = useState({ features: [] });

    useEffect(() => {
        fetch('/czechia.json')
            .then((res) => res.json())
            .then(setData);
    }, []);

    return (
        <div ref={ref}>
            <Globe
                width={width}
                height={height}
                globeImageUrl='/earth.jpg'
                hexPolygonsData={data.features}
                hexPolygonColor={(i: any) => i?.properties?.color ?? '#fff'}
                hexPolygonResolution={5}
                hexPolygonMargin={0.1}
                hexPolygonLabel={({ properties: p }: any) => {
                    return `<div style="padding: 10px; background: rgba(0, 0, 0, 0.75); border-radius: 12px; border: 0.5px solid white;"><b>Means:</b><br />Temperature: <i>${p.temperature}</i><br />Irradiance: <i>${p.irradiance}</i><br />Wind speed: <i>${p.windSpeed}</i><br />Precipitation: <i>${p.precipitation}</i></div>`;
                }}
            />
        </div>
    );
}

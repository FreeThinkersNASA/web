import { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { useElementSize } from 'usehooks-ts';

export function Component() {
    const [ref, { width, height }] = useElementSize();

    const [countries, setCountries] = useState({ features: [] });

    useEffect(() => {
        // load data
        fetch('/czechia.json')
            .then((res) => res.json())
            .then(setCountries);
    }, []);

    return (
        <div ref={ref}>
            <Globe
                width={width}
                height={height}
                globeImageUrl='/earth.jpg'
                hexPolygonsData={countries.features}
                hexPolygonColor={(i: any) => {
                    console.log(i);
                    return (
                        i.properties.color ?? '#000'
                        // `#${Math.round(Math.random() * Math.pow(2, 24))
                        //     .toString(16)
                        //     .padStart(6, '0')}`
                    );
                }}
                hexPolygonResolution={5}
                hexPolygonMargin={0.1}
            />
        </div>
    );
}

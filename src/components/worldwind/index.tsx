import dynamic from 'next/dynamic';

export const WorldWind = dynamic(
    () => import('./component').then((m) => m.Component),
    {
        ssr: false,
    },
);

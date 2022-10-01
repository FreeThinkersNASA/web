import dynamic from 'next/dynamic';

export const Globe = dynamic(
    () => import('./component').then((m) => m.Component),
    {
        ssr: false,
    },
);

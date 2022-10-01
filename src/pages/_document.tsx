import { Html, Head, Main, NextScript } from 'next/document';
import CssBaseline from '@mui/material/CssBaseline';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link rel='stylesheet' href='cesium/Widgets/widgets.css' />
                <CssBaseline />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

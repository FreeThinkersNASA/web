import { Html, Head, Main, NextScript } from 'next/document';
import CssBaseline from '@mui/material/CssBaseline';

export default function Document() {
    return (
        <Html>
            <Head>
                <meta
                    name='viewport'
                    content='initial-scale=1, width=device-width'
                />
                <CssBaseline />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

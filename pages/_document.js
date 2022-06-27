import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    render() {
        return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />

                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-500x500.png" />
                
                <meta name='theme-color' content='#1a1a1a'/>

            </Head>
            <body>
                <Main />
                <NextScript />
                
            </body>
        </Html>
        )
    }
}

export default MyDocument
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


class MyDocument extends Document {
    render() {
        return (
        <Html>
            <Head>
            {/* Material UI */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />

            {/* Font awesome */}

                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-500x500.png" />
                
                <meta name='theme-color' content='#1a1a1a'/>

            </Head>
            <body>
                <Main />
                <NextScript />

                <Script src="https://kit.fontawesome.com/af9ea1f796.js" crossorigin="anonymous"></Script>
                
            </body>
        </Html>
        )
    }
}

export default MyDocument
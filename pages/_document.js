import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="/css/nprogress.min.css" type='text/css' />
        <link rel='stylesheet' href='/css/main.css' type='text/css'></link>
      </Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  )
}
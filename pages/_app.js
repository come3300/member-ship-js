import 'styles/globals.css'
import 'styles/global.scss'
import Head from "next/head";
import 'highlight.js/styles/github.css'; // 使用するスタイルをインポート

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/github.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
import Head from "next/head";
import Navbar from "../components/Navbar";
import "semantic-ui-css/semantic.min.css";
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

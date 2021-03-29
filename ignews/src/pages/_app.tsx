import { AppProps } from "next/app";
import { Head } from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;

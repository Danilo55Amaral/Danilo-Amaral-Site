import { AppProps } from "next/app"
import { GlobalStyle } from '../styles/global';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <Header />
      {/* <Footer /> */}
    </>
  )
}

export default MyApp

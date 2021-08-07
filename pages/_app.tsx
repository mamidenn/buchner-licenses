import "../styles/main.scss";
// import "bootstrap/dist/css/bootstrap.css";
// import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container py-3">
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;

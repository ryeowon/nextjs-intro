import NavBar from "../components/NavBar";
import "../styles/globals.css"; //_app.js 에서만 import 가능, 다른 곳에서는 module이어야 함

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

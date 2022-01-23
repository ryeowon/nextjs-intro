import Layout from "../components/Layout";
import "../styles/globals.css"; //_app.js 에서만 import 가능, 다른 곳에서는 module이어야 함

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

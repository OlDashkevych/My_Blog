import NextNprogress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="yellow"
        startPosition="0.3"
        stopDelayMs="200"
        height="2"
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

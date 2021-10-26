import { Provider } from "react-redux";
import "../styles/globals.css";
import "../styles/swiper.min.css";
import "../styles/navigation.min.css";
import { useStore } from "../store";

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

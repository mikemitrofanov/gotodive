import { useState } from "react";
import { Provider } from "react-redux";
import "../js/interpreter.js";
import "../styles/globals.css";
import "../styles/swiper.min.css";
import "../styles/navigation.min.css";
import { useStore } from "../store";

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Provider store={store}>
      <Component {...pageProps} isOpened={isOpened} setIsOpened={setIsOpened} />
    </Provider>
  );
}

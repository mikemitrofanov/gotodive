import { useState } from "react";
import "../js/interpreter.js";
import "../styles/globals.css";
import "../styles/swiper.min.css";
import "../styles/navigation.min.css";
import { Provider } from "react-redux";
import { useStore } from "../store";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [isOpened, setIsOpened] = useState(false);
  const [language, setLanguage] = useState("");

  return (
    <Provider store={store}>
      <Component {...pageProps} isOpened={isOpened} setIsOpened={setIsOpened} language={language} setLanguage={setLanguage} />
    </Provider>
  );
}

export default MyApp;

import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import "../styles/navigation.css";
import { useStore } from "../store";
import "../styles/swiper.css";
import "../styles/fancybox.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);

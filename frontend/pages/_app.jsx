import {appWithTranslation} from "next-i18next";
import {Provider} from "react-redux";
import {useStore} from "../store";
import "../styles/globals.css";
import "../styles/navigation.css";
import "../styles/swiper.css";
import "@fancyapps/ui/dist/fancybox.css";

function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default appWithTranslation(MyApp);

import {appWithTranslation} from "next-i18next";
import {Provider} from "react-redux";
import {useStore} from "../store";
import 'swiper/css/bundle';
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default appWithTranslation(MyApp);

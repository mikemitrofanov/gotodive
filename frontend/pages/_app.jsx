import {appWithTranslation} from "next-i18next";
import {Provider} from "react-redux";
import {useStore} from "../store";
import "../styles/globals.css";
import "swiper/css/bundle";
import "../styles/navigation.css";
import "../styles/swiper.css";
import "@fancyapps/ui/dist/fancybox.css";

function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);
    const Layout = Component.layout || (({children}) => children);

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default appWithTranslation(MyApp);

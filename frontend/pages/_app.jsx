import {appWithTranslation} from "next-i18next";
import {Provider} from "react-redux";
import {useStore} from "../redux/store";
import "swiper/css/bundle";
import "@fancyapps/ui/dist/fancybox.css";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);
    const Layout = Component.layout || (({children}) => children);

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default appWithTranslation(MyApp);

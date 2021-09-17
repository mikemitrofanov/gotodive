// import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../styles/topNavBar.css'
import {Provider} from "react-redux";
import {useStore} from "../store";

function MyApp({Component, pageProps}) {

    const {store} = useStore(pageProps.initialReduxState)
    return <Provider store={store}>
            <Component {...pageProps} />
    </Provider>
}

export default MyApp

import {initializeStore, removeUndefined} from "../redux/store";

export const withRedux = getServerSideProps => async (ctx) => {
    const store = initializeStore();
    const result = await getServerSideProps(ctx, store)

    return {
        ...result,

        props: {
            initialReduxState: removeUndefined(store.getState()),
            ...result.props
        }

    }
}

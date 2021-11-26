import { initializeStore, removeUndefined } from "../redux/store";

export const withRedux = getServerSideProps => async (ctx) => {
    const store = initializeStore();
    const { dispatch } = store;
    const result = await getServerSideProps(ctx, dispatch)

    return {
        ...result,

        props: {
            initialReduxState: removeUndefined(store.getState()),
            ...result.props
        }

    }

}
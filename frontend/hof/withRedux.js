import {initializeStore, removeUndefined} from "../redux/store";

export const withRedux = fn => async (ctx) => {
    const store = initializeStore();
    const result = await fn(ctx, store)

    return {
        ...result,

        props: {
            initialReduxState: removeUndefined(store.getState()),
            ...result.props
        }

    }
}

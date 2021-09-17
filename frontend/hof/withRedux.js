import {initializeStore} from "../store";

export const withRedux = getServerSideProps => async (ctx) => {
    const {store} = initializeStore();
    const {dispatch} = store;
    const result = await getServerSideProps(ctx, dispatch)

    return {
        ...result,

        props: {
            initialReduxState: await store.getState(),
            ...result.props
        }

    }

}
import {initializeStore, removeUndefined} from "../store";
import {categoriesApi} from "../store/categories/action";

export const withRedux = getServerSideProps => async (ctx) => {
    const store = initializeStore();
    const {dispatch} = store;
    const result = await getServerSideProps(ctx, dispatch)
    await dispatch(categoriesApi.endpoints.getAllCategories.initiate())

    return {
        ...result,

        props: {
            initialReduxState: removeUndefined(store.getState()),
            ...result.props
        }

    }

}
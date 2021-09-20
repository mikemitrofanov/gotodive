import {createApi, fetchBaseQuery} from "@rtk-incubator/rtk-query";

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_URL + '/ru/',
        prepareHeaders(headers) {
            headers.set('Accept', 'application/json')
            return headers
        }

    }),
    endpoints: (build) => ({
        getCategories: build.query({
            query: (arg) => `service-categories/${arg}`

        }),
        getAllCategories: build.query({
            query: () => 'service-categories'
        })
    }),

})
export const {useGetServicesQuery} = categoriesApi;



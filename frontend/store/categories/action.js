import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_URL + '/ru/',
    }),
    endpoints: (build) => ({
        getCategory: build.query({
            query: (arg) => `service-categories/${arg}`

        }),
        getAllCategories: build.query({
            query: () => 'service-categories'
        })
    }),

})
export const {useGetServicesQuery} = categoriesApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { randomInteger } from "../../helpers/randomInteger";

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_URL,
    }),
    endpoints: (build) => ({
        getCategory: build.query({
            query: (arg) => `service-categories/${arg}`
        }),
        getAllCategories: build.query({
            query: () => 'service-categories/services'
        }),
        getPopularServices: build.query({
            query: (language = 'ru') => `${language}/services/popular`,
            transformResponse: (baseQueryReturnValue, meta) =>
                baseQueryReturnValue.data.map(service => service.imageUrl ? service : {
                    ...service,
                    'imageUrl': `/images/slider/img${randomInteger(1, 3)}.png`
                }),
        }),
    }),

})

export const { useGetServicesQuery } = categoriesApi;
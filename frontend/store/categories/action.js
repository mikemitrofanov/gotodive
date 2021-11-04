import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        getAllCategories: build.query({
            query: (language) => `${language}/service-categories/services`
        }),
        getPopularServices: build.query({
            query: (language) => `${language}/services/popular`,
            transformResponse: (baseQueryReturnValue, meta) =>
                baseQueryReturnValue.data.map(service => service.imageUrl ? service : {
                    ...service,
                    'imageUrl': `/images/popular/image1.png`
                }),
        }),
    }),

})

export const { useGetPopularServicesQuery, useGetAllCategoriesQuery } = categoriesApi;
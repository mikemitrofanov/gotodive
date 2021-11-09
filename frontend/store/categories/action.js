import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {createApi} from '@reduxjs/toolkit/query/react';
import {randomInteger} from "../../helpers/randomInteger";

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
                    'imageUrl': `/images/slider/img${randomInteger(1, 3)}.png`
                }),
        }),
        getCategories: build.query({
            query: (language) => `${language}/service-categories`
        }),
        getService: build.query({
            query: ({language, id}) => `${language}/services/${id}`,
            transformResponse: response => {
                return response.data
            }
        }),


        // getPopularServices: build.query({
        //     query: (language) => `${language}/services/popular`,
        //     transformResponse: (baseQueryReturnValue, meta) =>
        //         baseQueryReturnValue.data.map(service => service.photos[0]?.photo_url ? {
        //             ...service,
        //             'imageUrl': `${process.env.NEXT_PUBLIC_URL}/storage/${service.photos[0]?.photo_url}`

        //         } : {
        //             ...service,
        //             'imageUrl': `/images/slider/img${randomInteger(1, 3)}.png`
        //         }),
        // }),
    }),

})

export const {
    useGetPopularServicesQuery,
    useGetAllCategoriesQuery,
    useGetCategoriesQuery,
    useGetServiceQuery,
} = categoriesApi;
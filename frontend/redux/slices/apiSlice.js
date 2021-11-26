import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {createApi} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    endpoints: (build) => ({
        getAllCategories: build.query({
            query: (language) => `${language}/service-categories/services`,
            transformResponse: response => {
                return response.data
            }
        }),

        getPopularServices: build.query({
            query: (language) => `${language}/services/popular`,
            transformResponse: (baseQueryReturnValue, meta) =>
                baseQueryReturnValue.data.map(service => service.imageUrl ? service : {
                    ...service,
                    'imageUrl': `/images/popular/image1.png`
                }),
        }),

        getServices: build.query({
            query: ({language, id}) => `${language}/services/${id}`,
            transformResponse: response => {
                return response.data
            }
        }),

        getPhotoGallery: build.query({
            query: () => '/photos',
            transformResponse: response => {
                return response.data
            }
        })
    })
})

export const {
    useGetPopularServicesQuery,
    useGetAllCategoriesQuery,
    useGetServicesQuery,
    useGetPhotoGalleryQuery
} = apiSlice;
